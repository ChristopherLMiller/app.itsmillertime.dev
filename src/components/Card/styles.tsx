import styled from "styled-components";

export const easing = [0.175, 0.85, 0.42, 0.96];

export const CardVariants = {
  exit: {
    y: 150,
    opactiy: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};

export const StyledCard = styled.div`
  color: var(--color-black);
  font-family: var(--font-main);
  font-weight: 300;
  max-width: 1000px;
  margin: 0 auto;
  box-shadow: var(--box-shadow-elev-1);
  margin-bottom: 10rem;
  border: var(--border);
  border-top: ${(props) => props.borderTop};
`;

export const CardHeading = styled.div`
  background: var(--color-red-intermediate);
  padding: 3% 5%;
  color: var(--color-white-100);
  font-family: var(--font-main);
  text-align: center;
`;

export const CardHeadingHeading = styled.h2`
  margin: 0;
  font-size: 4rem;
  font-weight: 300;
`;
export const CardHeadingSubHeading = styled.h3`
  margin: 0;
  font-size: 2rem;
  font-weight: 300;
`;

export const ActionLinks = styled.div`
  border-top: 2px solid var(--color-red-80);
  background: var(--color-red);
  padding: 5px;
`;

export interface iCardBody {
  align: string;
  padding?: boolean;
}

export const StyledCardBody = styled.div<iCardBody>`
  padding: ${(props) => (props.padding ? `3% 5%` : `0`)};
  position: relative;
  text-align: ${(props) => props.align};

  p {
    word-break: break-word;
  }

  strong {
    color: var(--color-red-dark);
  }

  img {
    max-width: 100%;
    display: inline-block;
  }

  a:hover {
    color: var(--color-black-100);
  }

  blockquote {
    border-left: 5px solid var(--color-red-intermediate);
    padding-inline-start: 10px;
    background: var(--color-red-40);
  }
`;
