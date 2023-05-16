import { Translations } from '../../../i18n/api'
import {
  BenefitKey,
  EntitlementResultType,
  PartnerBenefitStatus,
  ResultKey,
  ResultReason,
} from '../definitions/enums'
import {
  CardCollapsedText,
  EligibilityResult,
  EntitlementResultOas,
  ProcessedInput,
  LinkWithAction,
  MetaDataObject,
  MonthsYears,
} from '../definitions/types'
import roundToTwo from '../helpers/roundToTwo'
import { getDeferralIncrease } from '../helpers/utils'
import legalValues from '../scrapers/output'
import { BaseBenefit } from './_base'

export class OasBenefit extends BaseBenefit<EntitlementResultOas> {
  partner: Boolean
  income: number
  constructor(
    input: ProcessedInput,
    translations: Translations,
    partner?: Boolean
  ) {
    super(input, translations, BenefitKey.oas)
    this.partner = partner
    this.income = this.partner
      ? this.input.income.partner
      : this.input.income.client
  }

  protected getEligibility(): EligibilityResult {
    // helpers
    const meetsReqAge = this.input.age >= 65

    // if income is not provided (only check client income), assume they meet the income requirement
    const skipReqIncome = this.income === undefined

    // income limit is higher at age 75
    const incomeLimit =
      this.input.age >= 75
        ? legalValues.oas.incomeLimit75
        : legalValues.oas.incomeLimit

    // Income is irrelevant therefore next will always be true
    const meetsReqIncome = skipReqIncome || this.income >= 0

    const requiredYearsInCanada = this.input.livingCountry.canada ? 10 : 20
    const meetsReqYears =
      this.input.yearsInCanadaSince18 >= requiredYearsInCanada
    const meetsReqLegal = this.input.legalStatus.canadian

    // main checks
    if (meetsReqIncome && meetsReqLegal && meetsReqYears) {
      if (meetsReqAge && skipReqIncome)
        return {
          result: ResultKey.INCOME_DEPENDENT,
          reason: ResultReason.INCOME_MISSING,
          detail: this.translations.detail.oas.eligibleIfIncomeIsLessThan,
          incomeMustBeLessThan: incomeLimit,
        }
      else if (meetsReqAge) {
        return {
          result: ResultKey.ELIGIBLE,
          reason:
            this.income > incomeLimit
              ? ResultReason.INCOME
              : this.input.age >= 65 && this.input.age < 70
              ? ResultReason.AGE_65_TO_69
              : ResultReason.AGE_70_AND_OVER,
          detail:
            this.income > incomeLimit
              ? this.translations.detail.oas.eligibleIncomeTooHigh
              : this.translations.detail.eligible,
        }
      } else if (this.input.age >= 64 && this.input.age < 65) {
        return {
          result: ResultKey.INELIGIBLE,
          reason: ResultReason.AGE_YOUNG_64,
          detail: this.translations.detail.oas.eligibleWhenTurn65,
        }
      } else {
        return {
          result: ResultKey.INELIGIBLE,
          reason: ResultReason.AGE_YOUNG,
          detail: this.translations.detail.oas.eligibleWhenTurn65,
        }
      }
    } else if (!meetsReqIncome) {
      return {
        result: ResultKey.INELIGIBLE,
        reason: ResultReason.INCOME,
        detail: this.translations.detail.mustMeetIncomeReq,
      }
    } else if (!meetsReqYears) {
      if (
        this.input.livingCountry.agreement ||
        this.input.everLivedSocialCountry
      ) {
        if (meetsReqAge) {
          return {
            result: ResultKey.UNAVAILABLE,
            reason: ResultReason.YEARS_IN_CANADA,
            detail: this.translations.detail.dependingOnAgreement,
          }
        } else {
          return {
            result: ResultKey.INELIGIBLE,
            reason: ResultReason.AGE_YOUNG,
            detail: this.translations.detail.dependingOnAgreementWhen65,
          }
        }
      } else {
        return {
          result: ResultKey.INELIGIBLE,
          reason: ResultReason.YEARS_IN_CANADA,
          detail: this.translations.detail.mustMeetYearReq,
        }
      }
    } else if (!meetsReqLegal) {
      if (!meetsReqAge) {
        return {
          result: ResultKey.INELIGIBLE,
          reason: ResultReason.AGE_YOUNG,
          detail: this.translations.detail.dependingOnLegalWhen65,
        }
      } else {
        return {
          result: ResultKey.UNAVAILABLE,
          reason: ResultReason.LEGAL_STATUS,
          detail: this.translations.detail.dependingOnLegal,
        }
      }
    }
    throw new Error('entitlement logic failed to produce a result')
  }

