import PageLayout from "src/layout/PageLayout";
import { NextSeo } from "next-seo";
import AboutMeMarkdown from "fixtures/mdx/about-me.mdx";
import { NextPage } from "next";
import Panel from "src/components/Panel";

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
            url: `https://res.cloudinary.com/christopherleemiller/image/upload/v1620977750/clm-new/uploads/default_fb95099398.jpg`,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/about-me`,
      }}
    />
    <Panel>
      <AboutMeMarkdown />
    </Panel>
  </PageLayout>
);

export default PrivacyPolicyPage;
