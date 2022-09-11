import CloudinaryImage from "@components/Images/CloudinaryImage";
import { pageSettings } from "@fixtures/json/pages";
import { GetServerSideProps, NextPage } from "next";
import PageLayout from "src/layout/PageLayout";

interface GalleryImageProps {
  imageID: string;
}

const GalleryImagePage: NextPage<GalleryImageProps> = ({ imageID }) => {
  return (
    <PageLayout
      title={pageSettings.gallery.title}
      description={pageSettings.gallery.description}
      padding={false}
    >
      <CloudinaryImage
        public_id={imageID}
        width={1920}
        height={(1920 / 3) * 2}
      />
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // if an id isn't provided just return a 404
  if (!context.query.id) {
    return {
      notFound: true,
    };
  }

  // image ID is the public ID on cloudinary, joined by a slash, next router splits apart
  return {
    props: {
      imageID: Object.values(context.query.id).join("/"),
    },
  };
};

export default GalleryImagePage;
