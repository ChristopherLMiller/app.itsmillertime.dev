import PageLayout from "src/layout/PageLayout";
import Card from "src/components/Card";
import { NextSeo } from "next-seo";
import {
  SITE_DEFAULT_IMAGE_FILE,
  CLOUDINARY_CLOUD,
  CLOUDINARY_URL,
} from "config";

const AboutMeMarkdown = require("data/mdx/about-me.mdx").default;

const title = "About Me";
const description = "Where I came from and where I am now";

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
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/about-me`,
      }}
    />
    <Card align="left">
      <AboutMeMarkdown />
    </Card>
  </PageLayout>
);

export default PrivacyPolicyPage;
