import styled from "styled-components";

export const BorderTop = styled.span`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 10px;
  background: repeating-linear-gradient(
    45deg,
    #bf9502,
    #bf9502 20px,
    #010101 20px,
    #010101 40px
  );
  z-index: 9999909;
`;

export const BorderBottom = styled.span`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 10px;
  background: repeating-linear-gradient(
    45deg,
    #bf9502,
    #bf9502 20px,
    #010101 20px,
    #010101 40px
  );
  z-index: 9999909;
`;

export const BorderLeft = styled.span`
  position: fixed;
  top: 0;
  left: 0;
  width: 10px;
  height: 100vh;
  background: repeating-linear-gradient(
    45deg,
    #bf9502,
    #bf9502 20px,
    #010101 20px,
    #010101 40px
  );
  z-index: 9999909;
`;

export const BorderRight = styled.span`
  position: fixed;
  top: 0;
  right: 0;
  width: 10px;
  height: 100vh;
  background: repeating-linear-gradient(
    45deg,
    #bf9502,
    #bf9502 20px,
    #010101 20px,
    #010101 40px
  );
  z-index: 9999909;
`;
