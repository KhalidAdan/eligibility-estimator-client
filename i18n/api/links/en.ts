import { LinkLocation } from '../../../utils/api/definitions/enums'
import { LinkDefinitions } from './index'

export const links: LinkDefinitions = {
  faq: {
    text: 'Frequently asked questions',
    url: '#faqLink',
    order: 1,
    location: LinkLocation.QUESTIONS_ONLY,
  },
  contactSC: {
    text: 'Contact Service Canada',
    url: 'https://www.canada.ca/en/employment-social-development/corporate/contact/oas.html',
    order: 2,
    location: LinkLocation.QUESTIONS_ONLY,
  },
  overview: {
    oas: {
      text: 'Old Age Security: Overview',
      url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security.htm',
      order: 3,
      location: LinkLocation.RESULTS_ONLY,
    },
    gis: {
      text: 'Guaranteed Income Supplement: Overview',
      url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement.html',
      order: 4,
      location: LinkLocation.RESULTS_ONLY,
    },
    alw: {
      text: 'Allowance: Overview',
      url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement/allowance.html',
      order: 5,
      location: LinkLocation.RESULTS_ONLY,
    },
    afs: {
      text: 'Allowance for the Survivor: Overview',
      url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement/allowance-survivor.html',
      order: 6,
      location: LinkLocation.RESULTS_ONLY,
    },
  },
  oasMaxIncome: {
    text: 'Old Age Security: Maximum Income',
    url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/benefit-amount.htm',
    order: 7,
    location: LinkLocation.RESULTS_ONLY,
  },
  cpp: {
    text: 'CPP Retirement pension: Overview',
    url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp.html',
    order: 8,
    location: LinkLocation.RESULTS_ONLY,
  },
  cric: {
    text: 'Canadian Retirement Income Calculator',
    url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/retirement-income-calculator.html',
    order: 9,
    location: LinkLocation.RESULTS_ONLY,
  },
  paymentOverview: {
    text: 'How payment rates are calculated',
    url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/payments.html',
    order: 10,
    location: LinkLocation.RESULTS_ONLY,
  },
  gisEntitlement: {
    text: 'Guaranteed Income Supplement: Payment Overview',
    url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement/benefit-amount.html',
    order: 11,
    location: LinkLocation.RESULTS_ONLY,
  },
  alwEntitlement: {
    text: 'Allowance: Payment Overview',
    url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement/allowance/benefit-amount.html',
    order: 12,
    location: LinkLocation.RESULTS_ONLY,
  },
  afsEntitlement: {
    text: 'Allowance for the Survivor: Payment Overview',
    url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement/allowance-survivor/benefit-amount.html',
    order: 13,
    location: LinkLocation.RESULTS_ONLY,
  },
  outsideCanada: {
    text: 'Living outside Canada: Overview',
    url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/cpp-international.htm',
    order: 14,
    location: LinkLocation.RESULTS_ONLY,
  },
  outsideCanadaOas: {
    text: 'Living outside Canada: Old Age Security',
    url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/eligibility.htm',
    order: 15,
    location: LinkLocation.RESULTS_ONLY,
  },
  oasPartial: {
    text: 'Old Age Security: Less than 40 years in Canada',
    url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/benefit-amount.html#h2.3-3.1',
    order: 16,
    location: LinkLocation.RESULTS_ONLY,
  },
  oasRecoveryTax: {
    text: 'Old Age Security: Recovery Tax',
    url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/recovery-tax.htm',
    order: 17,
    location: LinkLocation.RESULTS_ONLY,
  },
  oasDefer: {
    text: 'Old Age Security: Deferring your first payment',
    url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/benefit-amount.html#h2.2',
    order: 18,
    location: LinkLocation.RESULTS_ONLY,
  },
  oasRetroactive: {
    text: 'Old Age Security: Retroactive Payments',
    url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/benefit-amount.html#:~:text=Retroactive%20payments',
    order: 19,
    location: LinkLocation.RESULTS_ONLY,
  },
  apply: {
    oas: {
      text: 'Old Age Security',
      url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/apply.html',
      order: 20,
      location: LinkLocation.RESULTS_APPLY,
    },
    gis: {
      text: 'Guaranteed Income Supplement',
      url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement/apply.html',
      order: 21,
      location: LinkLocation.RESULTS_APPLY,
    },
    alw: {
      text: 'Allowance',
      url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement/allowance/apply.html',
      order: 22,
      location: LinkLocation.RESULTS_APPLY,
    },
    afs: {
      text: 'Allowance for the Survivor',
      url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement/allowance-survivor/apply.html',
      order: 23,
      location: LinkLocation.RESULTS_APPLY,
    },
  },
  SC: {
    text: 'Service Canada',
    url: 'https://www.canada.ca/en/employment-social-development/corporate/contact/oas.html',
    order: -1,
    location: LinkLocation.HIDDEN,
  },
  oasDeferClickHere: {
    text: 'click here',
    url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/benefit-amount.html#h2.2',
    order: -1,
    location: LinkLocation.HIDDEN,
  },
  oasDeferInline: {
    text: 'OAS Deferral',
    url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/benefit-amount.html#h2.2',
    order: -1,
    location: LinkLocation.HIDDEN,
  },
  socialAgreement: {
    text: 'social security agreement',
    url: 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/canada-pension-plan-cpp/foreign-employees-employers/canada-s-social-agreements-other-countries.html',
    order: -1,
    location: LinkLocation.HIDDEN,
  },
  reasons: {
    oas: {
      text: 'View full eligibility criteria for Old Age Security',
      url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/eligibility.html#gc-document-nav',
      order: -1,
      location: LinkLocation.HIDDEN,
    },
    gis: {
      text: 'View full eligibility criteria for Guaranteed Income Supplement',
      url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement/eligibility.html',
      order: -1,
      location: LinkLocation.HIDDEN,
    },
    alw: {
      text: 'View full eligibility criteria for Allowance',
      url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement/allowance/eligibility.html',
      order: -1,
      location: LinkLocation.HIDDEN,
    },
    afs: {
      text: 'View full eligibility criteria for Allowance for the Survivor',
      url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement/allowance-survivor/eligibility.html',
      order: -1,
      location: LinkLocation.HIDDEN,
    },
  },
  oasRecoveryTaxInline: {
    text: 'recovery tax',
    url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/recovery-tax.htm',
    order: -1,
    location: LinkLocation.HIDDEN,
  },
}
