import styled from "styled-components";
import { FunctionComponent } from "react";

const StyledHeader = styled.div`
  min-height: 350px;
  position: relative;
`;

const HeaderBackground = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 110%;
  height: 100%;
  z-index: -1;
  background: var(--color-red);
  transform: rotateZ(-5deg) translate(-50%, -150%);
  opacity: 0.8;
`;

const HeaderDescription = styled.h2`
  font-family: var(--font-main);
  font-weight: 100;
  font-size: var(--h2-size);
  padding-left: 2rem;
  color: var(--color-white);
  margin-bottom: 0;
`;

const HeaderTitle = styled.h1`
  font-family: var(--font-main);
  font-weight: 300;
  font-size: var(--h1-responsive);
  padding-left: 3.5rem;
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
