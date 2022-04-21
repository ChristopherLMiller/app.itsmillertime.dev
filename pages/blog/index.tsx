import { pageSettings } from "config";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import ArticleListItem from "src/components/Article/ListItem";
import Card from "src/components/Card";
import Loader from "src/components/Loader";
import { useArticlesQuery } from "src/graphql/schema/articles/articles.query.generated";
import { Article, PublicationState } from "src/graphql/types";
import PageLayout from "src/layout/PageLayout";
import { getJWT, isAuthenticated } from "src/utils/auth";
import styled from "styled-components";

const ArticleList = styled.ul`
  padding-inline-start: 0;
`;

const BlogIndexpage: NextPage = () => {
  const session = useSession();
  const router = useRouter();

  // retrieve anything currently in the router query to use for the variables
  const tag = router.query["tag"] as string;
  const sort = (router.query["sort"] as string) || "createdAt:DESC";
  const publicationState = isAuthenticated(session)
    ? PublicationState.Preview
    : PublicationState.Live;
  const page = parseInt(router.query["page"] as string) || 1;
  const limit = parseInt(router.query["limit"] as string) || 10;
  const start = (page - 1) * limit;

  // set the rest now based on the above, will have a value regardless here
  const variables = {
    sort,
    publicationState,
    limit,
    start,
    jwt: getJWT(session),
  };

  // if the tag is defined, we'll use it to filter the articles, but we must create an object appropriate for Strapi
  if (tag) {
    variables["where"] = {
      article_tags: {
        slug_eq: tag,
      },
    };
  }

  // fetch the data now
  const { data, error, isLoading, isSuccess } = useArticlesQuery(variables);

  if (error) {
    console.error(error);
    console.log(data);
  }

  return (
    <PageLayout
      title={pageSettings.blog.title}
      description={pageSettings.blog.description}
    >
      {isLoading && <Loader isLoading={isLoading} />}
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
              url: `https://res.cloudinary.com/christopherleemiller/image/upload/w_800,q_auto,f_auto/clm-new/uploads/blog_adb6d70b97.jpg`,
            },
          ],
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`,
        }}
      />
      {error && false && (
        <Card heading="Uh Oh!">
          <p>
            We were unable to fetch the data requested for whatever reason.
            Check the console for error or try again later.
          </p>
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
        <Fragment>
          <ArticleList>
            {data?.articles?.map((article) => (
              <ArticleListItem key={article.id} article={article as Article} />
            ))}
          </ArticleList>
        </Fragment>
      )}
    </PageLayout>
  );
};

export default BlogIndexpage;