  // the calculation piece is missing validation, instead, it directly
  // calculate with the legal value. Will revist this piece.
  protected getEntitlement(): EntitlementResultOas {
    const autoEnrollment = this.getAutoEnrollment()
    if (
      (this.eligibility.result !== ResultKey.ELIGIBLE &&
        this.eligibility.result !== ResultKey.INCOME_DEPENDENT) ||
      (this.eligibility.result === ResultKey.ELIGIBLE &&
        this.eligibility.reason === ResultReason.INCOME)
    )
      return {
        result: 0,
        result65To74: 0,
        resultAt75: 0,
        clawback: 0,
        deferral: { age: 65, years: 0, increase: 0 },
        type: EntitlementResultType.NONE,
        autoEnrollment,
      }

    // Monthly clawback amount
    const monthlyClawbackAmount = roundToTwo(this.clawbackAmount / 12)

    // monthly entitlement amount minus monthly clawback amount
    // const resultCurrent = this.currentEntitlementAmount - monthlyClawbackAmount  //Task 114098 original code
    // task 114098 do not substract the amount from the benefit amount
    const resultCurrent = this.currentEntitlementAmount //remove this line when a correct recovery process is in place.

    if (resultCurrent <= 0) {
      return {
        result: 0,
        result65To74: 0,
        resultAt75: 0,
        clawback: 0,
        deferral: {
          age: this.deferralYears + 65,
          years: this.deferralYears,
          increase: 0,
        },
        type: EntitlementResultType.NONE,
        autoEnrollment,
      }
    }

    const result65To74 = this.age65to74Amount
    const resultAt75 = this.age75EntitlementAmount
    const type =
      this.input.yearsInCanadaSince18 < 40
        ? EntitlementResultType.PARTIAL
        : EntitlementResultType.FULL

    if (type === EntitlementResultType.PARTIAL)
      this.eligibility.detail = this.translations.detail.eligiblePartialOas

    return {
      result: resultCurrent,
      result65To74,
      resultAt75,
      clawback: monthlyClawbackAmount,
      deferral: {
        age: this.deferralYears + 65,
        years: this.deferralYears,
        increase: this.deferralIncrease,
      },
      type,
      autoEnrollment,
    }
  }

  /**
   * The "base" OAS amount, considering yearsInCanada, ignoring deferral.
   */
  private get baseAmount() {
    return (
      Math.min(this.input.yearsInCanadaSince18 / 40, 1) * legalValues.oas.amount
    )
  }

  /**
   * The number of years the client has chosen to defer their OAS pension.
   */
  private get deferralYears(): number {
    let oasAge = 65

    const durationStr = this.input.oasDeferDuration

    if (durationStr) {
      const duration: MonthsYears = JSON.parse(durationStr)
      const durationFloat = duration.years + duration.months / 12
      oasAge = 65 + durationFloat
    }

    return Math.max(0, oasAge - 65) // the number of years deferred (between zero and five)
  }

  /**
   * The dollar amount by which the OAS entitlement will increase due to deferral.
   */
  private get deferralIncrease() {
    return getDeferralIncrease(this.deferralYears, this.baseAmount)
  }

  /**
   * The expected OAS amount at age 65, considering yearsInCanada and deferral.
   */
  private get age65EntitlementAmount(): number {
    const baseAmount = this.baseAmount // the base amount before deferral calculations
    const deferralIncrease = this.deferralIncrease
    const amountWithDeferralIncrease = baseAmount + deferralIncrease // the final amount

    return roundToTwo(amountWithDeferralIncrease)
  }

  /**
   * The base OAS amount from 65 to 74 used for GIS calculations.
   */
  private get age65to74Amount(): number {
    const baseAmount = this.baseAmount // the base amount before deferral calculations
    return baseAmount
  }

  /**
   * The expected OAS amount at age 75, considering yearsInCanada and deferral.
   *
   * Note that we do not simply take the amount75 from the JSON file because of
   * the above considerations, and this.age65EntitlementAmount handles these.
   */
  private get age75EntitlementAmount(): number {
    return roundToTwo(this.age65EntitlementAmount * 1.1)
  }

  /**
   * The expected OAS amount, taking into account the client's age.
   * At age 75, OAS increases by 10%.
   */
  private get currentEntitlementAmount(): number {
    if (this.input.age < 75) return this.age65EntitlementAmount
    else return this.age75EntitlementAmount
  }

  /**
   * The yearly amount of "clawback" aka "repayment tax" the client will have to repay.
   */
  private get clawbackAmount(): number {
    const OAS_RT_RATE = 0.15

    if (!this.income || this.income < legalValues.oas.clawbackIncomeLimit)
      return 0

    const incomeOverCutoff = this.income - legalValues.oas.clawbackIncomeLimit
    const repaymentAmount = incomeOverCutoff * OAS_RT_RATE
    const oasYearly = this.currentEntitlementAmount * 12
    const result = Math.min(oasYearly, repaymentAmount)
    return roundToTwo(result)
  }

