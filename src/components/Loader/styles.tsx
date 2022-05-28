import styled from "styled-components";

export const LoaderContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: var(--color-black-60);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;
