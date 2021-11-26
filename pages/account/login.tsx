import PageLayout from "src/layout/PageLayout";
import { defaultImage, pageSettings } from "config";
import { NextSeo } from "next-seo";
import { LoginForm } from "src/templates/forms";
import Link from "next/link";
import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/client";
import { ContentPane, SplitPane, TextPane } from "src/components/SplitPane";
import React from "react";
import { useRouter } from "next/router";

const LoginPage: NextPage = () => {
  const router = useRouter();

  return (
    <PageLayout
      title={pageSettings.login.title}
      description={pageSettings.login.description}
    >
      <NextSeo
        nofollow={true}
        title={pageSettings.login.title}
        description={pageSettings.login.description}
        openGraph={{
          title: pageSettings.login.title,
          description: pageSettings.login.description,
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
};

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
