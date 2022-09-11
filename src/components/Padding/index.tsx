import { StyledPadding } from "./styles";

export interface iPaddingProps {
  padding: string;
}

export const Padding = ({ children, padding }) => {
  return <StyledPadding padding={padding}>{children}</StyledPadding>;
};
