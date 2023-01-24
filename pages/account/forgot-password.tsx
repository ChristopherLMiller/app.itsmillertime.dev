import { pageSettings } from "@fixtures/json/pages";
import { defaultImage } from "config";
import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useRouter } from "next/router";
import { ContentPane, SplitPane, TextPane } from "src/components/SplitPane";
import PageLayout from "src/layout/PageLayout";
import { ForgotPasswordForm } from "src/templates/forms";

const ForgotPasswordPage: NextPage = () => {
  const router = useRouter();

  return (
    <PageLayout
      title={pageSettings.forgotPassword.title}
      description={pageSettings.forgotPassword.description}
    >
      <NextSeo
        nofollow={true}
        title={pageSettings.forgotPassword.title}
        description={pageSettings.forgotPassword.description}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`}
        openGraph={{
          title: pageSettings.forgotPassword.title,
          description: pageSettings.forgotPassword.description,
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
          <h3>We Understand</h3>
          <p>
            Things happen, we get it. Enter your email and link will be sent to
            you to reset it.
          </p>
          <Link href="/account/login">Login instead?</Link>
        </TextPane>
        <ContentPane>
          <ForgotPasswordForm />
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

export default ForgotPasswordPage;
