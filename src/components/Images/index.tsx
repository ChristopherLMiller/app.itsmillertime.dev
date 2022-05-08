import { ApiEndpoint, ImagesEndpoint } from "config";
import { motion } from "framer-motion";
import Image from "next/image";
import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import styled from "styled-components";

const ImageContainer = styled(motion.div)`
  border: ${(props) => props.border};
  position: relative;
  min-height: 75px;
  height: min-content;
  cursor: pointer;

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

const ExifData = styled.p`
  font-size: 1.25rem;
`;

interface iImage {
  public_id: string;
  width: number;
  height: number;
  layout?: any;
  alt: string;
  hoverable?: boolean;
  caption?: string;
  border?: boolean;
  getExif?: boolean;
  children?: ReactNode;
}

const customImageProps = {
  srl_gallery_image: `true`,
};

const ImageDefault: FunctionComponent<iImage> = ({
  public_id = `clm-new/uploads/default_fb95099398`,
  width = 1920,
  height = 1080,
  layout = `responsive`,
  alt = `Default Image`,
  hoverable,
  caption,
  border = true,
  getExif = false,
  children,
}) => {
  const [exifData, setExifData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchExif() {
      const imageURL = encodeURIComponent(`${ImagesEndpoint}/${public_id}.jpg`);
      console.log(imageURL);
      try {
        const response = await fetch(
          `${ApiEndpoint}/images/exif?url=${imageURL}`,
          {
            credentials: "same-origin",
            headers: {
              "Content-Type": `application/json`,
              Accept: `application/json`,
              "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
            },
          }
        );
        const { data, error, statusCode } = await response.json();

        if (statusCode === 200) {
          setIsLoading(false);
          setExifData(data.exif);
        } else {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (getExif) {
      fetchExif();
    }
  }, [public_id, getExif]);

  const imageSource = `${ImagesEndpoint}/${public_id}`;

  return (
    <ImageContainer
      variants={ImageContainerVariants}
      initial="rest"
      whileHover={hoverable ? `hover` : `rest`}
      border={border ? `var(--border)` : `none`}
    >
      <Image
        src={imageSource}
        alt={alt}
        layout={layout}
        width={width}
        height={height}
        loading={`eager`}
        placeholder={`blur`}
        blurDataURL={`${public_id}`}
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

export default ImageDefault;
