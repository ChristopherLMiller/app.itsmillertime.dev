import { motion } from 'framer-motion';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

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
    <FirstLetter>C</FirstLetter>
    <OtherLetters>hristopher</OtherLetters>
    <FirstLetter>L</FirstLetter>
    <OtherLetters>ee</OtherLetters>
    <FirstLetter>M</FirstLetter>
    <OtherLetters>iller</OtherLetters>
  </StyledSiteTitle>
);

export default SiteTitle;
