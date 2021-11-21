import { FunctionComponent } from "react";
import { Model } from "src/graphql/types";
import {
  ModelItem,
  ModelName,
  ModelImage,
  ModelDetails,
  TagList,
} from "./styles";
import { Grid } from "@/components/Grid";
import Image from "next/image";
import { defaultImage } from "../../../config";
import Link from "next/link";
import BuildTime from "../BuildTime";

interface iModelCard {
  model: Model;
}

const ModelCard: FunctionComponent<iModelCard> = ({ model }) => {
  const imageUrl =
    model?.SEO?.featured_image?.provider_metadata["public_id"] ||
    defaultImage.public_id;
  const imageWidth = model?.SEO?.featured_image?.width || defaultImage.width;
  const imageHeight = model?.SEO?.featured_image?.height || defaultImage.height;

  const tags = model?.model_tags?.map((tag, index) => (
    <Link href={`/models?tag=${tag.slug}`} key={tag.id}>
      <span>
        <a>{tag.name}</a>
        {index !== model?.model_tags?.length - 1 && ", "}
      </span>
    </Link>
  ));

  return (
    <ModelItem>
      <ModelName>{model.title}</ModelName>
      <Grid columns={2} padding={false}>
        <ModelImage>
          <Image
            src={imageUrl}
            layout="intrinsic"
            width={imageWidth}
            height={imageHeight}
          />
        </ModelImage>
        <ModelDetails>
          <tr>
            <td>Brand</td>
            <td>
              <Link
                href={`/models?manufacturer=${model?.manufacturer?.slug}`}
                shallow
              >
                <a>{model?.manufacturer?.name}</a>
              </Link>
            </td>
          </tr>
          <tr>
            <td>Scale</td>
            <td>
              <Link href={`/models?scale=${model?.scale?.slug}`} shallow>
                <a>{model?.scale?.name}</a>
              </Link>
            </td>
          </tr>
          <tr>
            <td>Kit Number</td>
            <td>{model?.kit_number}</td>
          </tr>
          <tr>
            <td>Year Released</td>
            <td>{model?.year_released}</td>
          </tr>
          <tr>
            <td>Build Time:</td>
            <td>
              <BuildTime clockifyProjectId={model?.clockify_project_id} />
            </td>
          </tr>
        </ModelDetails>
      </Grid>
      <TagList>Tags: {tags}</TagList>
    </ModelItem>
  );
};

export default ModelCard;
