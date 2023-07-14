import { Button } from '@dts-stn/service-canada-design-system'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { FieldInput } from '../../client-state/InputHelper'
import { WebTranslations } from '../../i18n/web'
import {
  MaritalStatus,
  PartnerBenefitStatus,
  ResultKey,
} from '../../utils/api/definitions/enums'
import {
  BenefitResult,
  BenefitResultsObject,
  SummaryObject,
} from '../../utils/api/definitions/types'
import { useTranslation } from '../Hooks'
import { BenefitCards } from './BenefitCards'
import { EstimatedTotal } from './EstimatedTotal'
import { ListLinks } from './ListLinks'
import { MayBeEligible } from './MayBeEligible'
import { WillBeEligible } from './WillBeEligible'
import { YourAnswers } from './YourAnswers'
import { Translations, getTranslations } from '../../i18n/api'
import { FieldKey } from '../../utils/api/definitions/fields'
import { flattenArray } from './utils'

const getEligibility = (
  resultsEligible: BenefitResult[],
  key: string
): boolean => {
  return resultsEligible.some((benefit) => benefit.benefitKey === key)
}

const ResultsPage: React.VFC<{
  inputs: FieldInput[]
  results: BenefitResultsObject
  futureClientResults: any
  partnerResults: BenefitResultsObject
  futurePartnerResults: any
  summary: SummaryObject
}> = ({
  inputs,
  results,
  futureClientResults,
  partnerResults,
  futurePartnerResults,
  summary,
}) => {
  const ref = useRef<HTMLDivElement>()
  const tsln = useTranslation<WebTranslations>()
  const apiTsln = getTranslations(tsln._language)
  const router = useRouter()
  const isPartnered =
    inputs.find((input) => input.key === FieldKey.MARITAL_STATUS)['value'] ===
    MaritalStatus.PARTNERED

  const partnerNoOAS =
    inputs.find((input) => input.key === FieldKey.PARTNER_BENEFIT_STATUS)?.[
      'value'
    ] === PartnerBenefitStatus.NONE

  // CURRENT CLIENT
  const resultsArray: BenefitResult[] = Object.keys(results).map(
    (value) => results[value]
  )

  const resultsEligible: BenefitResult[] = resultsArray.filter(
    (result) =>
      result.eligibility?.result === ResultKey.ELIGIBLE ||
      result.eligibility?.result === ResultKey.INCOME_DEPENDENT
  )
  console.log('resultsEligible', resultsEligible)

  // CURRENT PARTNER
  const partnerResultsArray: BenefitResult[] = Object.keys(partnerResults).map(
    (value) => partnerResults[value]
  )

  const partnerResultsEligible: BenefitResult[] = partnerResultsArray.filter(
    (result) =>
      result.eligibility?.result === ResultKey.ELIGIBLE ||
      result.eligibility?.result === ResultKey.INCOME_DEPENDENT
  )
  console.log('partnerResultsEligible', partnerResultsEligible)

  // FUTURE CLIENT
  const futureClientEligibleArray = flattenArray(futureClientResults)
  console.log('futureClientEligibleArray', futureClientEligibleArray)

  // FUTURE PARTNER
  const futurePartnerEligibleArray = flattenArray(futurePartnerResults)
  console.log('futurePartnerEligibleArray', futurePartnerEligibleArray)

  const getListLinks: any = () => {
    const getFirstLinks = () => {
      const tempLinks = []

      if (resultsEligible.length !== 0) {
        tempLinks.push({
          text: tsln.resultsPage.yourEstimatedTotal,
          url: '#estimate',
        })
      }

      if (
        resultsEligible.length === 0 &&
        futureClientEligibleArray.length === 0
      ) {
        tempLinks.push({
          text: tsln.resultsPage.youAreNotEligible,
          url: '#estimate',
        })
      }

      if (futureClientEligibleArray.length !== 0) {
        tempLinks.push({
          text: tsln.resultsPage.futureEligible,
          url: '#future-estimate',
        })
      }

      if (isPartnered && partnerResultsEligible.length !== 0) {
        tempLinks.push({
          text: tsln.resultsPage.partnerEstimatedTotal,
          url: '#partner-estimate',
        })
      }

      if (
        isPartnered &&
        partnerResultsEligible.length === 0 &&
        futurePartnerEligibleArray.length === 0
      ) {
        tempLinks.push({
          text: tsln.resultsPage.partnerNotEligible,
          url: '#partner-estimate',
        })
      }

      if (isPartnered && futurePartnerEligibleArray.length !== 0) {
        tempLinks.push({
          text: tsln.resultsPage.partnerFutureEligible,
          url: '#future-partner-estimate',
        })
      }

      return tempLinks
    }

    let listLinks: any = [
      ...getFirstLinks(),
      {
        text: tsln.resultsPage.whatYouToldUs,
        url: '#answers',
      },
      {
        text: apiTsln.benefit['oas'],
        id: 'oas',
        url: '#oas',
        eligible: getEligibility(resultsEligible, 'oas'),
      },
      {
        text: apiTsln.benefit['gis'],
        id: 'gis',
        url: '#gis',
        eligible: getEligibility(resultsEligible, 'gis'),
      },
      {
        text: apiTsln.benefit['alw'],
        id: 'alw',
        url: '#alw',
        eligible: getEligibility(resultsEligible, 'alw'),
      },
      {
        text: apiTsln.benefit['alws'],
        id: 'alws',
        url: '#alws',
        eligible: getEligibility(resultsEligible, 'alws'),
      },
    ]

    // filtered out the link item which text is empty.
    listLinks = listLinks.filter((ll) => ll.text)
    // Sort the links based on eligibility
    const sortListLinks = (a, b) => {
      if (a.eligible == null || b.eligible == null) {
        return 0
      }
      if (a.eligible && !b.eligible) {
        return -1
      }
      if (!a.eligible && b.eligible) {
        return 1
      }

      // This accounts for future planning results and preserves the order of links as they appear in the future eligible array
      if (!a.eligible && !b.eligible) {
        let aIndex = futureClientEligibleArray.findIndex(
          (benefit) => benefit.benefitKey === a.id
        )
        let bIndex = futureClientEligibleArray.findIndex(
          (benefit) => benefit.benefitKey === b.id
        )

        if (aIndex > -1 && bIndex > -1) {
          return aIndex - bIndex
        }
        if (aIndex > -1) {
          return -1
        }
        if (bIndex > -1) {
          return 1
        }
      }

      return 0
    }

    return listLinks.sort(sortListLinks)
  }

  return (
    <div className="flex flex-col space-y-12" ref={ref}>
      <div className="md:grid md:grid-cols-3 md:gap-12">
        <div className="col-span-2 row-span-1">
          <div> {tsln.resultsPage.general} </div>

          <ListLinks
            title={tsln.resultsPage.onThisPage}
            links={getListLinks()}
          />

          {resultsEligible.length > 0 && (
            <EstimatedTotal
              resultsEligible={resultsEligible}
              entitlementSum={summary.entitlementSum}
              state={summary.state}
              partnerNoOAS={partnerNoOAS}
            />
          )}

          {futureClientResults && (
            <WillBeEligible futureResults={futureClientResults} />
          )}

          {!futureClientResults && (
            <MayBeEligible resultsEligible={resultsEligible} />
          )}

          {isPartnered && partnerResultsEligible.length > 0 && (
            <EstimatedTotal
              resultsEligible={partnerResultsEligible}
              entitlementSum={summary.partnerEntitlementSum}
              state={summary.partnerState}
              partner={true}
              partnerNoOAS={partnerNoOAS}
            />
          )}

          {futurePartnerResults && (
            <WillBeEligible
              futureResults={futurePartnerResults}
              partner={true}
            />
          )}

          {isPartnered && !futurePartnerResults && (
            <MayBeEligible
              resultsEligible={partnerResultsEligible}
              partner={true}
            />
          )}
        </div>

        <div className="col-span-1 row-span-2">
          <YourAnswers title={tsln.resultsPage.whatYouToldUs} inputs={inputs} />
        </div>
        <div className="col-span-2 row-span-1">
          <BenefitCards
            inputAge={Math.floor(
              Number(inputs.find((input) => input.key === 'age').value)
            )}
            results={resultsArray}
            futureClientResults={futureClientResults}
            partnerResults={partnerResultsArray}
          />

          <Button
            text={tsln.modifyAnswers}
            id={'EditAnswers'}
            styling="secondary"
            className="mt-6 justify-center md:w-[fit-content]"
            onClick={(e) => router.push('/questions')}
          />
        </div>
      </div>
    </div>
  )
}

export default ResultsPage
