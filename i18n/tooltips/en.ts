import { FieldKey } from '../../utils/api/definitions/fields'
import apiEn from '../api/en'
import { TooltipTranslations } from './index'

const en: TooltipTranslations = {
  [FieldKey.MARITAL_STATUS]: {
    heading: apiEn.category.marital,
    moreinfo: 'Which option applies to me?',
    text: "<p style='padding-bottom: 12px;'> \
            <span style='font-weight: bold;'>Single</span>: \
            You have never been married and are not in a common-law relationship. \
          </p> \
          <p style='padding-bottom: 12px;'> \
            <span style='font-weight: bold;'>Divorced</span>: \
            You're officially separated and have legally ended your marriage. \
          </p> \
          <p style='padding-bottom: 12px;'> \
            <span style='font-weight: bold;'>Separated:</span> \
            You have been living apart from your spouse or common-law partner because of a breakdown in the relationship for a period of at least 90 days and you have not reconciled. \
          </p> \
          <p style='padding-bottom: 12px;'> \
            <span style='font-weight: bold;'>Married</span>: \
            You and your spouse have had a ceremony that legally binds you to each other. \
            Your marriage must be legally recognized in the country where it was performed and in Canada. \
          </p> \
          <p style='padding-bottom: 12px;'> \
            <span style='font-weight: bold;'>Common-Law</span>: \
            You have lived continuously with your partner in a marital-type relationship for a minimum of 1&nbsp;year.\
          </p> \
          <p style='padding-bottom: 8px;'> \
            <span style='font-weight: bold;'>Widowed</span>: \
            Your spouse or common-law partner has died and you have not remarried or entered into a common-law relationship. \
          </p> \
          ",
  },
  [FieldKey.LEGAL_STATUS]: {
    heading: apiEn.category.legal,
    moreinfo: 'What does it mean to have legal status?',
    text: "<p style='padding-bottom: 8px;'> \
          Having legal status means you're allowed to enter and stay in Canada as: \
          </p> \
          <ul style='list-style-type: disc; padding-bottom: 8px; padding-left: 20px;'> \
            <li>a Canadian citizen</li> \
            <li>an Indigenous person registered under the <em>Indian Act</em></li> \
            <li>a temporary resident</li> \
            <li>a permanent resident (landed immigrant)</li> \
            <li>a refugee</li> \
          </ul> \
          ",
  },
  [FieldKey.PARTNER_LEGAL_STATUS]: {
    heading: apiEn.category.legal,
    moreinfo: 'What does it mean to have legal status?',
    text: "<p style='padding-bottom: 8px;'> \
            Having legal status means your partner is allowed to enter and stay in Canada as: \
          </p> \
          <ul style='list-style-type: disc; padding-bottom: 8px; padding-left: 20px;'> \
            <li>a Canadian citizen</li> \
            <li>an Indigenous person registered under the <em>Indian Act</em></li> \
            <li>a temporary resident</li> \
            <li>a permanent resident (landed immigrant)</li> \
            <li>a refugee</li> \
          </ul> \
          ",
  },
  [FieldKey.INCOME]: {
    heading: apiEn.category.income,
    moreinfo: 'Will this income be used in your application?',
    text: "<div style='margin-bottom: 16px;'> \
            <p style='padding-bottom: 8px; color: rgba(92, 92, 92, 1);'> \
            No, this is an estimation. Your actual <a style='text-decoration: underline; color: rgba(40, 65, 98, 1); display: flex;' href='https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement/apply.html#h2.2-3.1'>income and exemptions <img style='padding: 4px 0px 0px 4px;' src='/external.svg'/></a> will be assessed when you apply. \
            </p> \
          </div> \
          ",
  },
  [FieldKey.INCOME_WORK]: {
    heading: apiEn.category.income,
    moreinfo: 'Why are we asking for your work income?',
    text: "<div style='margin-bottom: 16px;'> \
            <p style='padding-bottom: 8px; color: rgba(92, 92, 92, 1);'> \
            Your first $15,000 of work-related income is subject to exemptions. We’ll calculate those for you. \
            </p> \
           </div> \
    ",
  },
  [FieldKey.PARTNER_INCOME]: {
    heading: apiEn.category.income,
    moreinfo: 'Will this income be used in your application?',
    text: "<div style='margin-bottom: 16px;'> \
            <p style='padding-bottom: 8px; color: rgba(92, 92, 92, 1);'> \
            No, this is an estimation. Your partner’s actual <a style='text-decoration: underline; color: rgba(40, 65, 98, 1); display: flex;' href='https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement/apply.html#h2.2-3.1'>income and exemptions <img style='padding: 4px 0px 0px 4px;' src='/external.svg'/></a> will be assessed when you apply. \
            </p> \
          </div> \
          ",
  },
  [FieldKey.PARTNER_INCOME_WORK]: {
    heading: apiEn.category.marital,
    moreinfo: 'Why are we asking for their work income?',
    text: "<div style='margin-bottom: 16px;'> \
            <p style='padding-bottom: 8px; color: rgba(92, 92, 92, 1);'> \
            Their first $15,000 of work-related income is subject to exemptions. We’ll calculate those for you. \
            </p> \
           </div> \
    ",
  },
}

export default en