  // Add logic here that will generate data for Table component and additional text
  // Translations delegated to BenefitCards component on FE
  protected getMetadata(): any {
    const age = this.input.age
    const eligible =
      this.eligibility.result === ResultKey.ELIGIBLE ||
      this.eligibility.result === ResultKey.INCOME_DEPENDENT

    const meta: MetaDataObject = {
      tableData: null,
      currentAge: null,
      monthsTo70: null,
    }

    if (age) {
      const ageInRange = age >= 65 && age < 70
      const receiveOas = this.input.receiveOAS
      const ageWhole = Math.floor(age)
      const estimate = this.entitlement.result

      // Eligible for OAS pension,and are 65-69, who do not already reveive
      if (eligible && ageInRange && !receiveOas) {
        const monthsTo70 = Math.floor((70 - age) * 12)
        meta.monthsTo70 = monthsTo70

        // have an estimate > 0
        if (!(estimate <= 0)) {
          const tableData = [...Array(71 - ageWhole).keys()]
            .map((i) => i + ageWhole)
            .map((age, i) => {
              return {
                age,
                amount: estimate + getDeferralIncrease(i, estimate),
              }
            })
          meta.tableData = tableData
          meta.currentAge = ageWhole
        }

        return meta
      }

      return null
    }
  }

  protected getCardCollapsedText(): CardCollapsedText[] {
    let cardCollapsedText = super.getCardCollapsedText()

    // if not eligible, don't bother with any of the below
    if (
      this.eligibility.result !== ResultKey.ELIGIBLE &&
      this.eligibility.result !== ResultKey.INCOME_DEPENDENT
    )
      return cardCollapsedText

    if (this.partner && this.entitlement.result !== 0) {
      if (
        // eslint-disable-next-line prettier/prettier
        this.input.partnerBenefitStatus.value ===
          PartnerBenefitStatus.OAS_GIS ||
        this.input.partnerBenefitStatus.value === PartnerBenefitStatus.HELP_ME
      ) {
        cardCollapsedText.push(
          this.translations.detailWithHeading.partnerEligible
        )
      } else {
        cardCollapsedText.push(
          this.translations.detailWithHeading.partnerEligibleButAnsweredNo
        )
      }

      return cardCollapsedText
    }

    // getCardText reset the eligibility reason
    if (this.eligibility.reason === ResultReason.INCOME)
      return cardCollapsedText

    if (this.eligibility.reason === ResultReason.AGE_65_TO_69) {
      cardCollapsedText.push({
        heading: this.translations.detail.yourDeferralOptions,
        text: this.translations.detail.sinceYouAreSixty,
      })
    }

    // // increase at 75
    // if (this.currentEntitlementAmount !== this.age75EntitlementAmount)
    //   cardCollapsedText.push(
    //     this.translations.detailWithHeading.oasIncreaseAt75
    //   )
    // else
    //   cardCollapsedText.push(
    //     this.translations.detailWithHeading.oasIncreaseAt75Applied
    //   )

    // deferral
    // if (this.deferralIncrease)
    //   cardCollapsedText.push(
    //     this.translations.detailWithHeading.oasDeferralApplied
    //   )
    // else if (this.input.age >= 65 && this.input.age < 70)
    //   cardCollapsedText.push(
    //     this.translations.detailWithHeading.oasDeferralAvailable
    //   )

    return cardCollapsedText
  }

  protected getCardText(): string {
    console.log('this.input inside getCardText', this.input)
    if (
      this.eligibility.result === ResultKey.ELIGIBLE &&
      this.entitlement.type === EntitlementResultType.NONE
    ) {
      //this.eligibility.result = ResultKey.INELIGIBLE
      this.eligibility.reason = ResultReason.INCOME
      this.eligibility.detail = this.translations.detail.eligibleIncomeTooHigh
      this.entitlement.autoEnrollment = this.getAutoEnrollment()
    }

    let text = this.eligibility.detail

    if (
      this.eligibility.result === ResultKey.ELIGIBLE &&
      this.eligibility.reason !== ResultReason.INCOME &&
      this.entitlement.result > 0
    ) {
      text += ` ${this.translations.detail.expectToReceive}`
    } else if (this.eligibility.result === ResultKey.INCOME_DEPENDENT) {
      text += `<p class="mt-6">${this.translations.detail.oas.dependOnYourIncome}</p>`
    } else if (
      this.eligibility.result === ResultKey.INELIGIBLE &&
      this.eligibility.reason === ResultReason.AGE_YOUNG
    ) {
      text += `<p class='mt-6'>${this.translations.detail.oas.youShouldReceiveLetter}</p>`
    }

    return text
  }

  protected getCardLinks(): LinkWithAction[] {
    const links: LinkWithAction[] = []
    if (
      this.eligibility.result === ResultKey.ELIGIBLE ||
      this.eligibility.result === ResultKey.INCOME_DEPENDENT ||
      this.eligibility.reason === ResultReason.AGE_YOUNG_64
    )
      links.push(this.translations.links.apply[this.benefitKey])
    links.push(this.translations.links.overview[this.benefitKey])
    return links
  }
}
