import { FunctionComponent } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import { CLOUDINARY_URL, CLOUDINARY_CLOUD, CLOUDINARY_FOLDER } from "config";
import Markdown from "./elements/Markdown";
import Contents from "./elements/Contents";

let easing = [0.175, 0.85, 0.42, 0.96];

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
  background-image: url('${CLOUDINARY_URL}/${CLOUDINARY_CLOUD}/image/upload/${CLOUDINARY_FOLDER}/assets/linen.jpg');
  padding: ${(props) => (props.padding ? `3% 5%` : `0`)};
  font-size: var(--p-size);
  letter-spacing: -1px;
  position: relative;
  text-align: ${(props) => props.align};

  p {
    word-break: break-word;
    color: var(--color-grey-dark);
  }

  strong {
    color: var(--color-red-dark);
  }

  img {
    max-width: 100%;
    display: inline-block;
  }
`;

const ActionLinks = styled.div`
  border-top: 2px solid var(--color-red-transparent);
  padding: 5px;
`;

interface iActionLink {
  href: string;
  title: string;
}

interface CardProps {
  align?: string;
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
  align = "center",
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
