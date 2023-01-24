import Panel from "@components/Panel";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC, ReactNode } from "react";
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
export declare type alignmentValue = (typeof VALID_ALIGNMENT)[number];

interface CardProps {
  align?: alignmentValue;
  heading?: string;
  subHeading?: string;
  padding?: boolean;
  actionLinks?: Array<iActionLink>;
  fullWidth?: boolean;
  children: ReactNode;
}

const Card: FC<CardProps> = ({
  heading = "",
  subHeading = "",
  children,
  padding = true,
  align = `center`,
  actionLinks = [],
  fullWidth = false, // false means we want
}: CardProps) => (
  <motion.div variants={CardVariants}>
    <StyledCard maxWidth={fullWidth ? "1000px" : "100%"}>
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
        {actionLinks.length > 0 && (
          <ActionLinks>
            {actionLinks?.map((link) => (
              <Link href={link.href} key={link.title}>
                {link.title}
              </Link>
            ))}
          </ActionLinks>
        )}
      </Panel>
    </StyledCard>
  </motion.div>
);

export default Card;
