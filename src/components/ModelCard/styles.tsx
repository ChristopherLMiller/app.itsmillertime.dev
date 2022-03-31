import { motion } from "framer-motion";
import styled from "styled-components";

export const ModelItem = styled(motion.article)`
  border: var(--border-width) solid ${(props) => props.color};
  border-top: none;
  height: min-content;
`;

export const variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
  },
};

export const ModelName = styled.div`
  grid-column: 1 / -1;
  background: ${(props) => props.background};
  padding: 1rem 0.5rem;
  font-family: var(--font-alt);
  font-size: var(--p-size);
  letter-spacing: 2px;

  a {
    color: var(--color-white-80);
    text-decoration: none;
  }
  a:hover {
    color: var(--color-white-100);
  }
`;

export const ModelImage = styled.div`
  grid-column: 1 / 2;

  span {
    min-height: 100%;
  }
`;

export const TagList = styled.div`
  background: var(--color-grey-darker);
  font-size: var(--p-size);
  font-family: var(--font-alt);
  color: var(--color-white-80);
  padding-inline: 1rem;
  padding-block: 0.5rem;

  a {
    text-decoration: none;
    color: var(--color-red);
    cursor: pointer;
  }
`;
