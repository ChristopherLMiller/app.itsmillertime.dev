import { Grid, GridItem } from "@components/Grid";
import { defaultImage, pageSettings } from "config";
import { GetServerSideProps, NextPage } from "next";
import { getSession, useSession } from "next-auth/client";
import { NextSeo } from "next-seo";
import Image from "next/image";
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
  const [session] = useSession();
  const router = useRouter();

  return (
    <PageLayout
      title={pageSettings.myAccount.title}
      description={pageSettings.myAccount.description}
    >
      <NextSeo
        nofollow={true}
        title={pageSettings.myAccount.title}
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
        <Image
          src={`https://www.gravatar.com/avatar/${emailHash}`}
          alt="Gravatar"
          width={80}
          height={80}
        />
        <GridItem start={2} end={3}>
          <Card heading="My Information" align="left">
            <InformationPanel>
              <Grid columns={2}>
                <GridItem>
                  <p>Username:</p>
                </GridItem>
                <GridItem>
                  <p>{session?.user?.username}</p>
                </GridItem>
                <GridItem>
                  <p>Email:</p>
                </GridItem>
                <GridItem>
                  <p>{session?.user?.email}</p>
                </GridItem>
                <GridItem>
                  <p>Account Confirmed:</p>
                </GridItem>
                <GridItem>
                  <input
                    type="checkbox"
                    checked={session?.user?.confirmed}
                    disabled
                  />
                </GridItem>
                <GridItem>
                  <p>Account Blocked:</p>
                </GridItem>
                <GridItem>
                  <p>
                    <input
                      type="checkbox"
                      checked={session?.user?.blocked}
                      disabled
                    />
                  </p>
                </GridItem>
                <GridItem>
                  <p>User Role:</p>
                </GridItem>
                <GridItem>
                  <p>{session?.user?.role?.name}</p>
                </GridItem>
              </Grid>
            </InformationPanel>
          </Card>
        </GridItem>
      </Grid>
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
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
};

export default MyAccountPage;
