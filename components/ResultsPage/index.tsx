import { Button, Message } from '@dts-stn/service-canada-design-system'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { FieldInput } from '../../client-state/InputHelper'
import { WebTranslations } from '../../i18n/web'
import { ResultKey, SummaryState } from '../../utils/api/definitions/enums'
import {
  BenefitResult,
  BenefitResultsObject,
  SummaryObject,
} from '../../utils/api/definitions/types'
import Tbl1SingleScraper from '../../utils/api/scrapers/tbl1SingleScraper'
import { useTranslation } from '../Hooks'
import { BenefitCards } from './BenefitCards'
import { EstimatedTotal } from './EstimatedTotal'
import { ListLinks } from './ListLinks'
import { MayBeEligible } from './MayBeEligible'
import { YourAnswers } from './YourAnswers'
import { numberToStringCurrency } from '../../i18n/api'

const notEligibleState = [
  SummaryState.AVAILABLE_INELIGIBLE,
  SummaryState.MORE_INFO,
  SummaryState.AVAILABLE_INELIGIBLE,
]

// get the link text by current summary state
const getEligibleLinkText: string = (
  currentState: SummaryState,
  tsln: WebTranslations
) => {
  if (notEligibleState.includes(currentState)) {
    return tsln.resultsPage.youAreNotEligible
  } else {
    return tsln.resultsPage.youMayBeEligible
  }
}

const getEstimatedMonthlyTotalLinkText: string = (
  entitlementSum: number,
  tsln: WebTranslations
) => {
  if (entitlementSum !== 0) {
    return `${tsln.resultsPage.yourEstimatedTotal}${numberToStringCurrency(
      entitlementSum,
      tsln._language
    )}`
  }
  return ''
}

const getNextStepLinkText: string = (
  results: BenefitResultsObject,
  tsln: WebTranslations
) => {
  for (const key in results) {
    if (results[key]['eligibility']?.result === ResultKey.ELIGIBLE) {
      return tsln.resultsPage.nextSteps
    }
  }
  return ''
}

const getBenefitsYouMayNotEligibleForLinkText: string = (
  results: BenefitResultsObject,
  tsln: WebTranslations
) => {
  for (const key in results) {
    if (results[key]['eligibility']?.result === ResultKey.INELIGIBLE) {
      return tsln.resultsPage.youMayNotBeEligible
    }
  }
  return ''
}

const ResultsPage: React.VFC<{
  inputs: FieldInput[]
  results: BenefitResultsObject
  summary: SummaryObject
}> = ({ inputs, results, summary }) => {
  const ref = useRef<HTMLDivElement>()
  const tsln = useTranslation<WebTranslations>()
  const router = useRouter()

  let listLinks: { text: string; url: string }[] = [
    { text: getEligibleLinkText(summary.state, tsln), url: '#eligible' },
    {
      text: getEstimatedMonthlyTotalLinkText(summary.entitlementSum, tsln),
      url: '#estimated',
    },
    { text: tsln.resultsPage.whatYouToldUs, url: '#answers' },
    { text: getNextStepLinkText(results, tsln), url: '#nextSteps' },
    {
      text: getBenefitsYouMayNotEligibleForLinkText(results, tsln),
      url: '#notEligible',
    },
  ]

  // filtered out the link item which text is empty.
  listLinks = listLinks.filter((ll) => ll.text)

  const resultsArray: BenefitResult[] = Object.keys(results).map(
    (value) => results[value]
  )

  const resultsEligible: BenefitResult[] = resultsArray.filter(
    (result) =>
      result.eligibility?.result === ResultKey.ELIGIBLE ||
      result.eligibility?.result === ResultKey.INCOME_DEPENDENT
  )

  return (
    <div className="flex flex-col space-y-12" ref={ref}>
      <div className="md:grid md:grid-cols-3 md:gap-12">
        <div className="col-span-2">
          <Message
            id="resultSummaryBox"
            type="info"
            alert_icon_id="resultSummaryBoxIcon"
            alert_icon_alt_text="Info"
            message_heading={summary.title}
            message_body={summary.details}
            asHtml={true}
          />

          <ListLinks title={tsln.resultsPage.onThisPage} links={listLinks} />

          <MayBeEligible resultsEligible={resultsEligible} />

          {resultsEligible.length > 0 && (
            <EstimatedTotal
              resultsEligible={resultsEligible}
              summary={summary}
            />
          )}
        </div>
        <div className="col-span-1">
          <YourAnswers title={tsln.resultsPage.whatYouToldUs} inputs={inputs} />
        </div>
        <div className="col-span-2">
          <hr className="my-12 border border-[#BBBFC5]" />

          <BenefitCards results={resultsArray} />

          <Button
            text={tsln.modifyAnswers}
            styling="secondary"
            className="mt-6 justify-center md:w-[fit-content]"
            onClick={(e) => router.push('/eligibility')}
          />
        </div>
      </div>
    </div>
  )
}

export default ResultsPage
