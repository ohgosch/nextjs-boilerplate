import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

import { GlobalStyle } from 'visual/styles/GlobalStyle';
import theme from 'visual/theme';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
