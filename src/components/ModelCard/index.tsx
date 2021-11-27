import { FunctionComponent, useEffect, useState } from "react";
import { Model } from "src/graphql/types";
import { ModelItem, ModelName, ModelImage, TagList, variants } from "./styles";
import { Grid } from "@/components/Grid";
import Image from "next/image";
import { defaultImage } from "../../../config";
import Link from "next/link";
import BuildTime from "../BuildTime";
import { Table } from "src/components";
import { getBuildTime, makeDurationFriendly } from "src/utils";

interface iModelCard {
  model: Model;
}

const ModelCard: FunctionComponent<iModelCard> = ({ model }) => {
  const imageUrl =
    model?.SEO?.featured_image?.provider_metadata["public_id"] ||
    defaultImage.public_id;
  const imageWidth = model?.SEO?.featured_image?.width || defaultImage.width;
  const imageHeight = model?.SEO?.featured_image?.height || defaultImage.height;
  const imageAlt =
    model?.SEO?.featured_image?.alternativeText || defaultImage.altText;
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
  }, [model?.clockify_project_id]);

  const tags = model?.model_tags?.map((tag, index) => (
    <Link href={`/models?tag=${tag.slug}`} key={tag.id} passHref>
      <span>
        <a>{tag.name}</a>
        {index !== model?.model_tags?.length - 1 && ", "}
      </span>
    </Link>
  ));

  return (
    <ModelItem variants={variants} initial="initial" whileHover="hover">
      <ModelName>
        <Link href={`/models/model/${model?.slug}`}>
          <a>{model.title}</a>
        </Link>
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
            ["Kit Number", model?.kit_number],
            ["Year Released", model?.year_released],
            ["Build Time", buildTime],
          ]}
        />
      </Grid>
      <TagList>Tags: {tags}</TagList>
    </ModelItem>
  );
};

export default ModelCard;
