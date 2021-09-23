import PageLayout from "src/layout/PageLayout";
import { SITE_DEFAULT_IMAGE_FILE, CLOUDINARY_CLOUD } from "config";
import { NextSeo } from "next-seo";
import { LoginForm } from "src/templates/forms";
import Link from "next/link";
import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/client";
import { ContentPane, SplitPane, TextPane } from "src/components/SplitPane";
import React from "react";

const title = `Login`;
const description = `Access your Account`;

const LoginPage: NextPage = () => (
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
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/account/login`,
      }}
    />
    <SplitPane>
      <TextPane>
        <h3>Login</h3>
        <p>Please enter your login details to gain access to the site</p>
        <p>
          <Link href="/account/forgot-password">
            <a>Forgot your password?</a>
          </Link>
        </p>
      </TextPane>
      <ContentPane>
        <LoginForm />
      </ContentPane>
    </SplitPane>
  </PageLayout>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  // if the session exists redirect to the home page as the user shouldn't be able to login again.
  if (session?.user) {
    context.res.writeHead(302, {
      Location: `/`,
      "Content-Type": `text/html; chaset=utf-8`,
    });
    context.res.end();
  }
  return {
    props: { session },
  };
};

export default LoginPage;
