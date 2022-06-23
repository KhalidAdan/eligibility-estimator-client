import { LinkLocation } from '../../../utils/api/definitions/enums'
import { LinkDefinitions } from './index'

export const links: LinkDefinitions = {
  faq: {
    text: 'Foire aux questions',
    url: '#faqLink',
    order: 1,
    location: LinkLocation.QUESTIONS_ONLY,
  },
  contactSC: {
    text: 'Communiquer avec Service Canada',
    url: 'https://www.canada.ca/fr/emploi-developpement-social/ministere/coordonnees/sv.html',
    order: 2,
    location: LinkLocation.QUESTIONS_ONLY,
  },
  overview: {
    oas: {
      text: 'Pension de la Sécurité de vieillesse: Aperçu',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse.html',
      order: 3,
      location: LinkLocation.RESULTS_ONLY,
    },
    gis: {
      text: 'Supplément de revenu garanti: Aperçu',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/supplement-revenu-garanti.html',
      order: 4,
      location: LinkLocation.RESULTS_ONLY,
    },
    alw: {
      text: 'Allocation: Aperçu',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/supplement-revenu-garanti/allocation.html',
      order: 5,
      location: LinkLocation.RESULTS_ONLY,
    },
    afs: {
      text: 'Allocation au survivant: Aperçu',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/supplement-revenu-garanti/allocation-survivant.html',
      order: 6,
      location: LinkLocation.RESULTS_ONLY,
    },
  },
  oasMaxIncome: {
    text: 'Pension de la Sécurité de vieillesse: Revenu Maximum',
    url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/montant-prestation.html',
    order: 7,
    location: LinkLocation.RESULTS_ONLY,
  },
  cpp: {
    text: 'Pension de retraite du RPC: Aperçu',
    url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc.html',
    order: 8,
    location: LinkLocation.RESULTS_ONLY,
  },
  cric: {
    text: 'Calculatrice du revenu de retraite canadienne',
    url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/calculatrice-revenu-retraite.html',
    order: 9,
    location: LinkLocation.RESULTS_ONLY,
  },
  paymentOverview: {
    text: 'Comment les paiements sont-ils calculés',
    url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/paiements.html',
    order: 10,
    location: LinkLocation.RESULTS_ONLY,
  },
  gisEntitlement: {
    text: 'Supplément de revenu garanti: Aperçu des paiements',
    url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/supplement-revenu-garanti/montant-prestation.html',
    order: 11,
    location: LinkLocation.RESULTS_ONLY,
  },
  alwEntitlement: {
    text: 'Allocation: Aperçu des paiements',
    url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/supplement-revenu-garanti/allocation/montant-prestation.html',
    order: 12,
    location: LinkLocation.RESULTS_ONLY,
  },
  afsEntitlement: {
    text: 'Allocation au survivant: Aperçu des paiements',
    url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/supplement-revenu-garanti/allocation-survivant/montant-prestation.html',
    order: 13,
    location: LinkLocation.RESULTS_ONLY,
  },
  outsideCanada: {
    text: 'Personnes vivant à l’étranger: Aperçu',
    url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/rpc-internationales.html',
    order: 14,
    location: LinkLocation.RESULTS_ONLY,
  },
  outsideCanadaOas: {
    text: 'Personnes vivant à l’étranger: Pension de la Sécurité de vieillesse',
    url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/admissibilite.html',
    order: 15,
    location: LinkLocation.RESULTS_ONLY,
  },
  oasPartial: {
    text: 'Pension de la Sécurité de vieillesse: Moins de 40 ans au Canada',
    url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/montant-prestation.html#h2.3-3.1',
    order: 16,
    location: LinkLocation.RESULTS_ONLY,
  },
  oasRecoveryTax: {
    text: 'Pension de la Sécurité de vieillesse: Impôt de récupération',
    url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/impot-recuperation.html',
    order: 17,
    location: LinkLocation.RESULTS_ONLY,
  },
  oasDefer: {
    text: 'Pension de la Sécurité de la vieillesse: Reporter votre premier paiement',
    url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/montant-prestation.html#h2.2',
    order: 18,
    location: LinkLocation.RESULTS_ONLY,
  },
  oasRetroactive: {
    text: 'Pension de la Sécurité de vieillesse: Paiements rétroactifs',
    url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/montant-prestation.html#:~:text=Paiements%20r%C3%A9troactifs',
    order: 19,
    location: LinkLocation.RESULTS_ONLY,
  },
  apply: {
    oas: {
      text: 'Pension de la Sécurité de la vieillesse',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/demande.html',
      order: 20,
      location: LinkLocation.RESULTS_APPLY,
    },
    gis: {
      text: 'Supplément de revenu garanti',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/supplement-revenu-garanti/demande.html',
      order: 21,
      location: LinkLocation.RESULTS_APPLY,
    },
    alw: {
      text: 'Allocation',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/supplement-revenu-garanti/allocation/demande.html',
      order: 22,
      location: LinkLocation.RESULTS_APPLY,
    },
    afs: {
      text: 'Allocation au survivant',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/supplement-revenu-garanti/allocation-survivant/demande.html',
      order: 23,
      location: LinkLocation.RESULTS_APPLY,
    },
  },
  SC: {
    text: 'Service Canada',
    url: 'https://www.canada.ca/fr/emploi-developpement-social/ministere/coordonnees/sv.html',
    order: -1,
    location: LinkLocation.HIDDEN,
  },
  oasDeferClickHere: {
    text: 'cliquez ici',
    url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/montant-prestation.html#h2.2',
    order: -1,
    location: LinkLocation.HIDDEN,
  },
  oasDeferInline: {
    text: 'le report de la SV',
    url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/montant-prestation.html#h2.2',
    order: -1,
    location: LinkLocation.HIDDEN,
  },
  socialAgreement: {
    text: 'accord de sécurité sociale',
    url: 'https://www.canada.ca/fr/agence-revenu/services/impot/entreprises/sujets/retenues-paie/retenues-paie-cotisations/regime-pensions-canada-rpc/employes-employeurs-etrangers/accords-sociaux-canada-autres-pays.html',
    order: -1,
    location: LinkLocation.HIDDEN,
  },
  reasons: {
    oas: {
      text: 'Cliquez ici',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/admissibilite.html',
      order: -1,
      location: LinkLocation.HIDDEN,
    },
    gis: {
      text: 'Cliquez ici',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/supplement-revenu-garanti/admissibilite.html',
      order: -1,
      location: LinkLocation.HIDDEN,
    },
    alw: {
      text: 'Cliquez ici',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/supplement-revenu-garanti/allocation/admissibilite.html',
      order: -1,
      location: LinkLocation.HIDDEN,
    },
    afs: {
      text: 'Cliquez ici',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/supplement-revenu-garanti/allocation-survivant/admissibilite.html',
      order: -1,
      location: LinkLocation.HIDDEN,
    },
  },
  oasRecoveryTaxInline: {
    text: "d'impôt de récupération",
    url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/impot-recuperation.html',
    order: -1,
    location: LinkLocation.HIDDEN,
  },
}
