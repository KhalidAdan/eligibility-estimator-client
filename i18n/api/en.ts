import { Translations } from './index'

const en: Translations = {
  benefit: {
    oas: 'Old Age Security',
    gis: 'Guaranteed Income Supplement',
    allowance: 'Allowance',
    afs: 'Allowance for Survivor',
  },
  question: {
    income: 'What is your current annual net income in Canadian Dollars?',
    age: 'What is your current age?',
    livingCountry: 'What country are you currently living in?',
    legalStatus: 'What is your current legal status?',
    legalStatusOther: 'Please specify your current legal status:',
    yearsInCanadaSince18:
      'How many years have you lived in Canada since the age of 18?',
    maritalStatus: 'What is current marital status?',
    partnerIncome:
      "What is your partner's annual net income in Canadian dollars?",
    partnerReceivingOas: 'Does your partner receive a full OAS pension?',
    everLivedSocialCountry:
      'Have you ever lived in a country with an established social security agreement?',
  },
  questionOptions: {
    legalStatus: {
      canadianCitizen: 'Canadian citizen',
      permanentResident:
        'Permanent resident or landed immigrant (non-sponsored)',
      sponsored: 'Permanent resident or landed immigrant (sponsored)',
      indianStatus: 'Indian status or status card',
      other:
        'Other (Example: Temporary resident, student, temporary worker, etc.)',
    },
    maritalStatus: {
      single: 'Single',
      married: 'Married',
      commonLaw: 'Common-law',
      widowed: 'Widowed',
      divorced: 'Divorced',
      separated: 'Separated',
    },
  },
  detail: {
    eligible:
      'Based on the information provided, you are likely eligible for this benefit.',
    eligibleWhen60ApplyNow:
      'You will likely be eligible when you turn 60, however you may be able to apply now. Please contact Service Canada for more information.',
    eligibleWhen65ApplyNow:
      'You will likely be eligible when you turn 65, however you may be able to apply now. Please contact Service Canada for more information.',
    eligibleWhen60: 'You will likely be eligible when you turn 60.',
    eligibleWhen65: 'You will likely be eligible when you turn 65.',
    mustBe60to64:
      'You must be between the ages of 60 and 64 to be eligible for this benefit.',
    mustBeInCanada:
      'You need to live in Canada to be eligible for this benefit.',
    mustBeOasEligible:
      'You need to be eligible for OAS to be eligible for this benefit.',
    mustCompleteOasCheck:
      'You need to complete the OAS eligibility check first.',
    mustBeWidowed:
      'You must be a surviving partner or widowed to be eligible for this benefit.',
    mustBePartnered:
      'You must be common-law or married to be eligible for this benefit.',
    mustHavePartnerWithOas:
      'Your partner must be receiving OAS to be eligible for this benefit.',
    mustMeetIncomeReq:
      'Your income is too high to be eligible for this benefit.',
    mustMeetYearReq:
      'You have not lived in Canada for the required number of years to be eligible for this benefit.',
    ineligibleYearsOrCountry:
      'You currently do not appear to be eligible for this benefit as you have indicated that you have not lived in Canada for the minimum period of time or lived in a country that Canada has a social security agreement with. However, you may be in the future if you reside in Canada for the minimum required number of years.',
    conditional:
      'You may be eligible for this benefit, you are encouraged to contact Service Canada to confirm.',
    dependingOnAgreement:
      "You may be eligible to receive this benefit, depending Canada's agreement with this country. You are encouraged to contact Service Canada.",
    dependingOnAgreementWhen60:
      "You may be eligible to receive this benefit when you turn 60, depending Canada's agreement with this country. You are encouraged to contact Service Canada.",
    dependingOnAgreementWhen65:
      "You may be eligible to receive this benefit when you turn 65, depending Canada's agreement with this country. You are encouraged to contact Service Canada.",
    dependingOnLegal:
      'You may be eligible to receive this benefit, depending on your legal status in Canada. You are encouraged to contact Service Canada.',
    dependingOnLegalSponsored:
      'You may be eligible for this benefit, you are encouraged to contact Service Canada to confirm.',
    dependingOnLegalWhen60:
      'You may be eligible to receive this benefit when you turn 60, depending on your legal status in Canada. You are encouraged to contact Service Canada.',
    dependingOnLegalWhen65:
      'You may be eligible to receive this benefit when you turn 65, depending on your legal status in Canada. You are encouraged to contact Service Canada.',
  },
}
export default en
