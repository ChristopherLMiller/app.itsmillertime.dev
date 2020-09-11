import PageLayout from "src/layout/PageLayout";
import Card from "src/components/Card";
import { NextSeo } from "next-seo";
import {
  SITE_DEFAULT_IMAGE_FILE,
  CLOUDINARY_CLOUD,
  CLOUDINARY_URL,
} from "config";

const title = "Home";
const description = "Programmer.  Amateur Designer.  Model Enthsiast.";

const IndexPage = () => {
  return (
    <PageLayout title={title} description={description}>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          type: "website",
          images: [
            {
              alt: "Default Site Image",
              width: 800,
              height: 600,
              url: `${CLOUDINARY_URL}/${CLOUDINARY_CLOUD}/image/upload/w_800,h_600,q_auto/v1594740865/${SITE_DEFAULT_IMAGE_FILE}.jpg`,
            },
          ],
          url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
        }}
      />
      <Card heading="Welcome" align="left">
        <p>
          Please excuse the mess while I'm remodeling. Many great things are in
          progress and will appear here as they are built.
        </p>

        <p>
          If you want to enjoy what I have to offer so far though go ahead and
          have a look around as I've got many pieces in place, nothing compared
          to what I have to go yet though.
        </p>

        <p>
          If you find any errors or problems you can submit an issue on GitHub,
          or reach me at one of the other places in the sidebar on the left.
        </p>
      </Card>
    </PageLayout>
  );
};

export default IndexPage;
