import PageLayout from "src/layout/PageLayout";
import Card from "src/components/Card";
import { Grid } from "src/components/Grid";
import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  SITE_DEFAULT_IMAGE_FILE,
  CLOUDINARY_CLOUD,
  CLOUDINARY_URL,
} from "config";
import { NextSeo } from "next-seo";
import { LoginForm, ForgotPasswordForm } from "src/components/forms";

const title = "Login";
const description = "Access your Account";

const LoginPane = styled(motion.div)`
  padding: 3% 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Resetpane = styled(motion.div)`
  padding: 3% 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const loginPaneVariants = {
  login: {
    opacity: 1,
  },
  reset: {
    opacity: 9,
  },
};

const TextPane = styled(motion.div)`
  display: none;
  align-items: center;
  position: absolute;
  width: 50%;
  left: 0;
  top: 0;
  background: var(--color-red-intermediate);
  height: 100%;
  padding: 3% 5%;

  @media (min-width: 807px) {
    display: flex;
  }

  p,
  h3,
  a {
    color: var(--color-white);
    font-weight: 100;
  }

  h3 {
    font-family: var(--font-block);
    font-size: var(--h2-responsive);
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 0;
  }
`;

const Splitter = styled.div`
  color: var(--color-red);
  text-transform: uppercase;
  font-weight: 600;

  @media (min-width: 807px) {
    display: none;
  }
`;

const PanelLink = styled.a`
  cursor: pointer;
  color: var(--color-white) !important;
  text-decoration: underline;
`;

const TextPaneVariants = {
  login: {
    transform: "translateX(100%)",
    transition: {
      duration: "0.25",
    },
  },
  reset: {
    transform: "translateX(0%)",
    transition: {
      duration: ".25",
    },
  },
};

const LoginPage = () => {
  const [paneState, setPaneState] = useState("login");

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
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/account/login`,
        }}
      />
      <Card padding={false}>
        <TextPane
          initial="login"
          animate={paneState}
          variants={TextPaneVariants}
        >
          {paneState === "login" && (
            <div>
              <h3>Login</h3>
              <p>Please enter your login details to gain access to the site</p>
              <p>
                <PanelLink
                  onClick={(event) => {
                    event.preventDefault();
                    setPaneState("reset");
                  }}
                >
                  Forgot your password?
                </PanelLink>
              </p>
            </div>
          )}
          {paneState === "reset" && (
            <div>
              <h3>Forgot your password?</h3>
              <p>
                No problem! Enter your email below and a password reset email
                will be sent to you.
              </p>
              <PanelLink
                onClick={(event) => {
                  event.preventDefault();
                  setPaneState("login");
                }}
              >
                Login instead?
              </PanelLink>
            </div>
          )}
        </TextPane>
        <Grid columns={2}>
          <LoginPane
            initial="login"
            variants={loginPaneVariants}
            animate={paneState}
          >
            <LoginForm />
          </LoginPane>
          <Splitter>Or</Splitter>
          <Resetpane>
            <ForgotPasswordForm />
          </Resetpane>
        </Grid>
      </Card>
    </PageLayout>
  );
};

export default LoginPage;
