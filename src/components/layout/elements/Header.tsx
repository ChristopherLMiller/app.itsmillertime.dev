import styled from "styled-components";

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

const Header = () => (
  <StyledHeader>
    <HeaderBackground />
    <h1>Page Title</h1>
  </StyledHeader>
);

export default Header;
