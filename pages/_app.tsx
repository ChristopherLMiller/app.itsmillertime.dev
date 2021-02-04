import { ThemeProvider } from 'styled-components';
import { AuthProvider } from 'src/lib/AuthProvider';
import { defaultTheme, GlobalStyles } from '@/styles/default';
import styled from 'styled-components';
import { ToastProvider } from 'react-toast-notifications';
import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as gtag from 'src/utils/functions/gtag';
import { DefaultSeo } from 'next-seo';
import NProgress from 'nprogress';
import Head from 'next/head';
import TopBar from 'src/layout/elements/TopBar';
import { ReactQueryDevtools } from 'react-query-devtools';
import { init } from 'src/utils/functions/sentry';

// global CSS
import 'node_modules/normalize.css/normalize.css';
import 'node_modules/prismjs/themes/prism-tomorrow.css';
import 'node_modules/nprogress/nprogress.css';

import SEO from 'next-seo.config';
import Snowy from 'src/components/Holiday/Snowy';
import { AppComponent } from 'next/dist/next-server/lib/router/router';
import CookieConsent from 'react-cookie-consent';

// Sentry
init();

const Content = styled(motion.div)``;
const CookieConsentText = styled.span`
  font-size: 2rem;
  font-weight: 300;
`;

const App: AppComponent = ({ Component, pageProps, err }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on(`routeChangeComplete`, handleRouteChange);

    return () => {
      router.events.off(`routeChangeComplete`, handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    const routeChangeStart = () => {
      NProgress.configure({ showSpinner: false });
      NProgress.start();
    };

    const routeChangeComplete = () => {
      NProgress.done();
    };

    const routeChangeError = () => {
      NProgress.done();
    };

    router.events.on(`routeChangeStart`, routeChangeStart);
    router.events.on(`routeChangeComplete`, routeChangeComplete);
    router.events.on(`routeChangeError`, routeChangeError);

    return () => {
      router.events.off(`routeChangeStart`, routeChangeStart);
      router.events.off(`routeChangeComplete`, routeChangeComplete);
      router.events.off(`routeChangeError`, routeChangeError);
    };
  });

  return (
    <AuthProvider>
      <ReactQueryDevtools initialIsOpen />
      <ThemeProvider theme={defaultTheme}>
        <ToastProvider
          autoDismiss
          autoDismissTimeout={6000}
          placement="top-right"
        >
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta charSet="utf-8" />
            <meta name="theme-color" content="#982929" />
          </Head>
          <DefaultSeo {...SEO} />
          <Snowy />
          <CookieConsent buttonStyle={{ fontSize: `2rem` }}>
            <CookieConsentText>
              This website uses cookies to enhance the user experience.
            </CookieConsentText>
          </CookieConsent>
          <AnimatePresence exitBeforeEnter>
            <Fragment>
              <TopBar />
              <Content>
                <motion.div
                  key={router.pathname}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  <Component {...pageProps} err={err} />
                </motion.div>
              </Content>
            </Fragment>
          </AnimatePresence>
          <GlobalStyles />
        </ToastProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
