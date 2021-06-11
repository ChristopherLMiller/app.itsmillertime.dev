import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Card from 'src/components/Card';
import PageLayout from 'src/layout/PageLayout';

const title = `Models`;
const description = `Airplanes, Tanks, Cars, its all here`;

const ModelsPageIndex: NextPage = () => {
  // fetch models query here
  const router = useRouter();
  console.log(router);

  return (
    <PageLayout title={title} description={description} padding={false}>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          type: `website`,
          images: [
            {
              alt: `Image of models`,
              width: 6000,
              height: 4000,
              url: `https://res.cloudinary.com/christopherleemiller/image/upload/v16209772701/clm-new/assets/default.png`,
            },
          ],
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/models`,
        }}
      />
      <Card heading="Models">
        <p>Models will appear here eventually</p>
      </Card>
    </PageLayout>
  );
};

export default ModelsPageIndex;
