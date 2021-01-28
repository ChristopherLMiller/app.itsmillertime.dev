import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FunctionComponent } from 'react';

const StyledButton = styled(motion.button)`
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
  onClick?: () => any;
}

const CompactButton: FunctionComponent<iCompactButton> = ({
  isDisabled,
  isSubmitting,
  children,
  onClick,
  type = `button`,
}) => (
  <StyledButton onClick={onClick} type={type} disabled={isDisabled}>
    {isSubmitting ? `Sending...` : children}
  </StyledButton>
);

export default CompactButton;
