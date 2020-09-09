import { ThemeProvider } from "styled-components";
import { AuthProvider } from "src/lib/AuthProvider";
import { defaultTheme, GlobalStyles } from "@/styles/default";
import Sidebar from "src/layout/elements/Sidebar";
import styled from "styled-components";
import { ToastProvider } from "react-toast-notifications";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import getConfig from "next/config";
import * as Sentry from "@sentry/node";
import { RewriteFrames } from "@sentry/integrations";
import * as gtag from "src/utils/functions/gtag";
import { DefaultSeo } from "next-seo";

// global CSS
import "node_modules/normalize.css/normalize.css";
import "node_modules/prismjs/themes/prism-tomorrow.css";

import SEO from "next-seo.config";

if (process.env.NEXT_PUBLIC_SENTRY_DNS) {
  const config = getConfig();
  const distDir = `${config.serverRuntimeConfig.rootDir}/.next`;
  Sentry.init({
    enabled: process.env.NODE_ENV === "production",
    integrations: [
      new RewriteFrames({
        iteratee: (frame) => {
          frame.filename = frame.filename.replace(distDir, "app:///_next");
          return frame;
        },
      }),
    ],
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  });
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

const App = ({ Component, pageProps, err }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <AuthProvider>
      <ThemeProvider theme={defaultTheme}>
        <ToastProvider
          autoDismiss
          autoDismissTimeout={6000}
          placement="top-right"
        >
          <DefaultSeo {...SEO} />
          <Layout>
            <Sidebar />
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={router.pathname}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Component {...pageProps} err={err} />
              </motion.div>
            </AnimatePresence>
          </Layout>
          <GlobalStyles />
        </ToastProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
