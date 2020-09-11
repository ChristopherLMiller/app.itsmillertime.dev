import { useAuth } from "src/lib/AuthProvider";
import PageLayout from "src/layout/PageLayout";
import { NextPage } from "next";
import { Grid, GridItem } from "src/components/Grid";
import Card from "src/components/Card";
import styled from "styled-components";
import { NextSeo } from "next-seo";
import {
  SITE_DEFAULT_IMAGE_FILE,
  CLOUDINARY_CLOUD,
  CLOUDINARY_URL,
} from "config";

const title = "My Account";
const description = "Manage your account here";

const InformationPanel = styled.div`
  p {
    margin: 0;
  }
`;

const MyAccount: NextPage = () => {
  const auth = useAuth();

  return (
    <PageLayout title={title} description={description}>
      <NextSeo
        nofollow={true}
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          type: "website",
          images: [
            {
              alt: "Default Site Image",
              width: 800,
              height: 600,
              url: `${CLOUDINARY_URL}/${CLOUDINARY_CLOUD}/image/upload/w_800,h_600,q_auto/v1594740865/${SITE_DEFAULT_IMAGE_FILE}.jpg`,
            },
          ],
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/account/my-account`,
        }}
      />
      <Grid columns={3}>
        <img src={auth.methods.getAvatar()} alt="Avatar picture of self" />
        <GridItem start={2} end={3}>
          <Card heading="My Information" align="left">
            <InformationPanel>
              <Grid columns={2}>
                <GridItem>
                  <p>Username:</p>
                </GridItem>
                <GridItem>
                  <p>{auth.methods.getUsername()}</p>
                </GridItem>
                <GridItem>
                  <p>Email:</p>
                </GridItem>
                <GridItem>
                  <p>{auth.methods.getEmail()}</p>
                </GridItem>
                <GridItem>
                  <p>Birthdate: </p>
                </GridItem>
                <GridItem>
                  <p>{auth.methods.getBirthdate()}</p>
                </GridItem>
                <GridItem>
                  <p>Account Confirmed:</p>
                </GridItem>
                <GridItem>
                  <input
                    type="checkbox"
                    checked={auth.methods.isAccountConfirmed()}
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
                      checked={auth.methods.isAccountBlocked()}
                      disabled
                    />
                  </p>
                </GridItem>
                <GridItem>
                  <p>User Role:</p>
                </GridItem>
                <GridItem>
                  <p>{auth.methods.getRole()}</p>
                </GridItem>
              </Grid>
            </InformationPanel>
          </Card>
        </GridItem>
      </Grid>
      <div>
        <p>
          <button onClick={() => auth.methods.logout()}>Logout</button>
        </p>
      </div>
    </PageLayout>
  );
};

export default MyAccount;
