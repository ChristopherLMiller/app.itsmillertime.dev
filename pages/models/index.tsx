import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { ArrayList } from 'src/components/arrayList';
import ImageDefault from 'src/components/Images';
import PageLayout from 'src/layout/PageLayout';
import styled from 'styled-components';
import Card from 'src/components/Card';
import { Grid } from 'src/components/Grid';
import { useState } from 'react';
import BuildTime from 'src/components/BuildTime';
import { useModelsQuery } from 'src/graphql/schema/models/models.query.generated';
import Loader from 'src/components/Loader';
const title = `Models`;
const description = `Airplanes, Tanks, Cars, its all here`;

const ModelListing = styled.div`
  background: var(--color-white-80);
  display: grid;
  grid-template-columns: 1fr;
  margin-block-end: 3rem;

  @media screen and (min-width: 800px) {
    grid-template-columns: 200px auto;
  }
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
  font-family: var(--font-block);

  p {
    margin: 0;
  }
`;

const ContentArea = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  @media (min-width: 900px) {
    grid-template-columns: 15% auto;
  }
`;

const ModelsPageIndex: NextPage = () => {
  // fetch models query here
  const router = useRouter();
  const [sort, setSort] = useState(`updatedAt:ASC`);
  const { data, isLoading, isFetching, error } = useModelsQuery({
    sort: sort,
  });

  if (error) {
    console.log(error);
  }

  console.log(router);

  return (
    <PageLayout title={title} description={description} padding={false}>
      {isFetching && <Loader isLoading={isFetching} />}
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
      <ContentArea>
        <div>
          <Card heading="Filters">
            <p>
              <Grid cols={2} gap="10px">
                <label>Sort</label>
                <select name="sort" onChange={(e) => setSort(e.target.value)}>
                  <option value="title:ASC">Name A-Z</option>
                  <option value="title:DESC">Name Z-A</option>
                  <option value="updatedAt:ASC">Updated Recently</option>
                  <option value="updatedAt:DESC">Updated Oldest</option>
                </select>
                <label htmlFor="scale">Scale</label>
                <select name="scale">
                  <option>All</option>
                  <option>1/12</option>
                  <option>1/25</option>
                </select>
                <label>Brand</label>
                <select name="brand">
                  <option>Tamiya</option>
                </select>
              </Grid>
            </p>
          </Card>
        </div>
        <div>
          {!isLoading &&
            data.models.map((model) => (
              <ModelListing key={model.slug}>
                <ImageDefault
                  public_id={
                    model?.SEO.featured_image?.provider_metadata?.public_id
                  }
                  width={model?.SEO.featured_image?.width}
                  height={model?.SEO.featured_image?.height}
                  alt={model?.SEO.featured_image?.alternativeText}
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
                    <p>
                      Build Time:{` `}
                      <BuildTime
                        clockifyProjectId={model?.clockify_project_id}
                      />
                      {` `}Completed: {model?.completed ? `Yes` : `No`}
                    </p>
                    <p>
                      Tags: <ArrayList array={model.model_tags} />
                    </p>
                  </InfoContent>
                </InfoPanel>
              </ModelListing>
            ))}
        </div>
      </ContentArea>
    </PageLayout>
  );
};

export default ModelsPageIndex;
