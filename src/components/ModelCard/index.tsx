import { ImageContainer } from "@components/Images/styles";
import Table from "@components/Table";
import { defaultImage } from "config";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { useBuildTime } from "src/lib/hooks/useBuildTime";
import { Grid } from "..";
import { ModelItem, ModelName, TagList, variants } from "./styles";

interface iModel {
  model: any;
}
const ModelCard: FunctionComponent<iModel> = ({ model }) => {
  const {
    projectId,
    seo,
    publishedAt,
    buildStatus: modelBuildStatus,
    modelKit,
    modelTags,
  } = model;
  const { buildTime } = useBuildTime(projectId);
  const imageUrl = seo?.metaImage?.url || defaultImage.path;
  const imageAlt = seo?.metaImage?.caption;
  const publicationState = publishedAt ? "LIVE" : "PREVIEW";
  const buildStatus =
    modelBuildStatus === "INPROGRESS" ? "BUILDING" : modelBuildStatus;

  const tags = modelTags.map((tagItem, index) => {
    const { slug, tag } = tagItem;

    return (
      <Link href={`/models?tag=${slug}`} key={tagItem?.id} passHref>
        <span>
          {tag}
          {index !== modelTags.length - 1 && ", "}
        </span>
      </Link>
    );
  });

  return (
    <Link href={`/models/model/${model?.slug}`}>
      <ModelItem
        variants={variants}
        initial="initial"
        whileHover="hover"
        color={
          publicationState == "LIVE"
            ? `var(--color-red-intermediate)`
            : `var(--color-gold)`
        }
      >
        <ModelName
          background={
            publicationState == "LIVE"
              ? `var(--color-red-intermediate)`
              : `var(--color-gold)`
          }
        >
          {model.title}
        </ModelName>
        <Grid columns={2} padding={false} masonry>
          <ImageContainer>
            <Image
              src={imageUrl}
              width={300}
              height={200}
              alt={imageAlt || "Alt Text"}
            />
          </ImageContainer>
          <Table
            rows={[
              [
                "Brand",
                {
                  label: modelKit?.manufacturer?.title || "",
                  url: `/models?manufacturer=${modelKit?.manufacturer?.slug}`,
                },
              ],
              [
                "Scale",
                {
                  label: modelKit?.scale?.title || "",
                  url: `/models?scale=${modelKit?.scale?.slug}`,
                },
              ],
              ["Kit #", modelKit.kitNumber || ""],
              ["Released", modelKit?.yearReleased || ""],
              [
                "Status",
                {
                  label: buildStatus,
                  url: `/models?buildStatus=${model?.completed ? true : false}`,
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
