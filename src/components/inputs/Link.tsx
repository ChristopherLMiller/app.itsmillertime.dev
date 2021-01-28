import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FunctionComponent } from 'react';
interface ButtonTypes {
  href: string;
  text: string;
}

export const LinkButton: FunctionComponent<ButtonTypes> = ({ href, text }) => (
  <StyledButton
    whileHover="hover"
    animate="rest"
    initial="rest"
    variants={ButtonVariants}
  >
    <Link href={href}>
      <ButtonAnchor>{text}</ButtonAnchor>
    </Link>
  </StyledButton>
);

export const StyledButton = styled(motion.p)`
  background: var(--color-red);
  padding: 10px;
  text-align: center;
  margin: 20px auto;
  max-width: 200px;
  letter-spacing: 2px;
  cursor: pointer;
  border: none;
`;

const ButtonVariants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.5,
      type: `tween`,
      ease: `easeIn`,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.15,
      type: `tween`,
      ease: `easeOut`,
    },
  },
};

const ButtonAnchor = styled.a`
  color: var(--color-grey-light);
`;

const Button = styled.button`
  background: var(--color-red);
  padding: 10px;
  text-align: center;
  margin: 20px auto;
  max-width: 200px;
  letter-spacing: 2px;
  cursor: pointer;
  font-size: var(--p-size);
  border: none;
  color: var(--color-grey-light);
`;

export default Button;
