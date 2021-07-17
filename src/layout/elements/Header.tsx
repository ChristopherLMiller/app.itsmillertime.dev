import styled from 'styled-components';
import { FunctionComponent } from 'react';

const StyledHeader = styled.div`
  margin-bottom: 100px;
  position: relative;
`;

const HeaderBackground = styled.div`
  position: absolute;
  left: 0;
  bottom: -3vw;
  width: 100%;
  min-height: calc(350px + 6vw);
  z-index: -1;
  background: var(--color-red);
  opacity: 0.8;
  transition: all 0.5s;
  box-shadow: var(--box-shadow-elev-1);
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 6vw), 0 100%);
`;

const HeaderDescription = styled.h4`
  font-family: var(--font-main);
  font-weight: 100;
  padding: 0rem 2rem;
  color: var(--color-white-100);
  margin-block-end: 0;
  margin-block-start: 2rem;
`;

const HeaderTitle = styled.h1`
  font-family: var(--font-alt);
  font-weight: 300;
  padding-inline-start: 6rem;
  color: var(--color-white-100);
  margin-block-start: 0;
  text-transform: uppercase;
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
