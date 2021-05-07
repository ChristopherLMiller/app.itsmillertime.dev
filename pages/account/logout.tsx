import { useAuth } from 'src/lib/AuthProvider';
import PageLayout from 'src/layout/PageLayout';
import Card from 'src/components/Card';
import { useEffect } from 'react';
import { SITE_DEFAULT_IMAGE_FILE, CLOUDINARY_CLOUD } from 'config';
import { NextSeo } from 'next-seo';
import { NextPage } from 'next';

const title = `Logout`;
const description = `Logout`;

const LogoutPage: NextPage = () => {
  const auth = useAuth();

  useEffect(() => {
    auth.methods.logout();
  });
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
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/account/logout`,
        }}
      />
      <Card heading="Un-oh">
        <p>Technically you should never see this!</p>
      </Card>
    </PageLayout>
  );
};

export default LogoutPage;
