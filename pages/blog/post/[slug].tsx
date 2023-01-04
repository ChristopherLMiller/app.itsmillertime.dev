import CloudinaryImage from "@components/Images/CloudinaryImage";
import Markdown from "@components/Markdown";
import { Padding } from "@components/Padding";
import Panel from "@components/Panel";
import ShareButtons from "@components/ShareButtons";
import { pageSettings } from "@fixtures/json/pages";
import { defaultImage } from "config";
import { formatRelative, parseISO } from "date-fns";
import { DiscussionEmbed } from "disqus-react";
import { GetServerSideProps, NextPage } from "next";
import { getSession, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import PageLayout from "src/layout/PageLayout";
import { countWords, isAdmin, timeToRead } from "src/utils";
import { isSessionLoading } from "src/utils/auth";
import styled from "styled-components";

const ArticleHeader = styled.div`
  border-bottom: 5px solid var(--color-gold-transparent);
  background: var(--color-red-intermediate);
  color: var(--color-white-100);

  h2 {
    font-family: var(--font-alt);
    font-size: var(--h3-size);
    margin: 0;
    padding: 0 5%;
  }
  .publish {
    font-family: var(--font-block);
    margin: 0;
    font-size: var(--h6-size);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 0 5%;

    a {
      color: var(--color-white-100);
    }
  }
`;

interface iBlogPost {
  article: any;
}

const BlogPost: NextPage<iBlogPost> = ({ article }) => {
  console.log(article);
  const session = useSession();
  const router = useRouter();
  return (
    <PageLayout
      title={pageSettings.blog.title}
      description={pageSettings.blog.description}
      boxed="var(--max-width-desktop)"
    >
      <NextSeo
        title={article.title}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`}
        description={article.summary || article.metaTitle}
        openGraph={{
          title: `${article.metaTitle}`,
          description: `${article.summary}`,
          type: `article`,
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`,
          images: [
            {
              url: article?.seo?.featured_image?.url || defaultImage.path,
              width: article?.seo?.featured_image?.width || defaultImage.width,
              height:
                article?.seo?.featured_image?.height || defaultImage.height,
              alt:
                article?.seo?.featured_image?.alternativeText ||
                defaultImage.altText,
            },
          ],
        }}
        noindex={article.published_at == null}
      />
      {article.featuredImage && (
        <CloudinaryImage
          public_id={article.featuredImage.public_id}
          alt={
            article?.seo?.featured_image?.alternativeText ||
            "Blog Post Default Image"
          }
          width={1920}
          height={1080}
          border={false}
        />
      )}
      <Panel padding={false} boxedSmall>
        <ArticleHeader>
          <h2>{article?.title}</h2>
          <div className="publish">
            Published:{` `}
            {article.published
              ? formatRelative(parseISO(article?.publishedAt), new Date())
              : `DRAFT`}
            {` `}| Time To Read:
            {false && timeToRead(countWords(article.content))}
          </div>
          {!isSessionLoading(session) && isAdmin(session) && (
            <div className="publish">
              <a
                href={`${process.env.NEXT_PUBLIC_STRAPI_URL}/admin/plugins/content-manager/collectionType/application::article.article/${article.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Edit
              </a>
            </div>
          )}
        </ArticleHeader>
        <ShareButtons
          url={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`}
          media={article?.seo?.featured_image?.url || defaultImage.path}
          title={article?.title}
        />
        <Padding padding={"5%"}>
          <Markdown source={article.content} />
        </Padding>
      </Panel>
      <Panel>
        <DiscussionEmbed
          shortname="itsmillertimedev"
          config={{
            url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`,
            identifier: article.id.toString(),
            title: article.title,
          }}
        />
      </Panel>
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const { slug } = context.query;

  // if the slug isn't found lets eject right away for a 404 error
  if (!slug) {
    return {
      notFound: true,
    };
  }

  // Fetch the data, the publication state depends on the user being an admin or not
  /*const { data } = await fetchData(ArticlesDocument, {
    where: { slug_eq: slug },
    publicationState: isAdmin(session, true)
      ? PublicationState.Preview
      : PublicationState.Live,
  });*/
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/post/${slug}`,
    {
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
      },
    }
  );
  const data = await response.json();

  if (data.statusCode === 200) {
    console.log(data);
    return {
      props: {
        article: data.data,
      },
    };
  } else {
    // If the article isn't found (0 length) we will just redirct to the landing page
    return {
      redirect: {
        destination: "/blog",
        permanent: false,
      },
    };
  }
};
export default BlogPost;
