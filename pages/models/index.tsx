import { NextPage } from "next";
import { NextSeo } from "next-seo";
import ImageDefault from "src/components/Images";
import PageLayout from "src/layout/PageLayout";
import styled from "styled-components";
import Card from "src/components/Card";
import { Grid } from "src/components/Grid";
import React, { useState } from "react";
import BuildTime from "src/components/BuildTime";
import { useModelsQuery } from "src/graphql/schema/models/models.query.generated";
import Loader from "src/components/Loader";
import Link from "next/link";
import { useRouter } from "next/router";

const title = `Models`;
const description = `Airplanes, Tanks, Cars, its all here`;

const ModelListing = styled.div`
  background: var(--color-white-80);
  display: grid;
  grid-template-columns: 1fr;
  margin-block-end: 3rem;

  @media screen and (min-width: 800px) {
    grid-template-columns: 25% auto;
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

  a {
    color: var(--color-white-100);
    font-size: 1em;
    text-decoration: none;
    box-shadow: var(--box-shadow-inset-0);
    transition: all 0.25s ease;

    :hover {
      box-shadow: var(--box-shadow-inset-1);
      color: var(--color-white-80);
      scale: 1.05;
    }
  }
`;

const InfoPanel = styled.div``;
const InfoContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 2rem;
  padding-block-start: 0;
  font-family: var(--font-block);

  p {
    margin: 0;
  }
`;

const ContentArea = styled.div``;

const List = styled.ul`
  padding-inline-start: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;

  li {
    margin-block-end: 10px;
    margin-inline-end: 10px;
    white-space: nowrap;
    display: flex;
  }

  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
`;

const MetaButton = styled.a`
  background: var(--color-red);
  padding: 10px;
  text-align: center;
  letter-spacing: 2px;
  cursor: pointer;
  border-radius: 20px;
  color: var(--color-white-100);
`;

const ModelsPageIndex: NextPage = () => {
  const router = useRouter();
  const [sort, setSort] = useState(`updatedAt:ASC`);
  const { data, isLoading, isSuccess, error } = useModelsQuery({
    sort: sort,
    where: router.query ? router.query : null,
  });

  if (error) {
    console.error(error);
  }

  console.log(router.query);

  return (
    <PageLayout title={title} description={description}>
      {isLoading && <Loader isLoading={isLoading} />}
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
        {isSuccess &&
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
                <ModelListingTitle>
                  <Link href={`/models/model/${model.slug}`}>
                    <a>{model.title}</a>
                  </Link>
                </ModelListingTitle>
                <InfoContent>
                  <p>Brand:</p>
                  <p>{model.manufacturer.name}</p>
                  <p>Kit Number:</p>
                  <p>{model.kit_number}</p>
                  <p>Year Released:</p>
                  <p>{model.year_released}</p>
                  <p>Scale:</p>
                  <p>{model.scale.name}</p>
                  <p>
                    Build Time:{` `}
                    <BuildTime clockifyProjectId={model?.clockify_project_id} />
                    {` `}Completed: {model?.completed ? `Yes` : `No`}
                  </p>
                </InfoContent>
                <List>
                  {model.model_tags.map((tag) => (
                    <li key={tag.slug}>
                      <Link
                        href={`/models?model_tag.slug=${tag.slug}`}
                        shallow
                        passHref
                      >
                        <MetaButton>{tag.name}</MetaButton>
                      </Link>
                    </li>
                  ))}
                </List>
              </InfoPanel>
            </ModelListing>
          ))}
      </ContentArea>
    </PageLayout>
  );
};

export default ModelsPageIndex;
