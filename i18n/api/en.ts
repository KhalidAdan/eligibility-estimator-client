import {
  Language,
  LinkLocation,
  Locale,
} from '../../utils/api/definitions/enums'
import { Translations } from './index'

const en: Translations = {
  _language: Language.EN,
  _locale: Locale.EN,
  benefit: {
    oas: 'Old Age Security (OAS)',
    gis: 'Guaranteed Income Supplement (GIS)',
    alw: 'Allowance',
    afs: 'Allowance for the Survivor',
  },
  category: {
    personalInformation: 'Your information',
    partnerInformation: "Your partner's information",
  },
  result: {
    eligible: 'Eligible',
    ineligible: 'Not eligible',
    unavailable: 'Unavailable',
    moreInfo: 'Need more information...',
    invalid: 'Request is invalid!',
  },
  question: {
    income: 'What is your current annual net income in Canadian dollars?',
    age: 'How old are you?',
    maritalStatus: 'What is your current marital status?',
    livingCountry: 'What country are you currently living in?',
    legalStatus: 'What is your current legal status in Canada?',
    canadaWholeLife: 'Since the age of 18, have you only lived in Canada?',
    yearsInCanadaSince18:
      'Since the age of 18, how many years have you lived in Canada?',
    everLivedSocialCountry:
      'Have you ever lived in a country with an established {LINK_SOCIAL_AGREEMENT} with Canada?',
    partnerBenefitStatus: 'Which of the following applies to your partner?',
    partnerIncome:
      "What is your partner's annual net income in Canadian dollars?",
    partnerAge: "What is your partner's current age?",
    partnerLivingCountry: 'What country is your partner currently living in?',
    partnerLegalStatus: "What is your partner's current legal status?",
    partnerCanadaWholeLife:
      'Since the age of 18, has your partner only lived in Canada?',
    partnerYearsInCanadaSince18:
      'Since the age of 18, how many years has your partner lived in Canada?',
    partnerEverLivedSocialCountry:
      'Has your partner ever lived in a country with an established {LINK_SOCIAL_AGREEMENT} with Canada?',
  },
  questionHelp: {
    age: 'You can enter your current age, or a future age for planning purposes.',
    income:
      'You can find your net income on line 23600 of your personal income tax return (T1).',
    yearsInCanadaSince18:
      'If you are not sure of the exact number, you may enter an estimate. You will still be able to view your benefits estimation results.',
  },
  questionOptions: {
    legalStatus: [
      { key: 'canadianCitizen', text: 'Canadian citizen' },
      {
        key: 'permanentResident',
        text: 'Permanent resident or landed immigrant (non-sponsored)',
      },
      {
        key: 'sponsored',
        text: 'Permanent resident or landed immigrant (sponsored)',
      },
      { key: 'indianStatus', text: 'Indian status or status card' },
      {
        key: 'other',
        text: 'Other (for example, temporary resident, student, temporary worker)',
      },
    ],
    maritalStatus: [
      { key: 'single', text: 'Single' },
      { key: 'married', text: 'Married' },
      { key: 'commonLaw', text: 'Common-law' },
      { key: 'widowed', text: 'Surviving Partner/Widowed' },
      { key: 'divorced', text: 'Divorced' },
      { key: 'separated', text: 'Separated' },
    ],
    partnerBenefitStatus: [
      { key: 'oas', text: 'My partner receives an Old Age Security pension' },
      {
        key: 'oasGis',
        text: 'My partner receives an Old Age Security pension and the Guaranteed Income Supplement',
      },
      { key: 'alw', text: 'My partner receives the Allowance' },
      { key: 'none', text: 'None of the above' },
      { key: 'helpMe', text: 'Help me find out' },
    ],
    livingCountry: [
      { key: 'CAN', text: 'Canada' },
      { key: 'AFG', text: 'Afghanistan' },
      { key: 'ALB', text: 'Albania' },
      { key: 'DZA', text: 'Algeria' },
      { key: 'AND', text: 'Andorra' },
      { key: 'AGO', text: 'Angola' },
      { key: 'ATG', text: 'Antigua and Barbuda' },
      { key: 'ARG', text: 'Argentina' },
      { key: 'ARM', text: 'Armenia' },
      { key: 'AUS', text: 'Australia' },
      { key: 'AUT', text: 'Austria' },
      { key: 'AZE', text: 'Azerbaijan' },
      { key: 'BHS', text: 'Bahamas' },
      { key: 'BHR', text: 'Bahrain' },
      { key: 'BGD', text: 'Bangladesh' },
      { key: 'BRB', text: 'Barbados' },
      { key: 'BLR', text: 'Belarus' },
      { key: 'BEL', text: 'Belgium' },
      { key: 'BLZ', text: 'Belize' },
      { key: 'BEN', text: 'Benin' },
      { key: 'BTN', text: 'Bhutan' },
      { key: 'BOL', text: 'Bolivia (Plurinational State of)' },
      { key: 'BIH', text: 'Bosnia and Herzegovina' },
      { key: 'BWA', text: 'Botswana' },
      { key: 'BRA', text: 'Brazil' },
      { key: 'BRN', text: 'Brunei Darussalam' },
      { key: 'BGR', text: 'Bulgaria' },
      { key: 'BFA', text: 'Burkina Faso' },
      { key: 'BDI', text: 'Burundi' },
      { key: 'CPV', text: 'Cabo Verde' },
      { key: 'KHM', text: 'Cambodia' },
      { key: 'CMR', text: 'Cameroon' },
      { key: 'CAF', text: 'Central African Republic' },
      { key: 'TCD', text: 'Chad' },
      { key: 'CHL', text: 'Chile' },
      { key: 'CHN', text: 'China' },
      { key: 'COL', text: 'Colombia' },
      { key: 'COM', text: 'Comoros' },
      { key: 'COG', text: 'Congo' },
      { key: 'CRI', text: 'Costa Rica' },
      { key: 'CIV', text: "Côte d'Ivoire" },
      { key: 'HRV', text: 'Croatia' },
      { key: 'CUB', text: 'Cuba' },
      { key: 'CYP', text: 'Cyprus' },
      { key: 'CZE', text: 'Czechia' },
      { key: 'COD', text: 'Democratic Republic of the Congo' },
      { key: 'DNK', text: 'Denmark' },
      { key: 'DJI', text: 'Djibouti' },
      { key: 'DMA', text: 'Dominica' },
      { key: 'DOM', text: 'Dominican Republic' },
      { key: 'ECU', text: 'Ecuador' },
      { key: 'EGY', text: 'Egypt' },
      { key: 'SLV', text: 'El Salvador' },
      { key: 'GNQ', text: 'Equatorial Guinea' },
      { key: 'ERI', text: 'Eritrea' },
      { key: 'EST', text: 'Estonia' },
      { key: 'SWZ', text: 'Eswatini' },
      { key: 'ETH', text: 'Ethiopia' },
      { key: 'FJI', text: 'Fiji' },
      { key: 'FIN', text: 'Finland' },
      { key: 'FRA', text: 'France' },
      { key: 'GAB', text: 'Gabon' },
      { key: 'GMB', text: 'Gambia' },
      { key: 'GEO', text: 'Georgia' },
      { key: 'DEU', text: 'Germany' },
      { key: 'GHA', text: 'Ghana' },
      { key: 'GRC', text: 'Greece' },
      { key: 'GRD', text: 'Grenada' },
      { key: 'GTM', text: 'Guatemala' },
      { key: 'GIN', text: 'Guinea' },
      { key: 'GNB', text: 'Guinea-Bissau' },
      { key: 'GUY', text: 'Guyana' },
      { key: 'HTI', text: 'Haiti' },
      { key: 'VAT', text: 'Holy See' },
      { key: 'HND', text: 'Honduras' },
      { key: 'HUN', text: 'Hungary' },
      { key: 'ISL', text: 'Iceland' },
      { key: 'IND', text: 'India' },
      { key: 'IDN', text: 'Indonesia' },
      { key: 'IRN', text: 'Iran' },
      { key: 'IRQ', text: 'Iraq' },
      { key: 'IRL', text: 'Ireland' },
      { key: 'ISR', text: 'Israel' },
      { key: 'ITA', text: 'Italy' },
      { key: 'JAM', text: 'Jamaica' },
      { key: 'JPN', text: 'Japan' },
      { key: 'JOR', text: 'Jordan' },
      { key: 'KAZ', text: 'Kazakhstan' },
      { key: 'KEN', text: 'Kenya' },
      { key: 'KIR', text: 'Kiribati' },
      { key: 'KWT', text: 'Kuwait' },
      { key: 'KGZ', text: 'Kyrgyzstan' },
      { key: 'LAO', text: 'Laos' },
      { key: 'LVA', text: 'Latvia' },
      { key: 'LBN', text: 'Lebanon' },
      { key: 'LSO', text: 'Lesotho' },
      { key: 'LBR', text: 'Liberia' },
      { key: 'LBY', text: 'Libya' },
      { key: 'LIE', text: 'Liechtenstein' },
      { key: 'LTU', text: 'Lithuania' },
      { key: 'LUX', text: 'Luxembourg' },
      { key: 'MDG', text: 'Madagascar' },
      { key: 'MWI', text: 'Malawi' },
      { key: 'MYS', text: 'Malaysia' },
      { key: 'MDV', text: 'Maldives' },
      { key: 'MLI', text: 'Mali' },
      { key: 'MLT', text: 'Malta' },
      { key: 'MHL', text: 'Marshall Islands' },
      { key: 'MRT', text: 'Mauritania' },
      { key: 'MUS', text: 'Mauritius' },
      { key: 'MEX', text: 'Mexico' },
      { key: 'FSM', text: 'Micronesia' },
      { key: 'MDA', text: 'Moldova' },
      { key: 'MCO', text: 'Monaco' },
      { key: 'MNG', text: 'Mongolia' },
      { key: 'MNE', text: 'Montenegro' },
      { key: 'MAR', text: 'Morocco' },
      { key: 'MOZ', text: 'Mozambique' },
      { key: 'MMR', text: 'Myanmar' },
      { key: 'NAM', text: 'Namibia' },
      { key: 'NRU', text: 'Nauru' },
      { key: 'NPL', text: 'Nepal' },
      { key: 'NLD', text: 'Netherlands' },
      { key: 'NZL', text: 'New Zealand' },
      { key: 'NIC', text: 'Nicaragua' },
      { key: 'NER', text: 'Niger' },
      { key: 'NGA', text: 'Nigeria' },
      { key: 'PRK', text: "Korea (Democratic People's Republic of)" },
      { key: 'MKD', text: 'North Macedonia' },
      { key: 'NOR', text: 'Norway' },
      { key: 'OMN', text: 'Oman' },
      { key: 'PAK', text: 'Pakistan' },
      { key: 'PLW', text: 'Palau' },
      { key: 'PSE', text: 'Palestine' },
      { key: 'PAN', text: 'Panama' },
      { key: 'PNG', text: 'Papua New Guinea' },
      { key: 'PRY', text: 'Paraguay' },
      { key: 'PER', text: 'Peru' },
      { key: 'PHL', text: 'Philippines' },
      { key: 'POL', text: 'Poland' },
      { key: 'PRT', text: 'Portugal' },
      { key: 'QAT', text: 'Qatar' },
      { key: 'ROU', text: 'Romania' },
      { key: 'RUS', text: 'Russia' },
      { key: 'RWA', text: 'Rwanda' },
      { key: 'KNA', text: 'Saint Kitts and Nevis' },
      { key: 'LCA', text: 'Saint Lucia' },
      { key: 'VCT', text: 'Saint Vincent and the Grenadines' },
      { key: 'WSM', text: 'Samoa' },
      { key: 'SMR', text: 'San Marino' },
      { key: 'STP', text: 'Sao Tome and Principe' },
      { key: 'SAU', text: 'Saudi Arabia' },
      { key: 'SEN', text: 'Senegal' },
      { key: 'SRB', text: 'Serbia' },
      { key: 'SYC', text: 'Seychelles' },
      { key: 'SLE', text: 'Sierra Leone' },
      { key: 'SGP', text: 'Singapore' },
      { key: 'SVK', text: 'Slovakia' },
      { key: 'SVN', text: 'Slovenia' },
      { key: 'SLB', text: 'Solomon Islands' },
      { key: 'SOM', text: 'Somalia' },
      { key: 'ZAF', text: 'South Africa' },
      { key: 'KOR', text: 'Republic of Korea' },
      { key: 'SSD', text: 'South Sudan' },
      { key: 'ESP', text: 'Spain' },
      { key: 'LKA', text: 'Sri Lanka' },
      { key: 'SDN', text: 'Sudan' },
      { key: 'SUR', text: 'Suriname' },
      { key: 'SWE', text: 'Sweden' },
      { key: 'CHE', text: 'Switzerland' },
      { key: 'SYR', text: 'Syrian Arab Republic' },
      { key: 'TJK', text: 'Tajikistan' },
      { key: 'TZA', text: 'Tanzania' },
      { key: 'THA', text: 'Thailand' },
      { key: 'TLS', text: 'Timor-Leste' },
      { key: 'TGO', text: 'Togo' },
      { key: 'TON', text: 'Tonga' },
      { key: 'TTO', text: 'Trinidad and Tobago' },
      { key: 'TUN', text: 'Tunisia' },
      { key: 'TUR', text: 'Turkey' },
      { key: 'TKM', text: 'Turkmenistan' },
      { key: 'TUV', text: 'Tuvalu' },
      { key: 'UGA', text: 'Uganda' },
      { key: 'UKR', text: 'Ukraine' },
      { key: 'ARE', text: 'United Arab Emirates' },
      { key: 'GBR', text: 'United Kingdom ' },
      { key: 'USA', text: 'United States of America' },
      { key: 'URY', text: 'Uruguay' },
      { key: 'UZB', text: 'Uzbekistan' },
      { key: 'VUT', text: 'Vanuatu' },
      { key: 'VEN', text: 'Venezuela ' },
      { key: 'VNM', text: 'Vietnam' },
      { key: 'YEM', text: 'Yemen' },
      { key: 'ZMB', text: 'Zambia' },
      { key: 'ZWE', text: 'Zimbabwe' },
    ],
  },
  detail: {
    eligible: 'You are likely eligible for this benefit.',
    eligibleOas65to69:
      'You are likely eligible for this benefit. To learn more about your option to delay your first payment, {LINK_OAS_DEFER}.',
    eligibleEntitlementUnavailable:
      'You are likely eligible for this benefit, however an entitlement estimation is unavailable. You should contact {LINK_SERVICE_CANADA} for more information about your payment amounts.',
    eligiblePartialOas:
      'You are likely eligible to a partial Old Age Security pension.',
    eligiblePartialOas65to69:
      'You are likely eligible to a partial Old Age Security pension. To learn more about your option to delay your first payment, {LINK_OAS_DEFER}.',
    eligibleWhen60ApplyNow:
      'You will likely be eligible when you turn 60, however you may be able to apply now. Please contact {LINK_SERVICE_CANADA} for more information.',
    eligibleWhen65ApplyNowOas:
      'You will likely be eligible when you turn 65. However, you may be able to apply now. Please contact {LINK_SERVICE_CANADA} for more information. To learn more about your option to delay your first payment, {LINK_OAS_DEFER}.',
    eligibleWhen60: 'You will likely be eligible when you turn 60.',
    eligibleWhen65: 'You will likely be eligible when you turn 65.',
    mustBe60to64:
      'You must be between the ages of 60 and 64 to be eligible for this benefit.',
    mustBeInCanada:
      'You need to live in Canada to be eligible for this benefit.',
    mustBeOasEligible:
      'You need to be eligible for Old Age Security to be eligible for this benefit.',
    mustCompleteOasCheck:
      'You need to complete the Old Age Security eligibility assessment first.',
    mustBeWidowed:
      'You must be a surviving partner or widowed to be eligible for this benefit.',
    mustBePartnered:
      'You must be common-law or married to be eligible for this benefit.',
    mustHavePartnerWithGis:
      'Your partner must be receiving the Guaranteed Income Supplement to be eligible for this benefit.',
    mustMeetIncomeReq:
      'Your income is too high to be eligible for this benefit.',
    mustMeetYearReq:
      'You have not lived in Canada for the required number of years to be eligible for this benefit.',
    conditional:
      'You may be eligible for this benefit. We encourage you to contact Service Canada for a better assessment.',
    dependingOnAgreement:
      "You may be eligible to receive this benefit, depending on Canada's agreement with this country. We encourage you to contact Service Canada for a better assessment.",
    dependingOnAgreementWhen60:
      "You may be eligible to receive this benefit when you turn 60, depending on Canada's agreement with this country. We encourage you to contact Service Canada for a better assessment.",
    dependingOnAgreementWhen65:
      "You may be eligible to receive this benefit when you turn 65, depending on Canada's agreement with this country. We encourage you to contact Service Canada for a better assessment.",
    dependingOnLegal:
      'You may be eligible to receive this benefit, depending on your legal status in Canada. We encourage you to contact Service Canada for a better assessment.',
    dependingOnLegalSponsored:
      'You may be eligible for this benefit. We encourage you to contact Service Canada for a better assessment.',
    dependingOnLegalWhen60:
      'You may be eligible to receive this benefit when you turn 60, depending on your legal status in Canada. We encourage you to contact Service Canada for a better assessment.',
    dependingOnLegalWhen65:
      'You may be eligible to receive this benefit when you turn 65, depending on your legal status in Canada. We encourage you to contact Service Canada for a better assessment.',
    additionalReasons:
      '{LINK_MORE_REASONS} for possible additional ineligibility reasons.',
  },
  summaryTitle: {
    moreInfo: 'More information needed',
    unavailable: 'Unable to provide an estimation',
    availableEligible: 'Likely eligible for benefits',
    availableIneligible: 'Likely not eligible for benefits',
  },
  summaryDetails: {
    moreInfo:
      'Please fill out the form. Based on the information you will provide today, the application will estimate your eligibility. If you are a qualified candidate, the application will also provide an estimate for your monthly payment.',
    unavailable:
      'Based on the information you provided today, we are unable to determine your eligibility. We encourage you to contact {LINK_SERVICE_CANADA}.',
    availableEligible:
      'Based on the information you provided today, you are likely eligible for an estimated total monthly amount of {ENTITLEMENT_AMOUNT}. Note that this only provides an estimate of your monthly payment. Changes in your circumstances may impact your results.',
    availableIneligible:
      'Based on the information you provided today, you are likely not eligible for any benefits. See the details below for more information.',
  },
  links: {
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
    oasOverview: {
      text: 'Old Age Security: Overview',
      url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security.htm',
      order: 3,
      location: LinkLocation.RESULTS_ONLY,
    },
    gisOverview: {
      text: 'Guaranteed Income Supplement: Overview',
      url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement.html',
      order: 4,
      location: LinkLocation.RESULTS_ONLY,
    },
    alwOverview: {
      text: 'Allowance: Overview',
      url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement/allowance.html',
      order: 5,
      location: LinkLocation.RESULTS_ONLY,
    },
    afsOverview: {
      text: 'Allowance for the Survivor: Overview',
      url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement/allowance-survivor.html',
      order: 6,
      location: LinkLocation.RESULTS_ONLY,
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
    oasApply: {
      text: 'Old Age Security',
      url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/apply.html',
      order: 20,
      location: LinkLocation.RESULTS_APPLY,
    },
    gisApply: {
      text: 'Guaranteed Income Supplement',
      url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement/apply.html',
      order: 21,
      location: LinkLocation.RESULTS_APPLY,
    },
    alwApply: {
      text: 'Allowance',
      url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement/allowance/apply.html',
      order: 22,
      location: LinkLocation.RESULTS_APPLY,
    },
    afsApply: {
      text: 'Allowance for the Survivor',
      url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement/allowance-survivor/apply.html',
      order: 23,
      location: LinkLocation.RESULTS_APPLY,
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
    socialAgreement: {
      text: 'social security agreement',
      url: 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/canada-pension-plan-cpp/foreign-employees-employers/canada-s-social-agreements-other-countries.html',
      order: -1,
      location: LinkLocation.HIDDEN,
    },
    oasReasons: {
      text: 'Click here',
      url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/eligibility.html#gc-document-nav',
      order: -1,
      location: LinkLocation.HIDDEN,
    },
    gisReasons: {
      text: 'Click here',
      url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement/eligibility.html',
      order: -1,
      location: LinkLocation.HIDDEN,
    },
    alwReasons: {
      text: 'Click here',
      url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement/allowance/eligibility.html',
      order: -1,
      location: LinkLocation.HIDDEN,
    },
    afsReasons: {
      text: 'Click here',
      url: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement/allowance-survivor/eligibility.html',
      order: -1,
      location: LinkLocation.HIDDEN,
    },
  },
  csv: {
    appName: 'Canadian Old Age Benefits Estimator',
    formResponses: 'FORM RESPONSES',
    question: 'Question',
    answer: 'Answer',
    estimationResults: 'ESTIMATION RESULTS',
    benefit: 'Benefit',
    eligibility: 'Eligibility',
    details: 'Details',
    entitlement: 'Estimated monthly amount',
    links: 'LINKS',
    description: 'Description',
    url: 'URL',
  },
  yes: 'Yes',
  no: 'No',
}
export default en
