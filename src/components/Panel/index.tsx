import { FunctionComponent } from "react";
import { StyledPanel } from "./styles";

interface iPanel {
  align?: string;
  padding?: boolean;
  boxed?: boolean;
  boxedSmall?: boolean;
  background?: string;
  children: React.ReactNode;
}

const Panel: FunctionComponent<iPanel> = ({
  children,
  align = `left`,
  padding = true,
  boxed = false,
  boxedSmall = false,
}) => {
  const isBoxed = boxed || boxedSmall;
  const boxWidth =
    isBoxed &&
    (boxedSmall ? "var(--max-width-desktop)" : "var(--max-width-wide)");
  return (
    <StyledPanel
      align={align}
      padding={padding ? `3% 5%` : `0`}
      boxed={isBoxed ? `max-width: ${boxWidth}` : ""}
    >
      {children}
    </StyledPanel>
  );
};

export default Panel;
