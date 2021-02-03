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
            url: `https://clm-sites-strapi.s3.us-east-2.amazonaws.com/privacy_621fe00d49.jpg`,
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
