import { motion } from "framer-motion";
import styled from "styled-components";

export interface iStyledPanel {
  align: string;
  padding: boolean;
}

export const StyledPanel = styled(motion.div)`
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

  color: var(--color-black-80);
  height: min-content;
  padding: ${(props) => props.padding};
  position: relative;
  text-align: ${(props) => props.align};
  border: var(--border);
  ${(props) => props.boxed};

  img {
    max-width: 100%;
    display: inline-block;
  }

  p {
    break-inside: avoid;
    padding-block-end: 10px;
    padding-block-start: 10px;
    text-indent: 2em;
  }

  h3,
  h4,
  h5,
  h6 {
    margin-block: 1rem;
    position: relative;
    padding-inline-start: 2rem;
    color: var(--color-black-60);
    font-family: var(--font-block);
    text-transform: uppercase;
    font-style: italic;

    :before {
      content: "\\A";
      position: absolute;
      left: 5px;
      width: 50%;
      height: 100%;
      border-inline-start: 3px solid var(--color-gold-transparent);
      border-block-end: 5px solid var(--color-red-dark);
      opacity: 0.7;
      transform: skewX(-12deg);
    }
  }

  a {
    color: var(--color-red-intermediate);
    box-shadow: var(--box-shadow-inset-0);

    :hover {
      color: var(--color-gold-transparent);
      box-shadow: var(--box-shadow-inset-2);
    }
    img {
      width: 33%;
      max-width: 33%;
      display: inline-block;
    }
  }

  blockquote {
    border-inline-start: 10px solid var(--color-grey-intermediate);
    padding-inline-start: 1rem;
    background: var(--color-black-20);
  }
`;
