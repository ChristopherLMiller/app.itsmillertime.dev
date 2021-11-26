import { Cloudinary } from "@cloudinary/base";
import { AdvancedImage } from "@cloudinary/react";

const cloud = new Cloudinary({
  cloud: {
    cloudName: `demo`,
  },
});
const CloudinaryImage = () => {
  const image = cloud.image(`sample`);

  return (
    <div>
      <AdvancedImage cldImg={image} />
    </div>
  );
};

export default CloudinaryImage;
