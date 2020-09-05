import { FC } from 'react';
import Head from 'next/head';

import { GlobalStyle } from 'visual/styles/GlobalStyle';

type AppProps = {
  Component: React.ComponentType;
};

const App: FC<AppProps> = ({ Component }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Component />
    </>
  );
};

export default App;
