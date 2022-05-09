import { motion } from "framer-motion";
import styled from "styled-components";

export const ImageContainer = styled(motion.div)`
  border: ${(props) => props.border};
  position: relative;
  height: ${(props) => props.height};
  min-height: max-content;
  cursor: ${(props) => props.pointer};
`;

export const ImageContainerVariants = {
  rest: {
    scale: 1,
    boxShadow: `var(--box-shadow-elev-0)`,
    transition: {
      duration: 0.25,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: `var(--box-shadow-elev-1)`,
  },
};

export const ImageOverlay = styled(motion.div)`
  font-family: var(--font-main);
  position: absolute;
  padding: 10px;
  margin: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  color: var(--color-white-100);
  font-weight: 200;
  letter-spacing: 1px;
  font-size: 2rem;

  p {
    margin: 0;
  }

  hr {
    border-color: var(--color-white-60);
  }
`;

export const Caption = styled.p``;
export const SubText = styled.span`
  font-size: 1em;
`;

export const ImageOverlayVariants = {
  rest: {
    background: `hsl(0deg 0% 0% / 0.6)`,
    marginBottom: 0,
    transition: {
      type: `tween`,
    },
  },
  hover: {
    background: `hsl(0deg 59% 40% / 0.8)`,
    marginBottom: 10,
    transition: {
      type: `tween`,
      ease: `easeOut`,
    },
  },
};

export const ExifData = styled.p`
  font-size: 1.25rem;
`;
