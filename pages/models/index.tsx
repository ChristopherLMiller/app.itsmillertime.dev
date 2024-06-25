import Card from "@components/Card";
import { Grid } from "@components/Grid";
import ModelCard from "@components/ModelCard";
import { pageSettings } from "@fixtures/json/pages";
import { defaultImage } from "config";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import PageLayout from "src/layout/PageLayout";
import { fetchFromAPI } from "src/lib/fetch";
const qs = require("qs");

const ModelsPageIndex: NextPage = () => {
  // things we need for the page
  const router = useRouter();

  // variables relating to the page
  const [page, setPage] = useState(1);
  const [take, setTake] = useState(12);
  const skip = (page - 1) * take;

  const [sort, setSort] = useState(`title:ASC`);

  useEffect(() => {
    setPage(parseInt(router.query["page"] as string) || 1);
    setTake(parseInt(router.query["take"] as string) || 12);
  }, [router]);

  const { data, isSuccess, isLoading, error, isError } = useQuery({
    queryKey: ["models"],
    queryFn: async () => {
      const queryParameters = {
        publicationState: "preview",
        sort: [sort],
        pagination: {
          pageSize: take,
          page: page,
        },
        populate: {
          seo: {
            fields: ["metaTitle"],
            populate: {
              metaImage: {
                fields: ["url"],
              },
            },
          },
          modelKit: {
            fields: [
              "title",
              "scale",
              "kitNumber",
              "scalematesLink",
              "yearReleased",
            ],
            populate: {
              manufacturer: {
                fields: ["title", "slug"],
              },
              scale: {
                fields: ["title", "slug"],
              },
            },
          },
          modelTags: {
            fields: ["tag", "slug"],
          },
        },
      };

      return fetchFromAPI(`api/models`, queryParameters);
    },

    keepPreviousData: true,
  });

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
      {isError && (
        <Card heading="Models">
          <p>Holy crap its broken!</p>
        </Card>
      )}
      {isSuccess && (
        <Grid columns={2} gap="2rem">
          {data.data.map((model) => (
            <ModelCard key={model.id} model={model}></ModelCard>
          ))}
        </Grid>
      )}
    </PageLayout>
  );
};

export default ModelsPageIndex;
