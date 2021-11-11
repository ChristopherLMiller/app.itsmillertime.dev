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

  padding: ${(props) => (props.padding ? `3% 5%` : `0`)};
  position: relative;
  text-align: ${(props) => props.align};

  p {
    word-break: break-word;
  }

  strong {
    color: var(--color-red-dark);
  }

  img {
    max-width: 100%;
    display: inline-block;
  }

  table {
    border: 2px solid var(--color-red-dark);
    border-collapse: collapse;
  }

  a {
    color: var(--color-red-intermediate);
  }

  a:hover,
  a:focus {
    color: var(--color-red-80);
  }

  thead {
    background: var(--color-red-dark);
    color: var(--color-white-100);
  }

  thead th {
    padding: 5px;
  }

  td {
    border: 1px solid var(--color-gold-transparent);
    padding: 5px;
  }

  blockquote {
    border-left: 5px solid var(--color-red-intermediate);
    padding-inline-start: 10px;
    background: var(--color-red-40);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-alt);
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    text-transform: uppercase;
    margin: 0;
    padding-inline-start: 5px;
    color: var(--color-red-dark);
    border-bottom: 5px solid var(--color-gold-transparent);
    border-left: 3px solid var(--color-grey-intermediate);
    opacity: 0.7;
  }
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
  <StyledPanel align={align} padding={padding || undefined}>
    {children}
  </StyledPanel>
);

export default Panel;
