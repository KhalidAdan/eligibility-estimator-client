import Image from 'next/image'
import { getTranslations } from '../../i18n/api'
import { WebTranslations } from '../../i18n/web'
import { BenefitResult } from '../../utils/api/definitions/types'
import { useTranslation } from '../Hooks'

export const MayBeEligible: React.VFC<{
  resultsEligible: BenefitResult[]
  partner?: boolean
}> = ({ resultsEligible, partner = false }) => {
  const tsln = useTranslation<WebTranslations>()
  const apiTrans = getTranslations(tsln._language)
  const isEligible: boolean = resultsEligible.length > 0
  const titleArray = [
    'Old Age Security pension',
    'Pension de la Sécurité de la vieillesse',
  ]
  const titleWithAcronymArray = [
    'Old Age Security (OAS) pension',
    'Pension de la Sécurité de la vieillesse (SV)',
  ]

  const transformBenefitName = (benefitName) => {
    let benefitText = ''
    const foundIndex = titleArray.findIndex((t) => t === benefitName)
    benefitText =
      foundIndex != -1 ? titleWithAcronymArray[foundIndex] : benefitName
    return benefitText
  }

  // Do nothing if eligible
  if (isEligible) return null

  // Displays only when not eligible
  return (
    <>
      <h2 id="eligible" className="h2 mt-8 flex">
        <div className="flex-none w-8 h-8">
          <Image
            src={isEligible ? '/green-check-mark.svg' : '/circle-arrow.svg'}
            alt=""
            width={30}
            height={30}
          />{' '}
        </div>
        <div className="ml-2 grow">
          {isEligible
            ? tsln.resultsPage.youMayBeEligible
            : partner
            ? tsln.resultsPage.partnerNotEligible
            : tsln.resultsPage.youAreNotEligible}
        </div>
      </h2>
      <div className="pl-[35px]">
        <p
          dangerouslySetInnerHTML={{
            __html: isEligible
              ? tsln.resultsPage.basedOnYourInfoEligible
              : partner
              ? tsln.resultsPage.basedOnPartnerInfoNotEligible
              : tsln.resultsPage.basedOnYourInfoNotEligible,
          }}
        />
        <ul className="pl-5 list-disc text-content font-semibold">
          {resultsEligible.map((benefit) => (
            <li key={benefit.benefitKey}>
              {transformBenefitName(apiTrans.benefit[benefit.benefitKey])}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
