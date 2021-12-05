import Layout from '../components/layout'
import Nav from '../components/nav'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f5f6f7;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
    margin: 0;
    padding: 0;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Nav />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
