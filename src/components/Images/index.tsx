import { FunctionComponent } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

const ImageContainer = styled(motion.div)`
  border: 5px solid var(--color-red-intermediate);
  position: relative;
  min-height: 75px;
  height: min-content;

  > div {
    display: block !important;
  }
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
  image: {
    url: string;
    width: number;
    height: number;
  };
  alt: string;
  hoverable?: boolean;
}

const ImageDefault: FunctionComponent<iImage> = ({
  image,
  alt,
  hoverable,
  children,
}) => {
  return (
    <ImageContainer
      variants={ImageContainerVariants}
      initial="rest"
      whileHover={hoverable ? "hover" : "rest"}
    >
      <Image
        src={image.url}
        alt={alt}
        layout="responsive"
        width={image.width}
        height={image.height}
      />
      {children !== undefined && (
        <ImageOverlay variants={ImageOverlayVariants}>{children}</ImageOverlay>
      )}
    </ImageContainer>
  );
};

export default ImageDefault;
