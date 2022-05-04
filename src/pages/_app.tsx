import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'visual/styles/GlobalStyle';
import theme from 'visual/theme';
import Test from 'components/Test';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
        <Test />
      </ThemeProvider>
    </>
  );
};

export default App;
