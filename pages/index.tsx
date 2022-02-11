import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { Alert } from '../components/Alert'
import { useTranslation } from '../components/Hooks'
import { Layout } from '../components/Layout'
import { WebTranslations } from '../i18n/web'
import { EstimationSummaryState } from '../utils/api/definitions/enums'

const Home: NextPage = (props) => {
  const router = useRouter()
  const tsln = useTranslation<WebTranslations>()
  return (
    <Layout>
      <div className="mt-18 text-content">
        <p
          className="mb-4 text-content"
          dangerouslySetInnerHTML={{ __html: tsln.homePageP1 }}
        />
        <p
          className="mb-4 text-content"
          dangerouslySetInnerHTML={{ __html: tsln.homePageP2 }}
        />
        <p
          className="mb-4 text-content"
          dangerouslySetInnerHTML={{ __html: tsln.homePageP3 }}
        />
        <p
          className="mb-4 text-content"
          dangerouslySetInnerHTML={{ __html: tsln.homePageP4 }}
        />
        <p
          className="mb-4 text-content"
          dangerouslySetInnerHTML={{ __html: tsln.homePageP5 }}
        />
        <p
          className="mb-4 text-content"
          dangerouslySetInnerHTML={{ __html: tsln.homePageP6 }}
        />
      </div>

      <Alert
        title={tsln.disclaimerTitle}
        type={EstimationSummaryState.UNAVAILABLE}
        insertHTML
      >
        {tsln.disclaimer}
      </Alert>

      <button
        className="btn btn-primary w-28 mt-8"
        onClick={(e) => router.push('/eligibility')}
      >
        {tsln.next}
      </button>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  }
}

export default Home
