import { motion } from "framer-motion";
import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { ImageLayouts } from "./Images";
import CloudinaryImage from "./Images/CloudinaryImage";

const StyledPolaroid = styled(motion.div)`
  padding: 15px;
  background: var(--color-white-100);
  cursor: pointer;
  height: min-content;
`;

const PolaroidCaption = styled.p`
  font-family: var(--font-marker);
  color: var(--text-color);
  font-size: 3rem;
  margin: 15px 0;
`;

const PolaroidContent = styled.div`
  font-family: var(--font-marker);
  color: var(--color-black-80);
  font-size: 2rem;
  margin: 15px 0;
`;

const hoverState = {
  scale: 1.05,
};

interface iPolaroid {
  src: string;
  width: number;
  height: number;
  alt?: string;
  caption?: string;
  link?: {
    as: string;
    href: string;
  };
  children: ReactNode;
}

const Polaroid: FunctionComponent<iPolaroid> = ({
  src,
  width,
  height,
  alt,
  caption,
  link,
  children,
}) => {
  if (link != null) {
    return (
      <Link as={link.as} href={link.href} passHref>
        <StyledPolaroid whileHover={hoverState}>
          <CloudinaryImage
            public_id={src}
            alt={alt}
            width={width}
            height={height}
            layout={ImageLayouts.responsive}
          />
          {caption && <PolaroidCaption>{caption}</PolaroidCaption>}
          <PolaroidContent>{children}</PolaroidContent>
        </StyledPolaroid>
      </Link>
    );
  }

  return (
    <StyledPolaroid whileHover={hoverState}>
      <CloudinaryImage
        public_id={src}
        alt={alt}
        width={600}
        height={400}
        layout={ImageLayouts.responsive}
      />
      {caption && <PolaroidCaption>{caption}</PolaroidCaption>}
      <PolaroidContent>{children}</PolaroidContent>
    </StyledPolaroid>
  );
};

export default Polaroid;
