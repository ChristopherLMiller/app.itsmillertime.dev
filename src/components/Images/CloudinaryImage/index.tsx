import { defaultImage } from "config";
import Image from "next/image";
import { ReactNode } from "react";
import { useEXIF } from "src/lib/hooks/useExif";
import { customImageProps, ImageLayouts } from "..";
import {
  Caption,
  ExifData,
  ImageContainer,
  ImageContainerVariants,
  ImageOverlay,
  ImageOverlayVariants,
  SubText,
} from "../styles";

export interface CloudinaryImageTypes {
  public_id: string;
  width: number;
  height?: number;
  aspectRatio?: number;
  layout: any;
  alt: string; // Displays when image can't load
  caption?: string; // Information to overlay onto the image
  quality?: number;
  priority?: boolean;
  hoverable?: boolean;
  border?: boolean;
  getExif?: boolean;
  children?: ReactNode | null;
}

const CloudinaryLoader = ({ src, width, quality }) => {
  return `https://images.itsmillertime.dev/f_auto,q_${quality},w_${width}/${src}`;
};

const CloudinaryImage = ({
  public_id = defaultImage.public_id,
  width = defaultImage.width,
  height = defaultImage.height,
  layout,
  alt = defaultImage.altText,
  hoverable = false,
  caption = null,
  quality = 75,
  priority = false,
  border = true,
  getExif = false,
  children = null,
}) => {
  const { exifData, isLoading } = useEXIF(public_id, getExif);

  return (
    <ImageContainer
      variants={ImageContainerVariants}
      initial="rest"
      whileHover={hoverable ? "hover" : "rest"}
      cursor={hoverable ? "pointer" : "default"}
      border={border ? "var(--border)" : "none"}
      height={layout == ImageLayouts.fill ? "400px" : "auto"}
    >
      <Image
        src={public_id}
        alt={alt}
        width={width}
        height={height}
        layout={layout}
        quality={quality}
        priority={priority}
        placeholder={"blur"}
        blurDataURL={defaultImage.blurred}
        loading={priority ? "eager" : "lazy"}
        objectFit="fill"
        objectPosition="center"
        loader={CloudinaryLoader}
        srl_gallery_image={`true`}
        {...customImageProps}
      />
      {caption && (
        <ImageOverlay variants={ImageOverlayVariants}>
          <Caption>{caption}</Caption>
          {caption && <hr />}
          <SubText>{children}</SubText>
          {!isLoading && (
            <ExifData>
              f{exifData?.exif?.FNumber} - 1/
              {1 / exifData?.exif?.ExposureTime}s - ISO {exifData?.exif?.ISO} -{" "}
              {exifData?.exif?.FocalLength}mm - {exifData?.image?.Model} -{" "}
              {exifData?.exif?.LensModel}
            </ExifData>
          )}
        </ImageOverlay>
      )}
    </ImageContainer>
  );
};

export default CloudinaryImage;
