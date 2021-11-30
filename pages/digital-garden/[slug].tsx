import Card from "@components/Card";
import Markdown from "@components/Markdown";
import { cloudinary, pageSettings } from "config";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { Gardens } from "src/graphql/types";
import PageLayout from "src/layout/PageLayout";

interface iDigitalGarden {
  garden: Gardens;
}

const DigitalGardenIndexPage: NextPage<iDigitalGarden> = ({ garden }) => {
  const router = useRouter();

  return (
    <PageLayout
      title={pageSettings.digitalGarden.title}
      description={pageSettings.digitalGarden.description}
    >
      <NextSeo
        title={pageSettings.digitalGarden.title}
        description={pageSettings.digitalGarden.description}
        openGraph={{
          title: pageSettings.digitalGarden.title,
          description: pageSettings.digitalGarden.description,
          type: `website`,
          images: [
            {
              alt: `Digital Garden`,
              width: 800,
              height: 600,
              url: `https://res.cloudinary.com//${cloudinary.cloudName}/image/upload/w_800,h_600,q_auto,f_auto/v1594740865/clm-new/assets/digital-garden.jpg`,
            },
          ],
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`,
        }}
      />
      <Card heading={garden.title}>
        <Markdown source={garden.contents} />
      </Card>
    </PageLayout>
  );
};
export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params["slug"];
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/gardens?slug_eq=${slug}`
  );
  const data = await response.json();

  if (data.length) {
    return {
      props: {
        garden: data[0],
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/gardens`);
    const data = await res.json();

    const paths = data.map((item) => ({
      params: { slug: item.slug },
    }));

    return { paths, fallback: false };
  } catch (error) {
    // shouldn't ever happen but never know, if so fall back to SSR
    console.log(error);
    return { paths: [], fallback: "blocking" };
  }
};

export default DigitalGardenIndexPage;
