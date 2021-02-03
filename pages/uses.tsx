import PageLayout from 'src/layout/PageLayout';
import Card from 'src/components/Card';
import { NextSeo } from 'next-seo';
import UsesMarkdown from 'data/mdx/uses.mdx';
import { NextPage } from 'next';

const title = `Uses`;
const description = `The tech and tools that I use`;

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
            width: 5472,
            height: 3648,
            url: `https://clm-sites-strapi.s3.us-east-2.amazonaws.com/uses_647bad3e20.jpg`,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/uses`,
      }}
    />
    <Card align="left">
      <UsesMarkdown />
    </Card>
  </PageLayout>
);

export default PrivacyPolicyPage;
