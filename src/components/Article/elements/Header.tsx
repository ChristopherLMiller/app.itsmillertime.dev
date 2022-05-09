import { ImageLayouts } from "@components/Images";
import CloudinaryImage from "@components/Images/CloudinaryImage";
import { formatRelative, parseISO } from "date-fns";
import { FunctionComponent } from "react";
import { UploadFile } from "src/graphql/types";
import styled from "styled-components";

const StyledArticleHead = styled.div`
  font-weight: 100;
`;

const StyledArticleHeaderInfo = styled.div`
  background: var(--color-red-intermediate);
  padding: 20px 40px;
  margin: 0;
  color: var(--color-grey-light);
`;

const StyledHeading = styled.h2`
  font-size: 4rem;
  margin: 5px 0;
  font-weight: 200;
`;

const StyledPublishDate = styled.p`
  margin: 0;
  font-size: 1.5em;
  text-transform: uppercase;
  font-weight: 100;
`;

interface iArticleHead {
  featuredImage?: UploadFile;
  publishedDate: string;
  timeToRead: string;
  title: string;
}

const ArticleHead: FunctionComponent<iArticleHead> = ({
  featuredImage,
  publishedDate,
  timeToRead,
  title,
}) => {
  return (
    <StyledArticleHead>
      {featuredImage !== null && (
        <CloudinaryImage
          public_id={featuredImage.provider_metadata[`public_id`]}
          width={1920}
          height={1080}
          alt={featuredImage.alternativeText}
          layout={ImageLayouts.responsive}
        />
      )}
      <StyledArticleHeaderInfo>
        <StyledPublishDate>
          Published: {formatRelative(parseISO(publishedDate), new Date())} |
          Time To Read: {timeToRead}
        </StyledPublishDate>
        <StyledHeading>{title}</StyledHeading>
      </StyledArticleHeaderInfo>
    </StyledArticleHead>
  );
};
export default ArticleHead;
