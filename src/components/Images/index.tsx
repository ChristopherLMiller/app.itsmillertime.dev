import { FunctionComponent } from "react";
import styled from "styled-components";
import ProgressiveImage from "../ProgressiveImage";
import { motion } from "framer-motion";

const ImageContainer = styled(motion.div)`
  border: 5px solid var(--color-red-intermediate);
  position: relative;
  min-height: 75px;
  height: min-content;
`;

const ImageContainerVariants = {
  rest: {
    scale: 1,
    boxShadow: "var(--box-shadow-elev-0)",
    transition: {
      duration: 0.25,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "var(--box-shadow-elev-1)",
  },
};

const ImageOverlay = styled(motion.div)`
  position: absolute;
  padding: 10px;
  margin: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  color: var(--color-white-100);
  font-weight: 200;
  letter-spacing: 1px;

  p {
    margin: 0;
  }
`;

const ImageOverlayVariants = {
  rest: {
    background: "hsl(0deg 0% 0% / 0.6)",
    marginBottom: 0,
    transition: {
      type: "tween",
    },
  },
  hover: {
    background: "hsl(0deg 59% 40% / 0.8)",
    marginBottom: 10,
    transition: {
      type: "tween",
      ease: "easeOut",
    },
  },
};

interface iImage {
  image: string;
  preview?: string;
  alt: string;
}

const ImageDefault: FunctionComponent<iImage> = ({
  image,
  preview,
  alt,
  children,
}) => {
  return (
    <ImageContainer
      variants={ImageContainerVariants}
      initial="rest"
      whileHover="hover"
    >
      <ProgressiveImage
        image={image}
        preview={
          preview
            ? preview
            : `${process.env.NEXT_PUBLIC_STRAPI_URL}/uploads/default.jpg`
        }
        alt={alt}
      />
      <ImageOverlay variants={ImageOverlayVariants}>{children}</ImageOverlay>
    </ImageContainer>
  );
};

export default ImageDefault;
