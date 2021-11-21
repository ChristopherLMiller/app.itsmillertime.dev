import { NextPage } from "next";
import { NextSeo } from "next-seo";
import PageLayout from "src/layout/PageLayout";
import React, { useState } from "react";
import { useModelsQuery } from "src/graphql/schema/models/models.query.generated";
import Loader from "src/components/Loader";
import { useRouter } from "next/router";
import ModelCard from "@/components/ModelCard";
import { Grid } from "@/components/Grid";

const title = `Models`;
const description = `Airplanes, Tanks, Cars, its all here`;

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
              alt: `Image of models`,
              width: 6000,
              height: 4000,
              url: `https://res.cloudinary.com/christopherleemiller/image/upload/v16209772701/clm-new/assets/default.png`,
            },
          ],
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/models`,
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
