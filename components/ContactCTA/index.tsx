import Link from 'next/link'
import { WebTranslations } from '../../i18n/web'
import { useStore, useTranslation } from '../Hooks'

export const ContactCTA: React.VFC = () => {
  const root = useStore()
  const tsln = useTranslation<WebTranslations>()
  return (
    <>
      <p
        className="!mt-6 !md:mt-8 summary-link"
        dangerouslySetInnerHTML={{ __html: tsln.contactCTA }}
      />
      {root.summary?.nextStepsLink?.url && (
        <>
          <h2 className="h2 mt-8">{tsln.nextSteps}</h2>
          <Link href={root.summary.nextStepsLink.url} passHref>
            <a className="btn btn-primary w-min !mt-4" target="_blank">
              {root.summary.nextStepsLink.text}
            </a>
          </Link>
        </>
      )}
    </>
  )
}
