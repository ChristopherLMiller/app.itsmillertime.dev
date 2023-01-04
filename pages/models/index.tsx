import Card from "@components/Card";
import { Grid } from "@components/Grid";
import Loader from "@components/Loader";
import ModelCard from "@components/ModelCard";
import { pageSettings } from "@fixtures/json/pages";
import { defaultImage } from "config";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useModelsMinimalQuery } from "src/graphql/schema/models/modelsMinimal.query.generated";
import { Model, PublicationState } from "src/graphql/types";
import PageLayout from "src/layout/PageLayout";
import { isAdmin } from "src/utils";

const ModelsPageIndex: NextPage = () => {
  // things we need for the page
  const router = useRouter();
  const session = useSession();

  // variables relating to the page
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const start = (page - 1) * limit;

  const [sort, setSort] = useState(`title:ASC`);

  useEffect(() => {
    setPage(parseInt(router.query["page"] as string) || 1);
    setLimit(parseInt(router.query["limit"] as string) || 12);
  }, [router]);

  // query for the data
  const { data, isSuccess, isLoading, error } = useModelsMinimalQuery(
    {
      sort: sort,
      where: null, //router.query ? router.query : null,
      publicationState: isAdmin(session)
        ? PublicationState.Preview
        : PublicationState.Live,
      limit,
      start,
    },
    { keepPreviousData: true }
  );

  if (error) {
    console.error(error);
  }

  return (
    <PageLayout
      title={pageSettings.models.title}
      description={pageSettings.models.description}
      boxed="var(--max-width-wide)"
    >
      <NextSeo
        title={pageSettings.models.title}
        description={pageSettings.models.description}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`}
        openGraph={{
          title: pageSettings.models.title,
          description: pageSettings.models.description,
          type: `website`,
          images: [
            {
              alt: defaultImage.altText,
              width: defaultImage.width,
              height: defaultImage.height,
              url: defaultImage.path,
            },
          ],
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`,
        }}
      />
      {isLoading && <Loader isLoading={isLoading} />}

      <Grid columns={2} min="500px" gap="3rem">
        {isSuccess &&
          data.models?.map((model) => (
            <ModelCard key={model?.slug} model={model as Model} />
          ))}
        <Card>This page is broken ATM</Card>
      </Grid>
    </PageLayout>
  );
};

export default ModelsPageIndex;
