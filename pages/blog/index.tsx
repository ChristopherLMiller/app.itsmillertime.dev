import { ArticleLandingContent } from "@components/Articles";
import { category } from "@components/Dynamic/Categories";

import { DynamicContentProvider } from "@components/Dynamic/Provider";
import { pageSettings } from "@fixtures/json/pages";
import { NextPage, NextPageContext } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import PageLayout from "src/layout/PageLayout";
import { fetchFromAPI } from "src/lib/fetch";

interface BlogIndexPageTypes {
  take: number;
  page: number;
  order: string;
  category: string;
  allCategories: [category];
}

const BlogIndexpage: NextPage<BlogIndexPageTypes> = ({
  take,
  page,
  order,
  category,
  allCategories,
}) => {
  // Hooks we need for this route
  const router = useRouter();

  return (
    <PageLayout
      title={pageSettings.blog.title}
      description={pageSettings.blog.description}
      boxed="1600px"
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
      <DynamicContentProvider
        initialProps={{
          take,
          page,
          order,
          category,
          select:
            "title,featuredImage,slug,publishedAt,updatedAt,category,wordCount,summary",
        }}
        contentPath="v1/posts/posts"
      >
        <ArticleLandingContent categories={allCategories} />
      </DynamicContentProvider>
    </PageLayout>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  // fetch the categories
  const categoriesData = await fetchFromAPI(`v1/posts/categories`);

  return {
    props: {
      take: context?.query?.take || null,
      page: context?.query?.page || null,
      order: context?.query?.order || null,
      category: context?.query?.category || null,
      allCategories:
        categoriesData.statusCode === 200 ? categoriesData.data : [],
    },
  };
}
export default BlogIndexpage;
