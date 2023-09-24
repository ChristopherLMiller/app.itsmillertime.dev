import { Grid } from "@components/Grid";
import Panel from "@components/Panel";
import { pageSettings } from "@fixtures/json/pages";
import { defaultImage } from "config";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import PageLayout from "src/layout/PageLayout";
import { getUsername } from "src/utils/auth";

const IndexPage: NextPage = () => {
  const router = useRouter();
  const session = useSession();

  console.log(session);

  return (
    <PageLayout
      title={pageSettings.home.title}
      description={pageSettings.home.description}
      boxed={"var(--max-width-desktop)"}
    >
      <NextSeo
        title={pageSettings.home.title}
        description={pageSettings.home.description}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`}
        openGraph={{
          title: pageSettings.home.title,
          description: pageSettings.home.description,
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
      <Grid columns={2} gap="30px">
        <Panel>
          <p>Hello, {getUsername(session)}</p>
          <p>
            Please excuse the mess while I&apos;m remodeling. Many great things
            are in progress and will appear here as they are built.
          </p>

          <p>
            If you want to enjoy what I have to offer so far though go ahead and
            have a look around as I&apos;ve got many pieces in place, nothing
            compared to what I have to go yet though.
          </p>

          <p>
            If you find any errors or problems you can submit an issue on
            GitHub, or reach me at one of the other places in the sidebar on the
            left.
          </p>
        </Panel>
      </Grid>
    </PageLayout>
  );
};

export default IndexPage;
