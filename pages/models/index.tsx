import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { ArrayList } from 'src/components/arrayList';
import ImageDefault from 'src/components/Images';
import PageLayout from 'src/layout/PageLayout';
import { useModelsQuery } from 'src/utils/graphql/react-query/queries/Models';
import styled from 'styled-components';

const title = `Models`;
const description = `Airplanes, Tanks, Cars, its all here`;

const ModelListing = styled.div`
  background: var(--color-white-80);
  display: grid;
  grid-template-columns: 20% auto;
  margin-block-end: 3rem;
`;

const ModelListingTitle = styled.h4`
  background: var(--color-red-dark);
  margin: 0;
  color: var(--color-white-100);
  padding-inline-start: 2rem;
  padding-block: 1rem;
  font-family: var(--font-block);
  text-transform: uppercase;
  font-weight: 100;
  letter-spacing: 0.5px;
`;

const InfoPanel = styled.div``;
const InfoContent = styled.div`
  padding: 2rem;
  padding-block-start: 0;
`;

const ModelsPageIndex: NextPage = () => {
  // fetch models query here
  const router = useRouter();
  const { data, isLoading, error } = useModelsQuery({
    sort: `updatedAt:ASC`,
  });

  if (error) {
    console.log(error);
  }

  console.log(data);

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
      {!isLoading &&
        data.models.map((model) => (
          <ModelListing key={model.slug}>
            <ImageDefault
              public_id={model?.featured_image?.provider_metadata?.public_id}
              width={model?.featured_image?.width}
              height={model?.featured_image?.height}
              alt={model?.featured_image?.alternativeText}
              border={false}
            />
            <InfoPanel>
              <ModelListingTitle>{model.title}</ModelListingTitle>
              <InfoContent>
                <p>
                  Brand: {model.manufacturer.name}
                  {` `}
                  Kit Number: {model.kit_number}
                  {` `}
                  Year Released: {model.year_released}
                  {` `}
                  Scale: {model.scale.name}
                </p>
                <p>Completed: {model?.completed ? `Yes` : `No`}</p>
                <p>
                  Tags: <ArrayList array={model.model_tags} />
                </p>
              </InfoContent>
            </InfoPanel>
          </ModelListing>
        ))}
    </PageLayout>
  );
};

export default ModelsPageIndex;
