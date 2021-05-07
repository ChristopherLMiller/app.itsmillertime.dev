import { FunctionComponent } from 'react';
import { iUploadFile } from 'src/utils/graphql/types/uploadFile';
import styled from 'styled-components';
import Image from 'src/components/Images';
import { formatRelative, parseISO } from 'date-fns';

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
  featuredImage?: iUploadFile;
  publishedDate: string;
  timeToRead: string;
  title: string;
}

const ArticleHead: FunctionComponent<iArticleHead> = ({
  featuredImage,
  publishedDate,
  timeToRead,
  title,
}) => (
  <StyledArticleHead>
    {featuredImage !== null && (
      <Image
        public_id={`${featuredImage.provider_metadata[`public_id`]}`}
        width={featuredImage.width}
        height={featuredImage.height}
        alt={featuredImage.alternativeText}
      />
    )}
    <StyledArticleHeaderInfo>
      <StyledPublishDate>
        Published: {formatRelative(parseISO(publishedDate), new Date())} | Time
        To Read: {timeToRead}
      </StyledPublishDate>
      <StyledHeading>{title}</StyledHeading>
    </StyledArticleHeaderInfo>
  </StyledArticleHead>
);

export default ArticleHead;
