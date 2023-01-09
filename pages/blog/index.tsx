import { DynamicContents, Pagination } from "@components/Dynamic/Content";
import { DynamicContentWrapper } from "@components/Dynamic/Wrapper";
import { pageSettings } from "@fixtures/json/pages";
import { NextPage, NextPageContext } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import PageLayout from "src/layout/PageLayout";

interface BlogIndexPageTypes {
  limit: number;
  page: number;
  sort: string;
  tag: string;
  category: string;
}

const BlogIndexpage: NextPage<BlogIndexPageTypes> = ({
  limit,
  page,
  sort,
  tag,
  category,
}) => {
  // Hooks we need for this route
  const router = useRouter();

  return (
    <PageLayout
      title={pageSettings.blog.title}
      description={pageSettings.blog.description}
    >
      <NextSeo
        title={pageSettings.blog.title}
        description={pageSettings.blog.description}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`}
        openGraph={{
          title: pageSettings.blog.title,
          description: pageSettings.blog.description,
          type: `website`,
          images: [
            {
              alt: `Blogging`,
              width: 800,
              height: 600,
              url: `https://images.itsmillertime.dev/w_800,q_auto,f_auto/clm-new/uploads/blog_adb6d70b97.jpg`,
            },
          ],
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`,
        }}
      />
      <DynamicContentWrapper
        initialProps={{ limit, page, sort, tag, category }}
        contentPath="post/minimal"
      >
        <DynamicContents pagination={Pagination.top} />
      </DynamicContentWrapper>
    </PageLayout>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  return {
    props: {
      limit: context?.query?.limit || null,
      page: context?.query?.page || null,
      sort: context?.query?.sort || null,
      tag: context?.query?.tag || null,
      category: context?.query?.category || null,
    },
  };
}
export default BlogIndexpage;
