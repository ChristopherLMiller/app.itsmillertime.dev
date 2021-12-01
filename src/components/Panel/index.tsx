import { FunctionComponent } from "react";
import { StyledPanel } from "./styles";

interface iPanel {
  align?: string;
  padding?: boolean;
  boxed?: boolean;
}

const Panel: FunctionComponent<iPanel> = ({
  children,
  align = `left`,
  padding = true,
  boxed = false,
}) => (
  <StyledPanel
    align={align}
    padding={padding ? `3% 5%` : `0`}
    boxed={boxed ? "max-width: var(--max-width); margin: auto;" : ""}
  >
    {children}
  </StyledPanel>
);

export default Panel;
