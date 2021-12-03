import Panel from "@components/Panel";
import { motion } from "framer-motion";
import Link from "next/link";
import { FunctionComponent } from "react";
import {
  ActionLinks,
  CardHeading,
  CardHeadingHeading,
  CardHeadingSubHeading,
  CardVariants,
  StyledCard,
  StyledCardBody,
} from "./styles";

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
}) => (
  <motion.div variants={CardVariants}>
    <StyledCard borderTop={heading && subHeading ? "none" : "var(--border)"}>
      {(heading || subHeading) && (
        <CardHeading>
          {heading && <CardHeadingHeading>{heading}</CardHeadingHeading>}
          {subHeading && (
            <CardHeadingSubHeading>{subHeading}</CardHeadingSubHeading>
          )}
        </CardHeading>
      )}

      <Panel padding={padding} align={align}>
        <StyledCardBody>{children}</StyledCardBody>
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
