import styled from "styled-components";
import { FunctionComponent } from "react";

const StyledHeader = styled.div`
  padding-bottom: 100px;
  position: relative;
`;

const HeaderBackground = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 150%;
  min-height: 350px;
  z-index: -1;
  background: var(--color-red);
  transform: rotateZ(-5deg) translate(-50%, -100%);
  opacity: 0.8;
  transition: all 0.5s;

  @media (min-width: 800px) {
    transform: rotateZ(-5deg) translate(-50%, -110%);
  }
  @media (min-width: 1000px) {
    transform: rotateZ(-5deg) translate(-50%, -120%);
  }
  @media (min-width: 1400px) {
    transform: rotateZ(-5deg) translate(-50%, -130%);
  }
`;

const HeaderDescription = styled.h2`
  font-family: var(--font-main);
  font-weight: 100;
  font-size: var(--h2-responsive);
  padding: 0rem 2rem;
  color: var(--color-white);
  margin-bottom: 0;
`;

const HeaderTitle = styled.h1`
  font-family: var(--font-main);
  font-weight: 300;
  font-size: var(--h1-responsive);
  padding-left: 6rem;
  color: var(--color-white);
  margin-top: 0;
`;

interface iHeader {
  meta: {
    title: string;
    description: string;
  };
}

const Header: FunctionComponent<iHeader> = ({ meta }) => (
  <StyledHeader>
    <HeaderBackground />
    <HeaderDescription>{meta.description}</HeaderDescription>
    <HeaderTitle>{meta.title}</HeaderTitle>
  </StyledHeader>
);

export default Header;
