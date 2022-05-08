import { Grid } from "@components/Grid";
import Table from "@components/Table";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";
import { Model, PublicationState } from "src/graphql/types";
import { getBuildTime } from "src/utils";
import makeDurationFriendly from "src/utils/makeDurationFriendly";
import { defaultImage, ImagesEndpoint } from "../../../config";
import { ModelImage, ModelItem, ModelName, TagList, variants } from "./styles";

interface iModelCard {
  model: Model;
}

const ModelCard: FunctionComponent<iModelCard> = ({ model }) => {
  const imageUrl = `${ImagesEndpoint}/${
    model?.SEO?.featured_image?.provider_metadata["public_id"] ||
    defaultImage.public_id
  }`;
  const imageWidth = 600;
  const imageHeight = 400;
  const imageAlt =
    model?.SEO?.featured_image?.alternativeText || defaultImage.altText;
  const publicationState = model.published_at
    ? PublicationState.Live
    : PublicationState.Preview;
  const [buildTime, setBuildTime] = useState<string>();

  useEffect(() => {
    async function fetchTime() {
      if (model?.clockify_project_id) {
        const duration = await getBuildTime(model?.clockify_project_id);
        setBuildTime(makeDurationFriendly(duration, false, true));
      } else {
        setBuildTime("None");
      }
    }

    fetchTime();
  }, [model]);

  const tags = model?.model_tags?.map((tag, index) => (
    <Link href={`/models?tag=${tag.slug}`} key={tag.slug} passHref>
      <span>
        <a>{tag.name}</a>
        {index !== model?.model_tags?.length - 1 && ", "}
      </span>
    </Link>
  ));

  return (
    <Link href={`/models/model/${model?.slug}`}>
      <ModelItem
        variants={variants}
        initial="initial"
        whileHover="hover"
        color={
          publicationState == PublicationState.Live
            ? `var(--color-red-intermediate)`
            : `var(--color-gold)`
        }
      >
        <ModelName
          background={
            publicationState == PublicationState.Live
              ? `var(--color-red-intermediate)`
              : `var(--color-gold)`
          }
        >
          <a>{model.title}</a>
        </ModelName>
        <Grid columns={2} padding={false} masonry>
          <ModelImage>
            <Image
              src={imageUrl}
              layout="intrinsic"
              width={imageWidth}
              height={imageHeight}
              alt={imageAlt}
              placeholder="blur"
              blurDataURL={defaultImage.blurred}
            />
          </ModelImage>
          <Table
            rows={[
              [
                "Brand",
                {
                  label: model?.manufacturer?.name,
                  url: `/models?manufacturer=${model?.manufacturer?.slug}`,
                },
              ],
              [
                "Scale",
                {
                  label: model?.scale?.name,
                  url: `/models?scale=${model?.scale?.slug}`,
                },
              ],
              ["Kit #", model?.kit_number],
              ["Released", model?.year_released],
              [
                "Completed",
                {
                  label: model?.completed ? "Yes" : "No",
                  url: `/models?completed=${model?.completed ? true : false}`,
                },
              ],
              ["Build Time", buildTime],
            ]}
          />
        </Grid>
        <TagList>Tags: {tags}</TagList>
      </ModelItem>
    </Link>
  );
};

export default ModelCard;
