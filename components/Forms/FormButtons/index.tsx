import { Button } from '@dts-stn/decd-design-system'
import { Instance } from 'mobx-state-tree'
import { NextRouter, useRouter } from 'next/router'
import { Form } from '../../../client-state/models/Form'
import { RootStore } from '../../../client-state/store'
import { WebTranslations } from '../../../i18n/web'
import { useMediaQuery, useStore, useTranslation } from '../../Hooks'

export const FormButtons: React.FC<{}> = ({}) => {
  const router = useRouter()
  const tsln = useTranslation<WebTranslations>()
  const root = useStore()
  const form = root.form
  const isMobile = useMediaQuery(992)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3.5 md:gap-x-8 mt-20">
      {isMobile && (
        <SubmitButton
          label={tsln.getResults}
          router={router}
          root={root}
          form={form}
        />
      )}
      <Button
        text={tsln.back}
        styling="secondary"
        className="mt-4 md:mt-0 justify-center items-center"
        onClick={() => router.push('/')}
      />

      <Button
        text={tsln.clear}
        styling="secondary"
        className="mt-4 md:mt-0 justify-center items-center"
        onClick={() => {
          form.clearForm()
        }}
      />

      {!isMobile && (
        <SubmitButton
          label={tsln.getResults}
          router={router}
          root={root}
          form={form}
        />
      )}
    </div>
  )
}

const SubmitButton: React.FC<{
  router: NextRouter
  form: Instance<typeof Form>
  root: Instance<typeof RootStore>
  label: string
}> = ({ router, form, root, label }) => {
  return (
    <Button
      text={label}
      styling="primary"
      className="justify-center col-span-2 md:col-span-1"
      onClick={async () => {
        if (
          !form.validateAgainstEmptyFields(router.locale) &&
          !form.hasErrors
        ) {
          root.saveStoreState()
          router.push('/results')
        }
      }}
    />
  )
}
