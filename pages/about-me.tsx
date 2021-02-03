import PageLayout from 'src/layout/PageLayout';
import Card from 'src/components/Card';
import { NextSeo } from 'next-seo';
import AboutMeMarkdown from 'data/mdx/about-me.mdx';
import { NextPage } from 'next';

const title = `About Me`;
const description = `Where I came from and where I am now`;

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
            width: 800,
            height: 600,
            url: `https://clm-sites-strapi.s3.us-east-2.amazonaws.com/default_958a6c7fcd.jpg`,
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
