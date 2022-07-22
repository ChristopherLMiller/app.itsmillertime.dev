import DesktopNav from "@components/Navigation/DesktopNav";
import { motion } from "framer-motion";
import { FC, ReactNode } from "react";
import Header from "src/layout/elements/Header";
import styled from "styled-components";
import Footer from "./elements/Footer";

export interface iMainProps {
  padding: string;
}
const Main = styled(motion.main)<iMainProps>`
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: -1;

  @media (min-width: 800px) {
    padding: ${(props) => props.padding};
  }
`;

const ContentArea = styled(motion.div)`
  overflow-x: hidden;
  min-height: calc(100vh - var(--top-bar-height) - var(--top-bar-height));
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

interface iBoxed {
  boxed: string;
}
const Boxed = styled.div<iBoxed>`
  width: 100%;
  max-width: ${(props) => props.boxed};
`;
interface iPagelayout {
  title: string;
  description: string;
  padding?: boolean;
  boxed?: string;
  children: ReactNode;
}

const PageLayout: FC<iPagelayout> = ({
  title,
  description,
  padding = true,
  boxed,
  children,
}) => {
  return (
    <ContentArea variants={contentVariants}>
      <Header title={title} description={description} />

      <Main padding={padding ? `0 10%` : `0 5%`}>
        <DesktopNav />
        <Boxed boxed={boxed ? boxed : ""}>{children}</Boxed>
      </Main>
      <Footer />
    </ContentArea>
  );
};

export default PageLayout;
