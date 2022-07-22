import styled from "styled-components";

export interface iPaddingProps {
  padding: string;
}

export const StyledPadding = styled.div<iPaddingProps>`
  padding ${(props) => props.padding}}
`;
