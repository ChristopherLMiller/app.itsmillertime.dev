import { ImageContainer } from "@components/Images/styles";
import Markdown from "@components/Markdown";
import Panel from "@components/Panel";
import ShareButtons from "@components/ShareButtons";
import { pageSettings } from "@fixtures/json/pages";
import { useSession } from "@supabase/auth-helpers-react";
import { blurhashToBase64 } from "blurhash-base64";
import { APIEndpoint, defaultImage } from "config";
import { formatRelative, parseISO } from "date-fns";
import { DiscussionEmbed } from "disqus-react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import PageLayout from "src/layout/PageLayout";
import { fetchFromAPI } from "src/lib/fetch";
import { timeToRead } from "src/utils";
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
  const router = useRouter();
  const session = useSession();

  // Extrapolate out somethings to make it easier to use later
  const metaImage = article?.seo?.metaImage;
  console.log(metaImage);

  // Render it
  return (
    <PageLayout
      title={pageSettings.blog.title}
      description={pageSettings.blog.description}
      boxed="var(--max-width-desktop)"
    >
      <NextSeo
        title={article.seo.metaTitle}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`}
        description={article.seo.metaDescription}
        openGraph={{
          title: `${article.seo.metaTitle}`,
          description: `${article.seo.metaDescription}`,
          type: `article`,
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`,
          images: [
            {
              url: metaImage?.formats?.large?.url || defaultImage.path,
              width: metaImage?.formats?.large?.width || defaultImage.width,
              height: metaImage?.formats?.large?.height || defaultImage.height,
              alt: metaImage?.alternativeText || defaultImage.altText,
            },
          ],
        }}
        noindex={article.publishedAt == null}
      />
      {metaImage !== null && (
        <ImageContainer>
          <Image
            src={metaImage.formats.large.url}
            alt={metaImage.alternativeText}
            width={metaImage.formats.large.width}
            height={metaImage.formats.large.height}
            placeholder="blur"
            blurDataURL={blurhashToBase64(metaImage.blurhash)}
          />
        </ImageContainer>
      )}
      <ArticleHeader>
        <h2>{article.seo.metaTitle}</h2>
        <div className="publish">
          Published:{` `}
          {article.publishedAt
            ? formatRelative(parseISO(article?.publishedAt), new Date())
            : `DRAFT`}
          {` `}| Time To Read:
          {timeToRead(article.wordCount)}
        </div>
        {false && (
          <div className="publish">
            <a
              href={`${APIEndpoint.live}/admin/resources/Post/records/${article.id}/edit`}
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
        media={metaImage?.formats?.large?.url || defaultImage.path}
        title={article?.seo.metaTitle}
      />
      <Panel padding={true}>
        <Markdown source={article.content} />
      </Panel>

      <Panel>
        <DiscussionEmbed
          shortname="itsmillertimedev"
          config={{
            url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`,
            identifier: article.slug,
            title: article.seo.metaTitle,
          }}
        />
      </Panel>
    </PageLayout>
  );
};

interface Params extends ParsedUrlQuery {
  slug?: string;
}

function hasSlug(params: ParsedUrlQuery | undefined): params is Params {
  return params !== undefined && typeof params.slug === "string";
}

export const getStaticProps: GetStaticProps = async (context) => {
  // Shortcircuit out of here if a slug wasn't provided
  if (!hasSlug(context.params)) {
    return {
      notFound: true,
    };
  }

  // Build out the query parametets to fetch the slug
  const queryParameters = {
    filters: {
      slug: {
        $eq: context.params.slug,
      },
    },
    populate: {
      seo: {
        populate: {
          metaImage: {
            populate: true,
          },
        },
      },
    },
  };
  const { data } = await fetchFromAPI(`api/posts`, queryParameters);

  // An empty array means the slug wasn't found
  if (data.length) {
    return {
      props: {
        article: data[0],
      },
      revalidate: 10,
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await fetchFromAPI(`api/posts`);
  const paths = data.map((article: any) => {
    return { params: { slug: article.slug } };
  });

  return { paths, fallback: "blocking" };
};
export default BlogPost;
