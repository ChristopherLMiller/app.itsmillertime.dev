import { FunctionComponent } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import Markdown from "./elements/Markdown";
import Contents from "./elements/Contents";
import Panel from "../Panel";

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

      <Panel padding={padding} align={align}>
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
      </Panel>
    </StyledCard>
  </motion.div>
);

export default Card;
