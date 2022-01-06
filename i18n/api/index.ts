import en from './en'
import fr from './fr'

const apiTranslationsDict = { en, fr }

export enum Language {
  EN = 'EN',
  FR = 'FR',
}

export interface Translations {
  benefit: { oas: string; gis: string; allowance: string; afs: string }
  question: {
    income: string
    age: string
    livingCountry: string
    legalStatus: string
    legalStatusOther: string
    yearsInCanadaSince18: string
    maritalStatus: string
    partnerIncome: string
    partnerReceivingOas: string
    everLivedSocialCountry: string
  }
  questionOptions: {
    legalStatus: {
      canadianCitizen: string
      permanentResident: string
      sponsored: string
      indianStatus: string
      other: string
    }
    maritalStatus: {
      single: string
      married: string
      commonLaw: string
      widowed: string
      divorced: string
      separated: string
    }
  }
  detail: {
    eligible: string
    eligibleWhen60ApplyNow: string
    eligibleWhen65ApplyNow: string
    eligibleWhen60: string
    eligibleWhen65: string
    mustBe60to64: string
    mustBeInCanada: string
    mustBeOasEligible: string
    mustCompleteOasCheck: string
    mustBeWidowed: string
    mustBePartnered: string
    mustHavePartnerWithOas: string
    mustMeetIncomeReq: string
    mustMeetYearReq: string
    ineligibleYearsOrCountry: string
    conditional: string
    dependingOnAgreement: string
    dependingOnAgreementWhen60: string
    dependingOnAgreementWhen65: string
    dependingOnLegal: string
    dependingOnLegalSponsored: string
    dependingOnLegalWhen60: string
    dependingOnLegalWhen65: string
  }
}

export function getTranslations(language: Language): Translations {
  switch (language) {
    case Language.EN:
      return apiTranslationsDict.en
    case Language.FR:
      return apiTranslationsDict.fr
  }
}
