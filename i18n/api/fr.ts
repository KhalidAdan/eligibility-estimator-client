import { Translations } from './index'

const fr: Translations = {
  benefit: {
    oas: 'FRENCH: Old Age Security',
    gis: 'FRENCH: Guaranteed Income Supplement',
    allowance: 'FRENCH: Allowance',
    afs: 'FRENCH: Allowance for Survivor',
  },
  question: {
    income:
      'FRENCH: What is your current annual net income in Canadian Dollars?',
    age: 'FRENCH: What is your current age?',
    livingCountry: 'FRENCH: What country are you currently living in?',
    legalStatus: 'FRENCH: What is your current legal status?',
    legalStatusOther: 'FRENCH: Please specify your current legal status:',
    yearsInCanadaSince18:
      'FRENCH: How many years have you lived in Canada since the age of 18?',
    maritalStatus: 'FRENCH: What is current marital status?',
    partnerIncome:
      "FRENCH: What is your partner's annual net income in Canadian dollars?",
    partnerReceivingOas:
      'FRENCH: Does your partner receive a full OAS pension?',
    everLivedSocialCountry:
      'FRENCH: Have you ever lived in a country with an established social security agreement?',
  },
  questionOptions: {
    legalStatus: {
      canadianCitizen: 'FRENCH: Canadian citizen',
      permanentResident:
        'FRENCH: Permanent resident or landed immigrant (non-sponsored)',
      sponsored: 'FRENCH: Permanent resident or landed immigrant (sponsored)',
      indianStatus: 'FRENCH: Indian status or status card',
      other:
        'FRENCH: Other (Example: Temporary resident, student, temporary worker, etc.)',
    },
    maritalStatus: {
      single: 'FRENCH: Single',
      married: 'FRENCH: Married',
      commonLaw: 'FRENCH: Common-law',
      widowed: 'FRENCH: Widowed',
      divorced: 'FRENCH: Divorced',
      separated: 'FRENCH: Separated',
    },
  },
  detail: {
    eligible:
      'FRENCH: Based on the information provided, you are likely eligible for this benefit.',
    eligibleWhen60ApplyNow:
      'FRENCH: You will likely be eligible when you turn 60, however you may be able to apply now. Please contact Service Canada for more information.',
    eligibleWhen65ApplyNow:
      'FRENCH: You will likely be eligible when you turn 65, however you may be able to apply now. Please contact Service Canada for more information.',
    eligibleWhen60: 'FRENCH: You will likely be eligible when you turn 60.',
    eligibleWhen65: 'FRENCH: You will likely be eligible when you turn 65.',
    mustBe60to64:
      'FRENCH: You must be between the ages of 60 and 64 to be eligible for this benefit.',
    mustBeInCanada:
      'FRENCH: You need to live in Canada to be eligible for this benefit.',
    mustBeOasEligible:
      'FRENCH: You need to be eligible for OAS to be eligible for this benefit.',
    mustCompleteOasCheck:
      'FRENCH: You need to complete the OAS eligibility check first.',
    mustBeWidowed:
      'FRENCH: You must be a surviving partner or widowed to be eligible for this benefit.',
    mustBePartnered:
      'FRENCH: You must be common-law or married to be eligible for this benefit.',
    mustHavePartnerWithOas:
      'FRENCH: Your partner must be receiving OAS to be eligible for this benefit.',
    mustMeetIncomeReq:
      'FRENCH: Your income is too high to be eligible for this benefit.',
    mustMeetYearReq:
      'FRENCH: You have not lived in Canada for the required number of years to be eligible for this benefit.',
    ineligibleYearsOrCountry:
      'FRENCH: You currently do not appear to be eligible for this benefit as you have indicated that you have not lived in Canada for the minimum period of time or lived in a country that Canada has a social security agreement with. However, you may be in the future if you reside in Canada for the minimum required number of years.',
    conditional:
      'FRENCH: You may be eligible for this benefit, you are encouraged to contact Service Canada to confirm.',
    dependingOnAgreement:
      "FRENCH: You may be eligible to receive this benefit, depending Canada's agreement with this country. You are encouraged to contact Service Canada.",
    dependingOnAgreementWhen60:
      "FRENCH: You may be eligible to receive this benefit when you turn 60, depending Canada's agreement with this country. You are encouraged to contact Service Canada.",
    dependingOnAgreementWhen65:
      "FRENCH: You may be eligible to receive this benefit when you turn 65, depending Canada's agreement with this country. You are encouraged to contact Service Canada.",
    dependingOnLegal:
      'FRENCH: You may be eligible to receive this benefit, depending on your legal status in Canada. You are encouraged to contact Service Canada.',
    dependingOnLegalSponsored:
      'FRENCH: You may be eligible for this benefit, you are encouraged to contact Service Canada to confirm.',
    dependingOnLegalWhen60:
      'FRENCH: You may be eligible to receive this benefit when you turn 60, depending on your legal status in Canada. You are encouraged to contact Service Canada.',
    dependingOnLegalWhen65:
      'FRENCH: You may be eligible to receive this benefit when you turn 65, depending on your legal status in Canada. You are encouraged to contact Service Canada.',
  },
}
export default fr
