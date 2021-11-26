import PageLayout from "src/layout/PageLayout";
import { NextSeo } from "next-seo";
import { NextPage } from "next";
import { useSession } from "next-auth/client";
import Panel from "src/components/Panel";
import React from "react";
import { Grid } from "src/components/Grid";
import { defaultImage, pageSettings } from "config";
import { useRouter } from "next/router";

const IndexPage: NextPage = () => {
  const [session] = useSession();
  const router = useRouter();

  return (
    <PageLayout
      title={pageSettings.home.title}
      description={pageSettings.home.description}
    >
      <NextSeo
        title={pageSettings.home.title}
        description={pageSettings.home.description}
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
          <p>Hello, {session?.user ? session?.user?.username : `Guest`}</p>
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
