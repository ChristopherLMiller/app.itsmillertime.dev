import styled from 'styled-components';

interface iGrid {
  columns: number;
  background?: string;
  gap?: string;
  min?: string;
  masonry?: boolean;
}

export const Grid = styled.div<iGrid>`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props) => props.min || '350px'}, 1fr)
  );
  grid-template-rows: ${(props) => (props.masonry ? 'masonry' : 'auto')};
  grid-gap: ${(props) => props.gap || '0px'};
  background: ${(props) => props.background};
  margin-bottom: 50px;
`;

interface iGridItem {
  maxWidth?: string;
}
export const GridItem = styled.div<iGridItem>`
  max-width: ${(props) => props.maxWidth};
`;
