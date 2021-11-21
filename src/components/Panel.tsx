import styled from "styled-components";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";

interface iStyledPanel {
  align?: string;
  padding?: boolean;
}

const StyledPanel = styled<iStyledPanel>(motion.div)`
  :before {
    content: "";
    background: var(--color-grey-light);
    background-image: var(--linen-paper);
    opacity: 0.75;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    z-index: -1;
  }

  padding: ${(props) => props.padding};
  position: relative;
  text-align: ${(props) => props.align};
`;

interface iPanel {
  align?: string;
  padding?: boolean;
}

const Panel: FunctionComponent<iPanel> = ({
  children,
  align = `left`,
  padding = true,
}) => (
  <StyledPanel align={align} padding={padding ? `3% 5%` : `0`}>
    {children}
  </StyledPanel>
);

export default Panel;
