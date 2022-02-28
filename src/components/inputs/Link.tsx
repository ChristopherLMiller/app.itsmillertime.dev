import { motion } from "framer-motion";
import Link from "next/link";
import { FunctionComponent } from "react";
import styled from "styled-components";
interface ButtonTypes {
  href: string;
  text: string;
}

export const LinkButton: FunctionComponent<ButtonTypes> = ({
  href,
  children,
}) => {
  if (href.startsWith("http")) {
    return (
      <StyledButton
        whileHover="hover"
        animate="rest"
        initial="rest"
        variants={ButtonVariants}
      >
        <ButtonAnchor href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </ButtonAnchor>
      </StyledButton>
    );
  } else {
    return (
      <StyledButton
        whileHover="hover"
        animate="rest"
        initial="rest"
        variants={ButtonVariants}
      >
        <Link href={href} passHref>
          <ButtonAnchor>{children}</ButtonAnchor>
        </Link>
      </StyledButton>
    );
  }
};

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
