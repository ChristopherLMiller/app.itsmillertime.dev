import { APIEndpoint, ImagesEndpoint } from "config";
import Image from "next/future/image";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { useEXIF } from "src/lib/hooks/useExif";
import { CloudinaryLoader } from "src/utils/cloudinaryLoader";
import { customImageProps } from "..";
import LightBox from "../LightBox";
import { Caption, EXIF, PolaroidVariants, StyledPolaroid } from "./styles";

interface PolaroidTypes {
  public_id: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  skewed?: boolean;
  hoverable?: boolean;
}
const Polaroid: FC<PolaroidTypes> = ({
  public_id,
  alt,
  caption,
  width,
  height,
  skewed,
  hoverable,
}) => {
  const [rotate, setRotate] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const [blurData, setBlurData] = useState<string>();
  const { exifData } = useEXIF(public_id, true);
  const [isPortalOpen, setIsPortalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (skewed) {
      const max = 5;
      const min = -5;
      setRotate(Math.random() * (max - min) + min);
    } else {
      setRotate(0);
    }
  }, [skewed]);

  // Load the blur data
  useMemo(() => {
    const fetchBlurData = async () => {
      const requestHeaders: HeadersInit = new Headers();
      requestHeaders.set("Content-Type", "application/json");
      requestHeaders.set("Accept", "application/json");
      requestHeaders.set(
        "x-api-key",
        process.env.NEXT_PUBLIC_API_KEY as string
      );
      const imageURL = encodeURIComponent(
        `${ImagesEndpoint}/f_auto,q_60,w_10/${public_id}.jpg`
      );
      const response = await fetch(
        `${APIEndpoint.live}/images/encode?url=${imageURL}`,
        {
          credentials: "same-origin",
          headers: requestHeaders,
        }
      );
      const { data, error, statusCode } = await response.json();

      if (statusCode === 200) {
        setBlurData(data.encoded);
      } else {
        console.log(error);
      }
    };

    fetchBlurData();
  }, [public_id]);

  return (
    <StyledPolaroid
      variants={PolaroidVariants}
      initial="initial"
      whileHover={hoverable ? "hover" : "initial"}
      ref={ref}
      style={{ rotateZ: rotate }}
      onClick={() => setIsPortalOpen(true)}
    >
      <Image
        src={public_id}
        alt={alt}
        width={300}
        height={300 * (height / width)}
        loader={CloudinaryLoader}
        quality={60}
        loading="lazy"
        blurDataURL={`data:image/jpeg;base64,${blurData}`}
        placeholder="blur"
        {...customImageProps}
      />

      <Caption>{caption}</Caption>
      {false && (
        <EXIF>
          f{exifData?.exif?.FNumber} - 1/
          {1 / exifData?.exif?.ExposureTime}s - ISO {exifData?.exif?.ISO} -{" "}
          {exifData?.exif?.FocalLength}mm - {exifData?.image?.Model} -{" "}
          {exifData?.exif?.LensModel}
        </EXIF>
      )}
      {isPortalOpen && (
        <LightBox
          public_id={public_id}
          alt={alt}
          caption={caption}
          width={width}
          height={height}
          blurData={blurData}
          exif={exifData}
        />
      )}
    </StyledPolaroid>
  );
};

export { Polaroid };
