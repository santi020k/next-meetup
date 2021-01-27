// Libs
import { ReactElement } from 'react'
import { AppProps, AppContext } from 'next/app'
import { ThemeProvider } from 'styled-components'
// Components
import { Main } from 'components/layouts'
// Less styles
import 'styles/index.less'
// Theme
import Theme from 'styles/theme'

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => (
  <ThemeProvider theme={Theme}>
    <Main>
      <Component {...pageProps} />
    </Main>
  </ThemeProvider>
)

interface Props {
  pageProps: unknown
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext): Promise<Props> => {
  const pageProps = {
    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
  }

  const props: Props = {
    pageProps
  }

  return props
}

export default MyApp
