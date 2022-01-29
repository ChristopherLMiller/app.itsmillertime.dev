import { FC } from "react";
import { CaretVariants, StyledCaret } from "./styles";

export interface CaretProps {
  initialDirection: "up" | "down";
  direction: "up" | "down";
}

const Caret: FC<CaretProps> = ({ initialDirection, direction }) => (
  <StyledCaret
    variants={CaretVariants}
    initial={initialDirection}
    animate={direction}
  />
);

export default Caret;
