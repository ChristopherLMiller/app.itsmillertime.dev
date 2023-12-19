import Card from "@components/Card";
import { pageSettings } from "@fixtures/json/pages";
import { useSession } from "@supabase/auth-helpers-react";
import { defaultImage } from "config";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PageLayout from "src/layout/PageLayout";

const ModelsPageIndex: NextPage = () => {
  // things we need for the page
  const router = useRouter();
  const session = useSession();

  // variables relating to the page
  const [page, setPage] = useState(1);
  const [take, setTake] = useState(12);
  const skip = (page - 1) * take;

  const [sort, setSort] = useState(`title:ASC`);

  useEffect(() => {
    setPage(parseInt(router.query["page"] as string) || 1);
    setTake(parseInt(router.query["take"] as string) || 12);
  }, [router]);

  // query for the data
  /* const { data, isSuccess, isLoading, error } = useModelsMinimalQuery(
    {
      sort: sort,
      where: null, //router.query ? router.query : null,
      publicationState: isAdmin(session)
        ? PublicationState.Preview
        : PublicationState.Live,
      limit: take,
      start: skip,
    },
    { keepPreviousData: true, enabled: false },
  );*/

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
      <Card heading="Models">
        <p>The models page is currently broken. Check back later</p>
      </Card>
    </PageLayout>
  );
};

export default ModelsPageIndex;
