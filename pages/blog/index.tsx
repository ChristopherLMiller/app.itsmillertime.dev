import { ArticleLandingContent } from "@components/Articles";
import { category } from "@components/Dynamic/Categories";

import { DynamicContentProvider } from "@components/Dynamic/Provider";
import { tag } from "@components/Dynamic/Tags";
import { pageSettings } from "@fixtures/json/pages";
import { APIEndpoint } from "config";
import { NextPage, NextPageContext } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import PageLayout from "src/layout/PageLayout";

interface BlogIndexPageTypes {
  take: number;
  page: number;
  order: string;
  tag: string;
  category: string;
  allTags: [tag];
  allCategories: [category];
}

const BlogIndexpage: NextPage<BlogIndexPageTypes> = ({
  take,
  page,
  order,
  tag,
  category,
  allTags,
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
          tag,
          category,
          select:
            "title,featuredImage,slug,publishedAt,updatedAt,category,tags,wordCount,summary",
        }}
        contentPath="post"
      >
        <ArticleLandingContent tags={allTags} categories={allCategories} />
      </DynamicContentProvider>
    </PageLayout>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  // fetch the tags
  const tagsRequest = await fetch(`${APIEndpoint.live}/posts/tags`);
  const tagsResponse = await tagsRequest.json();

  // fetch the categories
  const categoryRequest = await fetch(`${APIEndpoint.live}/posts/categories`);
  const categoryResponse = await categoryRequest.json();

  return {
    props: {
      take: context?.query?.take || null,
      page: context?.query?.page || null,
      order: context?.query?.order || null,
      tag: context?.query?.tag || null,
      category: context?.query?.category || null,
      allTags: tagsRequest.status === 200 ? tagsResponse.data : [],
      allCategories:
        categoryRequest.status === 200 ? categoryResponse.data : [],
    },
  };
}
export default BlogIndexpage;
