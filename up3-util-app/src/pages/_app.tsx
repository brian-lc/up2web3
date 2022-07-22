import type { ModelTypesToAliases } from '@glazed/types'
import { Provider as SelfIDProvider } from '@self.id/framework'
import { Provider as JotaiProvider } from 'jotai'
import type { AppProps } from 'next/app'

import { aliases as modelAliases } from '../__generated__/aliases'
import Layout from '../components/Layout'
import { CERAMIC_NETWORK } from '../constants'
import type { ModelTypes } from '../types'

import { MantineProvider } from '@mantine/core';

const aliases: ModelTypesToAliases<ModelTypes> = modelAliases

export default function App({ Component, pageProps }: AppProps) {
  const { state, ...props } = pageProps

  return (
    <SelfIDProvider client={{ ceramic: CERAMIC_NETWORK, aliases }} state={state} session={true}>
      <JotaiProvider>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: 'light',
          }}
        >
          <Layout>
            <Component {...props} />
          </Layout>
        </MantineProvider>
      </JotaiProvider>
    </SelfIDProvider>
  )
}
