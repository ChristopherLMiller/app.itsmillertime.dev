import Header from "src/layout/elements/Header";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FunctionComponent } from "react";
import Footer from "./elements/Footer";
import ScrollTop from "src/components/ScrollTop";

const Main = styled(motion.main)`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2%;
`;

const Content = styled(motion.div)`
  overflow-x: hidden;
`;

const contentVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

interface iPagelayout {
  meta: {
    title: string;
    description: string;
    useSEO: boolean;
    path?: string;
    image?: string;
  };
}

const PageLayout: FunctionComponent<iPagelayout> = ({ meta, children }) => {
  return (
    <Content variants={contentVariants}>
      <Header meta={meta} />
      <Main>{children}</Main>
      <Footer />
      <ScrollTop />
    </Content>
  );
};

export default PageLayout;
