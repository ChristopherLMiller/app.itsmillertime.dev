import { useAuth } from "src/lib/AuthProvider";
import PageLayout from "src/layout/PageLayout";
import { NextPage } from "next";
import { Grid, GridItem } from "src/components/Grid";
import Card from "src/components/Card";
import styled from "styled-components";

const InformationPanel = styled.div`
  p {
    margin: 0;
  }
`;
const MyAccount: NextPage = () => {
  const auth = useAuth();

  return (
    <PageLayout
      meta={{
        title: "My Account",
        description: "Manage your account",
        useSEO: false,
      }}
    >
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
