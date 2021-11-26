import PageLayout from "src/layout/PageLayout";
import { defaultImage, pageSettings } from "config";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { NextPage } from "next";
import { ContentPane, SplitPane, TextPane } from "src/components/SplitPane";
import ResetPasswordForm from "src/templates/forms/resetPassword";

const ResetPasswordPage: NextPage = () => {
  const router = useRouter();
  // TODO: The code and resetting need redone
  const code = router.query[`code`] as string;

  return (
    <PageLayout
      title={pageSettings.resetPassword.title}
      description={pageSettings.resetPassword.description}
    >
      <NextSeo
        nofollow={true}
        title={pageSettings.resetPassword.title}
        description={pageSettings.resetPassword.description}
        openGraph={{
          title: pageSettings.resetPassword.title,
          description: pageSettings.resetPassword.description,
          type: `website`,
          images: [
            {
              alt: defaultImage.altText,
              width: defaultImage.width,
              height: defaultImage.height,
              url: defaultImage.path,
            },
          ],
          url: pageSettings.resetPassword.url,
        }}
      />
      <SplitPane>
        <TextPane>
          <h3>Password Requirements</h3>
          <p>
            While I have no requirements for password complexity or length
            it&apos;s on you if your account gets hacked.
          </p>
        </TextPane>
        <ContentPane>
          <ResetPasswordForm />
        </ContentPane>
      </SplitPane>
    </PageLayout>
  );
};

export default ResetPasswordPage;
