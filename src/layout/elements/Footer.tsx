import styled from "styled-components";
import { format } from "date-fns";
import packageJSON from "package.json";
import { Grid, GridItem } from "src/components/Grid";
import Link from "next/link";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import ContactMeForm from "src/templates/forms/contactMe";

const StyledFooter = styled.footer`
  position: relative;
  margin-top: 300px;
  transition: all 0.25s;
`;

const FooterBackground = styled.div`
  position: absolute;
  left: 0;
  top: -9vw;
  width: 100%;
  min-height: calc(350px + 6vw);
  z-index: -1;
  background: var(--color-red);
  opacity: 0.8;
  transition: all 0.5s;
  box-shadow: var(--box-shadow-elev-1);
  clip-path: polygon(0 5vw, 100% 0, 100% 100%, 0 100%);
`;

const FooterContentArea = styled.div`
  background: var(--color-grey-intermediate);
  padding: 2rem;
`;

const FooterContent = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  text-align: center;
  color: var(--color-grey-darker);
  font-size: 1.25rem;

  a {
    color: var(--color-white-80);
    text-decoration: none;
    border-bottom: 2px solid var(--color-red-80);
    transition: all 0.25s;

    &:hover {
      color: var(--color-white-100);
      border-bottom: 5px solid var(--color-red);
    }
  }
`;

const SiteInfo = styled.div`
  background: var(--color-grey-darker);
  padding: 2rem;
`;

const Separator = styled.span`
  border: 1px solid var(--color-red);
  margin: 0 5px;
`;

const FooterIcon = styled(motion.img)`
  max-width: 60px;
`;

const FooterIconVariants = {
  initial: {
    transform: `scale3d(1,1,1)`,
  },
  hover: {
    transform: `scale3d(1.5,1.5,1)`,
  },
};

const FooterHeading = styled.h3`
  margin-block: 0;
`;

const FooterSubheading = styled.p`
  margin-block: 0;
`;

const Footer: FunctionComponent = () => (
  <StyledFooter>
    <FooterBackground />
    <FooterContentArea>
      <FooterContent>
        <Grid columns={2} gap="50px" marginBottom={false}>
          <GridItem>
            <FooterHeading>Contact Me</FooterHeading>
            <FooterSubheading>
              Reach out today with any questions or concerns.
            </FooterSubheading>
            <ContactMeForm />
          </GridItem>
          <GridItem>
            <FooterHeading>Follow Me</FooterHeading>
            <FooterSubheading>
              Be sure to see the latest and greatest
            </FooterSubheading>
            <Grid colums={5} min="60px" marginBottom={false} justify="center">
              <FooterIcon
                loading="lazy"
                src="/svg/github.svg"
                alt="Github"
                whileHover="hover"
                variants={FooterIconVariants}
                width="60px"
                height="60px"
              />
              <FooterIcon
                loading="lazy"
                src="/svg/linkedin.svg"
                alt="LinkedIn"
                whileHover="hover"
                width="60px"
                height="60px"
              />
              <FooterIcon
                loading="lazy"
                src="/svg/instagram.svg"
                alt="Instagram"
                whileHover="hover"
                width="60px"
                height="60px"
              />
              <FooterIcon
                loading="lazy"
                src="/svg/twitter.svg"
                alt="Twitter"
                whileHover="hover"
                width="60px"
                height="60px"
              />
              <FooterIcon
                loading="lazy"
                src="/svg/youtube.svg"
                alt="YouTube"
                whileHover="hover"
                width="60px"
                height="60px"
              />
            </Grid>
            <p>
              Use of this site constitues acceptance of our{` `}
              <Link href="/privacy-policy">
                <a>Privacy Policy</a>
              </Link>
              . The material on this site may not be reproduced, distributed,
              transmitted, cached or otherwise used, except with prior written
              permission of Christopher Lee Miller.
            </p>
            <p>
              Copyright © {format(new Date(), `yyyy`)}
              <Separator />v{packageJSON.version}
            </p>
          </GridItem>
        </Grid>
      </FooterContent>
    </FooterContentArea>
    <SiteInfo />
  </StyledFooter>
);

export default Footer;
