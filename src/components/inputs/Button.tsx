import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import styled from "styled-components";

const StyledButton = styled(motion.button)`
  background: var(--color-red);
  padding: 10px;
  text-align: center;
  margin: 20px auto;
  letter-spacing: 2px;
  cursor: pointer;
  font-size: var(--p-size);
  border: none;
  color: var(--color-white-100);

  &:disabled {
    background: var(--color-grey-intermediate);
  }
`;

const ButtonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: `var(--box-shadow-elev-1)`,
  },
  initial: {
    scale: 1,
    boxShadow: `var(--box-shadow-elev-0)`,
  },
};

interface iButton {
  isDisabled?: boolean;
  isSubmitting?: boolean;
  onClick?: () => unknown;
  children: React.ReactNode;
  type: "submit" | "button";
}

const Button: FunctionComponent<iButton> = ({
  isDisabled,
  isSubmitting,
  children,
  onClick,
  type = "button",
}) => (
  <StyledButton
    initial="initial"
    whileHover="hover"
    variants={ButtonVariants}
    onClick={onClick}
    type={type}
    disabled={isDisabled}
  >
    {isSubmitting ? `Sending...` : children}
  </StyledButton>
);

export default Button;
