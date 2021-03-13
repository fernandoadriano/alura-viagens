import { ThemeProvider } from 'styled-components'
import Head from 'next/head';
import GlobalStyle from 'src/theme/GlobalStyle';
import theme from 'src/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portifólio - Projeto do Bootcamp JAM Stack Alura</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Pattaya&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
      </Head>    
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
