import styled from 'styled-components';

interface iGrid {
  background?: string;
  gap?: string;
  min?: string;
  masonry?: boolean;
  justify?: string;
  marginBottom?: boolean;
}

export const Grid = styled.div<iGrid>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${(props) => (props.masonry ? 'masonry' : 'auto')};
  grid-gap: ${(props) => props.gap || '0px'};
  background: ${(props) => props.background};
  ${(props) => props.justify && 'justify-items: ' + props.justify};
  margin-bottom: ${(props) => (props.marginBottom ? '50px' : '0')};

  @media (min-width: ${(props) => props.min || '300'}) {
    grid-template-columns: repeat(
      auto-fit,
      minmax(${(props) => props.min || '300px'}, 1fr)
    );
  }
`;

interface iGridItem {
  maxWidth?: string;
}
export const GridItem = styled.div<iGridItem>`
  max-width: ${(props) => props.maxWidth};
`;
