import PageLayout from "src/layout/PageLayout";
import Card from "src/components/Card";
import {
  SITE_DEFAULT_IMAGE_FILE,
  CLOUDINARY_CLOUD,
  CLOUDINARY_URL,
} from "config";
import { NextSeo } from "next-seo";

const PrivacyPolicyMarkdown = require("data/mdx/privacy-policy.mdx").default;

const title = "Privacy Policy";
const description = "My policies regarding your privacy and safety";

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
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy-policy`,
      }}
    />
    <Card align="left">
      <PrivacyPolicyMarkdown />
    </Card>
  </PageLayout>
);

export default PrivacyPolicyPage;
