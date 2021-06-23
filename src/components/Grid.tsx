import styled from 'styled-components';

interface iGrid {
  columns?: number;
  background?: string;
  template?: string;
  gap?: string;
  min?: string;
  masonry?: boolean;
  justify?: string;
  marginBottom?: boolean;
}

export const Grid = styled.div<iGrid>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${(props) => (props.masonry ? `masonry` : `auto`)};
  grid-gap: ${(props) => props.gap || `0px`};
  background: ${(props) => props.background};
  ${(props) => props.justify && `justify-items: ` + props.justify};
  margin-bottom: ${(props) => (props.marginBottom ? `50px` : `0`)};

  ${(props) =>
    props.columns > 0 &&
    `@media (min-width: 600px) {grid-template-columns: repeat(2, 1fr)}
    @media (min-width: 800px) {grid-template-columns: repeat(${props.columns}, 1fr)
  }`}

  ${(props) =>
    props.min !== undefined &&
    `
  @media (min-width: ${props.min || `300px`}) {
    grid-template-columns: repeat(
      auto-fit,
      minmax(${props.min || `300px`}, 1fr)
    );
  }`}
`;

interface iGridItem {
  maxWidth?: string;
}
export const GridItem = styled.div<iGridItem>`
  max-width: ${(props) => props.maxWidth};
`;
