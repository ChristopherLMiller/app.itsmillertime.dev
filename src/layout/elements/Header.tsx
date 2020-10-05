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
  box-shadow: var(--box-shadow-elev-1);

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

const HeaderDescription = styled.h4`
  font-family: var(--font-main);
  font-weight: 100;
  padding: 0rem 2rem;
  color: var(--color-white-100);
  margin-bottom: 0;
`;

const HeaderTitle = styled.h1`
  font-family: var(--font-main);
  font-weight: 300;
  padding-left: 6rem;
  color: var(--color-white-100);
  margin-top: 0;
`;

interface iHeader {
  title: string;
  description: string;
}

const Header: FunctionComponent<iHeader> = ({ title, description }) => (
  <StyledHeader>
    <HeaderBackground />
    <HeaderDescription>{description}</HeaderDescription>
    <HeaderTitle>{title}</HeaderTitle>
  </StyledHeader>
);

export default Header;
