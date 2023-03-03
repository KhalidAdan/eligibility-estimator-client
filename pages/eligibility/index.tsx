import { NextPage } from 'next'
import { ContextualAlert as Message } from '@dts-stn/service-canada-design-system'
import { EligibilityPage } from '../../components/EligibilityPage'
import { Layout } from '../../components/Layout'
import { useTranslation } from '../../components/Hooks'
import { WebTranslations } from '../../i18n/web'
import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Eligibility: NextPage<{ adobeAnalyticsUrl: string }> = ({
  adobeAnalyticsUrl,
}) => {
  const tsln = useTranslation<WebTranslations>()
  const language = useRouter().locale

  useEffect(() => {
    if (adobeAnalyticsUrl) {
      window.adobeDataLayer = window.adobeDataLayer || []
      window.adobeDataLayer.push({ event: 'pageLoad' })
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Head>
        {adobeAnalyticsUrl ? <script src={adobeAnalyticsUrl} /> : ''}

        <meta name="dcterms.title" content={tsln.questionPageTitle} />
        <meta name="dcterms.language" content={language} />
        <meta
          name="dcterms.creator"
          content="Employment and Social Development Canada/Emploi et Développement social Canada"
        />
        <meta name="dcterms.accessRights" content="2" />
        <meta name="dcterms.service" content="ESDC-EDSC_DC-CD" />
      </Head>
      <Layout title={tsln.questionPageTitle}>
        <div className="mb-6">
          <Message
            id={'eligibility-wip'}
            alert_icon_id={'testkey'}
            alert_icon_alt_text={tsln.warningText}
            type={'info'}
            message_heading={tsln.workInProgress}
            message_body={tsln.workInProgressBody}
            whiteBG={true}
          />
        </div>
        <EligibilityPage />
      </Layout>
      {adobeAnalyticsUrl ? (
        <script type="text/javascript">_satellite.pageBottom()</script>
      ) : (
        ''
      )}
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL,
    },
  }
}

export default Eligibility
