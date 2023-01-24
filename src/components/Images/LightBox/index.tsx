import Image from "next/image";
import { Portal } from "react-portal";
import { CloudinaryLoader } from "src/utils/cloudinaryLoader";
import { customImageProps } from "..";
import { Modal, StyledLightbox } from "./styles";

const LightBox = ({
  public_id,
  alt,
  caption,
  width,
  height,
  blurData,
  exif,
}) => {
  return (
    <Portal closeonOutsideClick closeOnEsc>
      <Modal>
        <StyledLightbox>
          <div className="LightboxImage">
            <Image
              src={public_id}
              alt={alt}
              width={1920}
              height={1920 * (height / width)}
              loader={CloudinaryLoader}
              quality={60}
              loading="lazy"
              blurDataURL={`data:image/jpeg;base64,${blurData}`}
              placeholder="blur"
              {...customImageProps}
            />
          </div>
          <div className="LightboxInfo">
            <h3>{caption}</h3>
          </div>
        </StyledLightbox>
      </Modal>
    </Portal>
  );
};

export default LightBox;
