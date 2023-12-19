import { FC, useState } from "react";
import styled from "styled-components";

const StyledAccordian = styled.div``;

const AccordianTitle = styled.button`
  border: none;
  background: var(--color-red-intermediate);
  color: white;
  width: 100%;
  text-transform: uppercase;
  cursor: pointer;
  font-family: var(--font-alt);
  line-height: 1.5em;
  font-size: var(--h4-size);
`;

interface iAccordianContent {
  isOpen: boolean;
}
const AccordianContent = styled.div<iAccordianContent>`
  font-size: var(--p-responsive);
  margin: 0;
  transition: height 0.25s;
  font-family: var(--font-typewriter);
  padding-inline: 1rem;

  li:hover {
    backgroun: var(--color-red-intermediate);
  }

  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  height: ${(props) => (props.isOpen ? "auto" : "0px")};
`;

interface iAccordian {
  title: String;
  children: React.ReactNode;
}

const Accordian: FC<iAccordian> = ({ title, children }) => {
  const [isOpen, setOpen] = useState(true);

  return (
    <StyledAccordian>
      <AccordianTitle onClick={() => setOpen(!isOpen)}>{title}</AccordianTitle>
      <AccordianContent isOpen={isOpen}>{children}</AccordianContent>
    </StyledAccordian>
  );
};

export { Accordian };
