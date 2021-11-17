import PageLayout from "src/layout/PageLayout";
import { SITE_DEFAULT_IMAGE_FILE, CLOUDINARY_CLOUD } from "config";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { NextPage } from "next";
import { ContentPane, SplitPane, TextPane } from "src/components/SplitPane";
import ResetPasswordForm from "src/templates/forms/resetPassword";

const title = `Reset Password`;
const description = `Recever your account`;

const ResetPasswordPage: NextPage = () => {
  const router = useRouter();
  const code = router.query[`code`] as string;

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
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/account/reset-password`,
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
