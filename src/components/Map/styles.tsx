import styled from "styled-components";

export const StyledMap = styled.div`
  border: var(--border-wide);
  box-shadow: var(--box-shadow-elev-1);

  .leaflet-container {
    min-height: 75vh;
    height: 100%;
  }
  .leaflet-popup-content-wrapper {
    font-size: var(--h6-size);
    font-family: var(--font-typewriter);
    text-transform: capitalize;
  }
`;
