import PageLayout from "src/layout/PageLayout";
import { NextSeo } from "next-seo";
import { NextPage } from "next";
import PrivacyPolicyMarkdown from "fixtures/mdx/privacy-policy.mdx";
import Panel from "src/components/Panel";

const title = `Privacy Policy`;
const description = `My policies regarding your privacy and safety`;

const PrivacyPolicyPage: NextPage = () => (
  <PageLayout title={title} description={description}>
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        title,
        description,
        type: `website`,
        images: [
          {
            alt: `Default Site Image`,
            width: 4912,
            height: 3264,
            url: `https://res.cloudinary.com/christopherleemiller/image/upload/v1620977871/clm-new/uploads/privacy_4f8775a22c.jpg`,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy-policy`,
      }}
    />
    <Panel>
      <PrivacyPolicyMarkdown />
    </Panel>
  </PageLayout>
);

export default PrivacyPolicyPage;
