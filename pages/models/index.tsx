import { Grid } from "@components/Grid";
import ModelCard from "@components/ModelCard";
import { defaultImage, pageSettings } from "config";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Loader from "src/components/Loader";
import { useModelsQuery } from "src/graphql/schema/models/models.query.generated";
import { PublicationState } from "src/graphql/types";
import PageLayout from "src/layout/PageLayout";
import { isAdmin } from "src/utils";

const ModelsPageIndex: NextPage = () => {
  const router = useRouter();
  const session = useSession();

  const [sort, setSort] = useState(`title:ASC`);
  const { data, isLoading, isSuccess, error } = useModelsQuery({
    sort: sort,
    where: router.query ? router.query : null,
    publicationState: isAdmin(session.data?.user)
      ? PublicationState.Preview
      : PublicationState.Live,
  });

  if (error) {
    console.error(error);
  }

  return (
    <PageLayout
      title={pageSettings.models.title}
      description={pageSettings.models.description}
    >
      {isLoading && <Loader isLoading={isLoading} />}
      <NextSeo
        title={pageSettings.models.title}
        description={pageSettings.models.description}
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
      <Grid columns={2} min="500px" gap="3rem">
        {isSuccess &&
          data.models?.map((model) => (
            // TODO: fix this, we gotta do some data type checking
            // @ts-ignore
            <ModelCard key={model.slug} model={model} />
          ))}
      </Grid>
    </PageLayout>
  );
};

export default ModelsPageIndex;
