import { NextSeo } from "next-seo";
import PageLayout from "src/layout/PageLayout";
import Card from "src/components/Card";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import styled from "styled-components";
import ArticleListItem from "src/components/Article/ListItem";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import Loader from "src/components/Loader";
import Link from "next/link";
import { useArticlesQuery } from "src/graphql/schema/articles/articles.query.generated";
import { Article, PublicationState } from "src/graphql/types";

const title = `From My Desk`;
const description = `Archives concerning all matters web development and beyond`;

const ArticleList = styled.ul`
  padding-inline-start: 0;
`;

const BlogIndexpage: NextPage = () => {
  const [session] = useSession();
  const router = useRouter();

  // retrieve anything currently in the router query to use for the variables
  const variables = {};
  const tag = router.query["tag"];
  const sort = router.query["sort"] || "createdAt:DESC";
  const publicationState = session?.user
    ? PublicationState.Preview
    : PublicationState.Live;
  const page = parseInt(router.query["page"] as string) || 1;
  const limit = parseInt(router.query["limit"] as string) || 10;

  // if the tag is defined, we'll use it to filter the articles, but we must create an object appropriate for Strapi
  if (tag) {
    variables["where"] = {
      article_tags: {
        slug_eq: tag,
      },
    };
  }

  // set the rest now based on the above, will have a value regardless here
  variables["sort"] = sort;
  variables["publicationState"] = publicationState;
  variables["limit"] = limit;
  variables["start"] = (page - 1) * limit;

  // fetch the data now
  const { data, error, isLoading, isSuccess } = useArticlesQuery(variables);

  if (error) {
    console.error(error);
  }

  return (
    <PageLayout title={title} description={description}>
      {isLoading && <Loader isLoading={isLoading} />}
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          type: `website`,
          images: [
            {
              alt: `Blogging`,
              width: 4076,
              height: 2712,
              url: `https://res.cloudinary.com/christopherleemiller/image/upload/v1620977613/clm-new/uploads/blog_adb6d70b97.jpg`,
            },
          ],
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
        }}
      />
      {error && (
        <Card heading="Uh Oh!">
          <p>We were unable to fetch the data requested for whatever reason.</p>
          <p>More specifically: {error}</p>
        </Card>
      )}

      {isSuccess && data?.articles.length === 0 && (
        <Card heading="No posts Found">
          <p>
            Well this is awkward. We couldn&apos;t find any posts for the
            current tag{" "}
            <strong>
              <em>{tag}</em>
            </strong>
            . Please try again or expand to see all{" "}
            <Link href="/blog" shallow>
              here
            </Link>
            .
          </p>
        </Card>
      )}

      {isSuccess && (
        <ArticleList>
          {data?.articles?.map((article) => (
            <ArticleListItem key={article.id} article={article as Article} />
          ))}
        </ArticleList>
      )}
    </PageLayout>
  );
};

export default BlogIndexpage;
