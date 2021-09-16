import PageLayout from "src/layout/PageLayout";
import { NextSeo } from "next-seo";
import UsesMarkdown from "fixtures/mdx/uses.mdx";
import { NextPage } from "next";
import Panel from "src/components/Panel";

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
            url: `https://res.cloudinary.com/christopherleemiller/image/upload/v1620977823/clm-new/uploads/uses_788df3948b.jpg`,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/uses`,
      }}
    />
    <Panel>
      <UsesMarkdown />
    </Panel>
  </PageLayout>
);

export default PrivacyPolicyPage;
