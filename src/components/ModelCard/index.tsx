import CloudinaryImage from "@components/Images/CloudinaryImage";
import Table from "@components/Table";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Model, PublicationState } from "src/graphql/types";
import { useBuildTime } from "src/lib/hooks/useBuildTime";
import { Grid } from "..";
import { ModelImage, ModelItem, ModelName, TagList, variants } from "./styles";

interface iModelCard {
  model: Model;
}

const ModelCard: FunctionComponent<iModelCard> = ({ model }) => {
  const { buildTime } = useBuildTime(model?.clockify_project_id);
  const imageUrl = model?.SEO?.featured_image?.provider_metadata["public_id"];
  const imageAlt = model?.SEO?.featured_image?.alternativeText;
  const numTags = model?.model_tags?.length || 0;
  const publicationState = model.published_at
    ? PublicationState.Live
    : PublicationState.Preview;

  const tags = model?.model_tags?.map((tag, index) => (
    <Link href={`/models?tag=${tag?.slug}`} key={tag?.slug} passHref>
      <span>
        <a>{tag?.name}</a>
        {index !== numTags - 1 && ", "}
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
            <CloudinaryImage
              public_id={imageUrl}
              width={600}
              height={400}
              alt={imageAlt}
              border={false}
            />
          </ModelImage>
          <Table
            rows={[
              [
                "Brand",
                {
                  label: model?.manufacturer?.name || "",
                  url: `/models?manufacturer=${model?.manufacturer?.slug}`,
                },
              ],
              [
                "Scale",
                {
                  label: model?.scale?.name || "",
                  url: `/models?scale=${model?.scale?.slug}`,
                },
              ],
              ["Kit #", model?.kit_number || ""],
              ["Released", model?.year_released || ""],
              [
                "Completed",
                {
                  label: model?.completed ? "Yes" : "No",
                  url: `/models?completed=${model?.completed ? true : false}`,
                },
              ],
              ["Build Time", buildTime || ""],
            ]}
          />
        </Grid>
        <TagList>Tags: {tags}</TagList>
      </ModelItem>
    </Link>
  );
};

export default ModelCard;
