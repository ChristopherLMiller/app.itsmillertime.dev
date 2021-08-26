import { FunctionComponent } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

interface iImageContainer {
  border: boolean;
}
const ImageContainer = styled<iImageContainer>(motion.div)`
  ${(props) =>
    props.border && `border: 5px solid var(--color-red-intermediate);`}
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
  font-size: 2rem;

  p {
    margin: 0;
  }

  hr {
    border-color: var(--color-white-60);
  }
`;

const Caption = styled.p``;
const SubText = styled.span`
  font-size: 1em;
`;

const ImageOverlayVariants = {
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

interface iImage {
  public_id: string;
  width: number;
  height: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  layout?: any;
  alt: string;
  hoverable?: boolean;
  caption?: string;
  border?: boolean;
}

const ImageDefault: FunctionComponent<iImage> = ({
  public_id = `clm-new/uploads/default_fb95099398`,
  width = 1920,
  height = 1080,
  layout = `responsive`,
  alt = `Default Image`,
  hoverable,
  caption,
  border = true,
  children,
}) => (
  <ImageContainer
    variants={ImageContainerVariants}
    initial="rest"
    whileHover={hoverable ? `hover` : `rest`}
    border={border}
  >
    <Image
      src={`${public_id}`}
      alt={alt}
      layout={layout}
      width={width}
      height={height}
      loading={`eager`}
    />
    {caption && (
      <ImageOverlay variants={ImageOverlayVariants}>
        <Caption>{caption}</Caption>
        {caption && <hr />}
        <SubText>{children}</SubText>
      </ImageOverlay>
    )}
  </ImageContainer>
);

export default ImageDefault;
