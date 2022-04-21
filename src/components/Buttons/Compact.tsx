import { FunctionComponent } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: var(--color-red);
  padding: 0 10px;
  text-align: center;
  letter-spacing: 2px;
  cursor: pointer;
  font-size: var(--p-size);
  border: none;
  color: var(--color-white-100);

  :disabled {
    background: var(--color-grey-intermediate);
  }
`;

interface iCompactButton {
  isDisabled?: boolean;
  isSubmitting?: boolean;
  type?: string;
  onClick?: () => unknown;
  children: React.ReactNode;
}

const CompactButton: FunctionComponent<iCompactButton> = ({
  isDisabled,
  isSubmitting,
  children,
  onClick,
}) => (
  <StyledButton onClick={onClick} type="button" disabled={isDisabled}>
    {isSubmitting ? `Sending...` : children}
  </StyledButton>
);

export default CompactButton;
