import { FunctionComponent } from "react";
import { Model } from "src/graphql/types";
import {
  ModelItem,
  ModelName,
  ModelImage,
  ModelDetails,
  TagList,
  variants,
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
  const imageAlt =
    model?.SEO?.featured_image?.alternativeText || defaultImage.altText;

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
      <Grid columns={2} padding={false}>
        <ModelImage>
          <Image
            src={imageUrl}
            layout="intrinsic"
            width={imageWidth}
            height={imageHeight}
            alt={imageAlt}
            placeholder="blur"
            blurDataURL={`data:image/jpeg;base64,${defaultImage.blurred}`}
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
