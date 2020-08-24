import Header from "src/components/layout/elements/Header";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FunctionComponent } from "react";

const Main = styled(motion.main)`
  background: white;
  max-width: var(--max-width);
  margin: 0 auto;
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
      <Header />
      <Main>{children}</Main>
      <footer>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/smashicons"
          title="Smashicons"
        >
          Smashicons
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          www.flaticon.com
        </a>
      </footer>
    </Content>
  );
};

export default PageLayout;
