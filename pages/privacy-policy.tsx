import PageLayout from 'src/layout/PageLayout';
import Card from 'src/components/Card';
import { NextSeo } from 'next-seo';
import { NextPage } from 'next';
import PrivacyPolicyMarkdown from 'data/mdx/privacy-policy.mdx';

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
    <Card align="left">
      <PrivacyPolicyMarkdown />
    </Card>
  </PageLayout>
);

export default PrivacyPolicyPage;
