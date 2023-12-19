import { Grid, GridItem } from "@components/Grid";
import { pageSettings } from "@fixtures/json/pages";
import {
  useSession,
  useSessionContext,
  useUser,
} from "@supabase/auth-helpers-react";
import { defaultImage } from "config";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import Card from "src/components/Card";
import PageLayout from "src/layout/PageLayout";
import styled from "styled-components";

const crypto = require("crypto");

const InformationPanel = styled.div`
  p {
    margin: 0;
  }
`;

interface iMyAccountPage {
  emailHash: string;
}

const MyAccountPage: NextPage<iMyAccountPage> = ({ emailHash }) => {
  const router = useRouter();
  const user = useUser();
  const session = useSession();
  const context = useSessionContext();

  return (
    <PageLayout
      title={pageSettings.myAccount.title}
      description={pageSettings.myAccount.description}
    >
      <NextSeo
        nofollow={true}
        title={pageSettings.myAccount.title}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`}
        description={pageSettings.myAccount.description}
        openGraph={{
          title: pageSettings.myAccount.title,
          description: pageSettings.myAccount.description,
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
      <Grid columns={3}>
        <img src={user?.user_metadata.avatar_url} alt="Profile Pic" />
        <GridItem start={2} end={3}>
          <Card heading="My Information" align="left">
            <InformationPanel>
              <Grid columns={2}>
                <GridItem>
                  <p>Username:</p>
                </GridItem>
                <GridItem>
                  <p>{user?.user_metadata.full_name}</p>
                </GridItem>
                <GridItem>
                  <p>Email:</p>
                </GridItem>
                <GridItem>
                  <p>{user?.email}</p>
                </GridItem>
                <GridItem>
                  <p>Account Confirmed:</p>
                </GridItem>
                <GridItem>
                  <input type="checkbox" checked={true} disabled />
                </GridItem>
                <GridItem>
                  <p>Account Blocked:</p>
                </GridItem>
                <GridItem>
                  <p>
                    <input type="checkbox" checked={false} disabled />
                  </p>
                </GridItem>
                <GridItem>
                  <p>User Role:</p>
                </GridItem>
                <GridItem>
                  <p>{user?.role}</p>
                </GridItem>
              </Grid>
            </InformationPanel>
          </Card>
        </GridItem>
      </Grid>
    </PageLayout>
  );
};

/*export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  const emailHash = crypto
    .createHash("md5")
    .update(session?.user?.email)
    .digest("hex");

  return {
    props: {
      emailHash,
    },
  };
};*/

export default MyAccountPage;
