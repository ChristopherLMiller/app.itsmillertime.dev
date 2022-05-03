import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import styled from "styled-components";

const StyledSiteTitle = styled(motion.span)`
  color: var(--color-white-100);
  font-family: var(--font-alt);
  grid-column-start: 3;
`;

const FirstLetter = styled.span`
  color: var(--color-red);
  font-size: 3.5rem;
`;

const OtherLetters = styled.span`
  @media (max-width: 400px) {
    display: none;
  }
`;

const SiteTitle: FunctionComponent = () => (
  <StyledSiteTitle>
    <FirstLetter>I</FirstLetter>
    <OtherLetters>ts</OtherLetters>
    <FirstLetter>M</FirstLetter>
    <OtherLetters>iller</OtherLetters>
    <FirstLetter>T</FirstLetter>
    <OtherLetters>ime</OtherLetters>
  </StyledSiteTitle>
);

export default SiteTitle;
