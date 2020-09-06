interface ButtonTypes {
  href: string;
  as: string;
  text: string;
}

const LinkButton: FunctionComponent<ButtonTypes> = ({ href, as, text }) => (
  <StyledButton
    whileHover="hover"
    animate="rest"
    initial="rest"
    variants={ButtonVariants}
  >
    <Link as={as} href={href}>
      <ButtonAnchor>{text}</ButtonAnchor>
    </Link>
  </StyledButton>
);
import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";

export const StyledButton = styled(motion.p)`
  background: var(--color-red);
  padding: 10px;
  text-align: center;
  margin: 20px auto;
  max-width: 200px;
  letter-spacing: 2px;
  cursor: pointer;
  font-size: var(--p-responsive);
  border: none;
`;

const ButtonVariants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.15,
      type: "tween",
      ease: "easeOut",
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
  font-size: var(--p-responsive);
  border: none;
  color: var(--color-grey-light);
`;

export default Button;
