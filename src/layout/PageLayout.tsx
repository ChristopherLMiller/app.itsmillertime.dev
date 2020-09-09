import Header from "src/layout/elements/Header";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FunctionComponent, Fragment } from "react";
import Footer from "./elements/Footer";
import ScrollTop from "src/components/ScrollTop";
import { NextSeo, ArticleJsonLd } from "next-seo";
import { useRouter } from "next/router";
import { SITE_DEFAULT_IMAGE_FILE } from "config";

const Main = styled(motion.main)`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2%;
`;

const Content = styled(motion.div)`
  overflow-x: hidden;
`;

const contentVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

interface iPagelayout {
  meta: {
    title: string;
    description: string;
    useSEO: boolean;
    path?: string;
    image?: string;
  };
}

const PageLayout: FunctionComponent<iPagelayout> = ({ meta, children }) => {
  const router = useRouter();

  return (
    <Content variants={contentVariants}>
      {meta.useSEO && (
        <Fragment>
          <NextSeo
            title={meta.title}
            canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${router.pathname}`}
            description={meta.description}
            openGraph={{
              title: meta.title,
              description: meta.description,
              type: "website",
              images: [
                {
                  alt: meta.title,
                  url: `${
                    meta.image ? meta.image : SITE_DEFAULT_IMAGE_FILE
                  }.jpg`,
                },
              ],
              url: router.pathname,
            }}
          />
          <ArticleJsonLd
            url={`${process.env.NEXT_PUBLIC_SITE_URL}${router.pathname}`}
            title={meta.title}
            images={[
              `${meta.image ? meta.image : SITE_DEFAULT_IMAGE_FILE}.jpg`,
            ]}
            datePublished=""
            dateModified=""
            authorName=""
            publisherName=""
            publisherLogo=""
            description={meta.description}
          />
        </Fragment>
      )}
      <Header meta={meta} />
      <Main>{children}</Main>
      <Footer />
      <ScrollTop />
    </Content>
  );
};

export default PageLayout;
