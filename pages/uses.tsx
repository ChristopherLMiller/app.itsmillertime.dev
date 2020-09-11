import PageLayout from "src/layout/PageLayout";
import Card from "src/components/Card";
import { NextSeo } from "next-seo";
import {
  CLOUDINARY_CLOUD,
  CLOUDINARY_URL,
  SITE_DEFAULT_IMAGE_FILE,
} from "config";

const UsesMarkdown = require("data/mdx/uses.mdx").default;

const title = "Uses";
const description = "The tech and tools that I use";

const PrivacyPolicyPage = () => (
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
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/USES`,
      }}
    />
    <Card align="left">
      <UsesMarkdown />
    </Card>
  </PageLayout>
);

export default PrivacyPolicyPage;
