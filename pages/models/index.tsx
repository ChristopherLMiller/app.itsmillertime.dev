import { Grid } from "@components/Grid";
import ModelCard from "@components/ModelCard";
import Paginator from "@components/Paginator";
import { defaultImage, pageSettings } from "config";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useModelsMinimalQuery } from "src/graphql/schema/models/modelsMinimal.query.generated";
import { PublicationState } from "src/graphql/types";
import PageLayout from "src/layout/PageLayout";
import { isAdmin } from "src/utils";

const ModelsPageIndex: NextPage = () => {
  const router = useRouter();
  const session = useSession();
  const [page, setPage] = useState(
    parseInt(router.query["page"] as string) || 1
  );
  const [limit, setLimit] = useState(
    parseInt(router.query["limit"] as string) || 12
  );
  const start = (page - 1) * limit;

  const [sort, setSort] = useState(`title:ASC`);
  const { data, isSuccess, error } = useModelsMinimalQuery({
    sort: sort,
    where: null, //router.query ? router.query : null,
    publicationState: isAdmin(session)
      ? PublicationState.Preview
      : PublicationState.Live,
    limit,
    start,
  });

  if (error) {
    console.error(error);
  }

  return (
    <PageLayout
      title={pageSettings.models.title}
      description={pageSettings.models.description}
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
      <Paginator
        page={page}
        setPage={setPage}
        totalRecords={data?.modelsConnection?.aggregate?.count}
        perPage={limit}
      />
      <Grid columns={2} min="500px" gap="3rem">
        {isSuccess &&
          data.models?.map((model) => (
            // TODO: fix this, we gotta do some data type checking
            // @ts-ignore
            <ModelCard key={model.slug} model={model} />
          ))}
      </Grid>
      <Paginator
        page={page}
        setPage={setPage}
        totalRecords={data?.modelsConnection?.aggregate?.count}
        perPage={limit}
      />
    </PageLayout>
  );
};

export default ModelsPageIndex;
