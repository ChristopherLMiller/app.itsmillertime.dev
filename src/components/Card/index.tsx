import { FunctionComponent } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import { CLOUDINARY_CLOUD, CLOUDINARY_FOLDER } from "config";
import Markdown from "./elements/Markdown";
import Contents from "./elements/Contents";

const easing = [0.175, 0.85, 0.42, 0.96];

const variants = {
  exit: {
    y: 150,
    opactiy: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};

const StyledCard = styled.div`
  color: var(--color-black);
  font-family: var(--font-main);
  font-weight: 300;
  max-width: 1000px;
  margin: 0 auto;
  box-shadow: var(--box-shadow-elev-1);
  margin-bottom: 10rem;
`;

const CardHeading = styled.div`
  background: var(--color-red);
  padding: 3% 5%;
  color: var(--color-white-100);
  font-family: var(--font-main);
  text-align: center;
`;

const CardHeadingHeading = styled.h2`
  margin: 0;
  font-size: 4rem;
  font-weight: 300;
`;
const CardHeadingSubHeading = styled.h3`
  margin: 0;
  font-size: 2rem;
  font-weight: 300;
`;

interface iCardBody {
  align: string;
  padding?: boolean;
}

const CardBody = styled.div<iCardBody>`
  background: var(--color-grey-light);
  background-image: var(--linen-paper);
  padding: ${(props) => (props.padding ? `3% 5%` : `0`)};
  position: relative;
  text-align: ${(props) => props.align};

  p {
    word-break: break-word;
  }

  strong {
    color: var(--color-red-dark);
  }

  img {
    max-width: 100%;
    display: inline-block;
  }

  table {
    border: 2px solid var(--color-red-dark);
    border-collapse: collapse;
  }

  a:hover {
    color: var(--color-black-100);
  }

  thead {
    background: var(--color-red-dark);
    color: var(--color-white-100);
  }

  thead th {
    padding: 5px;
  }

  td {
    border: 1px solid var(--color-gold-transparent);
    padding: 5px;
  }

  blockquote {
    border-left: 5px solid var(--color-red-intermediate);
    padding-inline-start: 10px;
    background: var(--color-red-40);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-alt);
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    text-transform: uppercase;
    margin: 0;
    padding-inline-start: 5px;
    color: var(--color-red-dark);
    border-bottom: 5px solid var(--color-gold-transparent);
    border-left: 3px solid var(--color-grey-intermediate);
    opacity: 0.7;
  }
`;

const ActionLinks = styled.div`
  border-top: 2px solid var(--color-red-80);
  padding: 5px;
`;

export interface iActionLink {
  href: string;
  title: string;
}

declare const VALID_ALIGNMENT: readonly [`left`, `center`, `right`];
export declare type alignmentValue = typeof VALID_ALIGNMENT[number];

interface CardProps {
  align?: alignmentValue;
  heading?: string;
  subHeading?: string;
  padding?: boolean;
  actionLinks?: Array<iActionLink>;
  markdown?: string;
}

const Card: FunctionComponent<CardProps> = ({
  heading,
  subHeading,
  children,
  padding = true,
  align = `center`,
  actionLinks,
  markdown,
}) => (
  <motion.div variants={variants}>
    <StyledCard>
      {(heading || subHeading) && (
        <CardHeading>
          {heading && <CardHeadingHeading>{heading}</CardHeadingHeading>}
          {subHeading && (
            <CardHeadingSubHeading>{subHeading}</CardHeadingSubHeading>
          )}
        </CardHeading>
      )}

      <CardBody padding={padding} align={align}>
        {children && <Contents>{children}</Contents>}
        {markdown && <Markdown source={markdown} />}
        {actionLinks && (
          <ActionLinks>
            {actionLinks?.map((link) => (
              <Link href={link.href} key={link.title}>
                <a>{link.title}</a>
              </Link>
            ))}
          </ActionLinks>
        )}
      </CardBody>
    </StyledCard>
  </motion.div>
);

export default Card;
