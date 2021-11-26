import { NextPage } from "next";
import { NextSeo } from "next-seo";
import PageLayout from "src/layout/PageLayout";
import React, { useState } from "react";
import { useModelsQuery } from "src/graphql/schema/models/models.query.generated";
import Loader from "src/components/Loader";
import { useRouter } from "next/router";
import ModelCard from "@/components/ModelCard";
import { Grid } from "@/components/Grid";
import { defaultImage, pageSettings } from "config";

const ModelsPageIndex: NextPage = () => {
  const router = useRouter();
  const [sort, setSort] = useState(`title:ASC`);
  const { data, isLoading, isSuccess, error } = useModelsQuery({
    sort: sort,
    where: router.query ? router.query : null,
  });

  if (error) {
    console.error(error);
  }

  console.log(router.query);

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
          url: pageSettings.models.url,
        }}
      />
      <Grid columns={2} min="450px" gap="30px">
        {isSuccess &&
          data.models?.map((model) => (
            // @ts-ignore
            <ModelCard key={model.slug} model={model} />
          ))}
      </Grid>
    </PageLayout>
  );
};

export default ModelsPageIndex;
