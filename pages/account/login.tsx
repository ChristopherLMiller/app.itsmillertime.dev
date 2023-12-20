import { pageSettings } from "@fixtures/json/pages";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeMinimal } from "@supabase/auth-ui-shared";
import { defaultImage } from "config";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useRouter } from "next/router";
import { ContentPane, SplitPane, TextPane } from "src/components/SplitPane";
import PageLayout from "src/layout/PageLayout";

const LoginPage: NextPage = () => {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const user = useUser();

  // If the user is authenticated already, redirect to the account page
  if (user) {
    return router.push("/account/my-account");
  }

  return (
    <PageLayout
      title={pageSettings.login.title}
      description={pageSettings.login.description}
    >
      <NextSeo
        nofollow={true}
        title={pageSettings.login.title}
        description={pageSettings.login.description}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`}
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
            <Link href="/account/forgot-password">Forgot your password?</Link>
          </p>
        </TextPane>
        <ContentPane>
          {!user && (
            <Auth
              redirectTo={`${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/callback`}
              appearance={{ theme: ThemeMinimal }}
              supabaseClient={supabaseClient}
              providers={["github", "discord"]}
              socialLayout="horizontal"
            />
          )}
        </ContentPane>
      </SplitPane>
    </PageLayout>
  );
};

/*export const getServerSideProps: GetServerSideProps = async (context) => {
  /*const session = await getSession(context);

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
  return {};
};*/

export default LoginPage;
