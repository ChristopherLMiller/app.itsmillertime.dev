import { CLOUDINARY_CLOUD, SITE_DEFAULT_IMAGE_FILE } from "config";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { ForgotPasswordForm } from "src/templates/forms";
import PageLayout from "src/layout/PageLayout";
import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/client";
import { ContentPane, SplitPane, TextPane } from "src/components/SplitPane";

const title = `Forgot Password?`;
const description = `How could you forget your password?`;

const ForgotPasswordPage: NextPage = () => (
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
            url: `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/upload/w_800,h_600,q_auto,/v1594740865/${SITE_DEFAULT_IMAGE_FILE}.jpg`,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/account/forgot-password',`,
      }}
    />
    <SplitPane>
      <TextPane>
        <h3>We Understand</h3>
        <p>
          Things happen, we get it. Enter your email and link will be sent to
          you to reset it.
        </p>
        <Link href="/account/login">
          <a>Login instead?</a>
        </Link>
      </TextPane>
      <ContentPane>
        <ForgotPasswordForm />
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

export default ForgotPasswordPage;
