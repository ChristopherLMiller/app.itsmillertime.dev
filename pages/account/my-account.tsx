import PageLayout from 'src/layout/PageLayout';
import { NextPage } from 'next';
import { Grid, GridItem } from 'src/components/Grid';
import Card from 'src/components/Card';
import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import { SITE_DEFAULT_IMAGE_FILE, CLOUDINARY_CLOUD } from 'config';
import { useSession } from 'next-auth/client';

const title = `My Account`;
const description = `Manage your account here`;

const InformationPanel = styled.div`
  p {
    margin: 0;
  }
`;

const MyAccount: NextPage = () => {
  const [session] = useSession();
  console.log(session);
  return (
    <PageLayout title={title} description={description}>
      <NextSeo
        nofollow={true}
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          type: `website`,
          images: [
            {
              alt: `Default Site Image`,
              width: 800,
              height: 600,
              url: `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/upload/w_800,h_600,q_auto/v1594740865/${SITE_DEFAULT_IMAGE_FILE}.jpg`,
            },
          ],
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/account/my-account`,
        }}
      />
      <Grid columns={3}>
        <img src={''} alt="Avatar picture of self" loading="lazy" />
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

export default MyAccount;
