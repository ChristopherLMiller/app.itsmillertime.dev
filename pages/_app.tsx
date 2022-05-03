import ScrollTop from "@components/ScrollTop";
import { AnimatePresence, motion } from "framer-motion";
import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";
import Head from "next/head";
import { useRouter } from "next/router";
import "node_modules/normalize.css/normalize.css";
import "node_modules/prismjs/themes/prism-tomorrow.css";
import NProgress from "nprogress";
import { Fragment, useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastProvider } from "react-toast-notifications";
import TopBar from "src/layout/elements/TopBar";
import styled, { ThemeProvider } from "styled-components";
import { defaultTheme, GlobalStyles } from "styles/default";
import "../public/nprogress.css";

const Content = styled(motion.div)`
  margin-top: var(--top-bar-height);
`;

const CookieConsentText = styled.span`
  font-size: 2rem;
  font-weight: 300;
`;

const queryClient = new QueryClient();

const App = ({ Component, pageProps: { session, ...pageProps }, err }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      // TODO: implement my analytics here
    };

    router.events.on(`routeChangeComplete`, handleRouteChange);

    return () => {
      router.events.off(`routeChangeComplete`, handleRouteChange);
    };
  }, [router]);

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
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen />
        <ThemeProvider theme={defaultTheme}>
          <>
            <Head>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              <meta charSet="utf-8" />
              <meta name="theme-color" content="#982929" />
            </Head>
            <DefaultSeo {...SEO} />
            {/*<Snowy />*/}
            <CookieConsent buttonStyle={{ fontSize: `2rem` }}>
              <CookieConsentText>
                This website uses cookies to enhance the user experience.
              </CookieConsentText>
            </CookieConsent>
            <TopBar />

            <AnimatePresence exitBeforeEnter>
              <ToastProvider
                autoDismiss
                autoDismissTimeout={6000}
                placement="top-right"
              >
                <Fragment key={router.pathname}>
                  <Content>
                    <motion.div
                      key={router.pathname}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                    >
                      {true && <Component {...pageProps} err={err} />}
                    </motion.div>
                  </Content>
                </Fragment>
                <ScrollTop />
              </ToastProvider>
            </AnimatePresence>
            <GlobalStyles />
          </>
        </ThemeProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default App;
