import { ThemeProvider } from "styled-components";
import { AuthProvider } from "src/lib/AuthProvider";
import { defaultTheme, GlobalStyles } from "@/styles/default";
import Sidebar from "src/components/layout/elements/Sidebar";
import styled from "styled-components";

import "node_modules/normalize.css/normalize.css";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const Layout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AuthProvider>
      <ThemeProvider theme={defaultTheme}>
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
      </ThemeProvider>
    </AuthProvider>
  );
}
