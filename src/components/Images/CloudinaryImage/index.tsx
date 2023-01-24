import { defaultImage } from "config";
import Image from "next/image";
import { FC, ReactNode } from "react";
import { useEXIF } from "src/lib/hooks/useExif";
import { CloudinaryLoader } from "src/utils/cloudinaryLoader";
import { customImageProps } from "..";
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
  children?: ReactNode | null;
  public_id: string;
  width: string | number;
  height?: string | number;
  aspectRatio?: number;
  alt: string; // Displays when image can't load
  caption?: string | undefined; // Information to overlay onto the image
  quality?: number | undefined;
  priority?: boolean;
  hoverable?: boolean;
  border?: boolean;
  getExif?: boolean;
  onClick?: () => void;
}

const CloudinaryImage: FC<CloudinaryImageTypes> = ({
  children,
  public_id = defaultImage.public_id,
  width,
  height,
  alt = defaultImage.altText,
  hoverable = false,
  caption,
  quality = 75,
  priority = false,
  border = true,
  getExif = false,

  onClick = () => {
    console.log("clicked");
  },
}) => {
  const { exifData, isLoading } = useEXIF(public_id, getExif);

  return (
    <ImageContainer
      variants={ImageContainerVariants}
      initial="rest"
      whileHover={hoverable ? "hover" : "rest"}
      cursor={hoverable === true ? "pointer" : "default"}
      border={border ? "var(--border)" : "none"}
      height={height || "auto"}
      onClick={onClick}
    >
      <Image
        src={public_id}
        alt={alt}
        width={width as number}
        height={height as number}
        quality={quality}
        priority={priority}
        placeholder={"blur"}
        blurDataURL={defaultImage.blurred}
        loading={priority ? "eager" : "lazy"}
        loader={CloudinaryLoader}
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
