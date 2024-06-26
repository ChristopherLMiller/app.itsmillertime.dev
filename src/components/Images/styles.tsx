import { motion } from "framer-motion";
import styled from "styled-components";

export interface iImageContainer {
  border?: string;
  height?: string | number;
  cursor?: string;
}
export const ImageContainer = styled(motion.div)<iImageContainer>`
  border: ${(props) => props.border};
  position: relative;
  height: ${(props) => props.height || "auto"};
  min-height: max-content;
  cursor: ${(props) => props.cursor};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }
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
export const SubText = styled.div`
  ul,
  ol {
    list-style-type: none;
    padding-inline-start: 0;

    }
  }
  * {
    font-size: 1.25rem;
  }
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
