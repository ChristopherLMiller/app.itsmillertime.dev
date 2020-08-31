import { ThemeProvider } from "styled-components";
import { AuthProvider } from "src/lib/AuthProvider";
import { defaultTheme, GlobalStyles } from "@/styles/default";
import Sidebar from "src/layout/elements/Sidebar";
import styled from "styled-components";
import { ToastProvider } from "react-toast-notifications";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

import "node_modules/normalize.css/normalize.css";
import "node_modules/prismjs/themes/prism-tomorrow.css";

const Layout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AuthProvider>
      <ThemeProvider theme={defaultTheme}>
        <ToastProvider
          autoDismiss
          autoDismissTimeout={6000}
          placement="top-right"
        >
          <Layout>
            <Sidebar />
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={router.pathname}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
          </Layout>
          <GlobalStyles />
        </ToastProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
