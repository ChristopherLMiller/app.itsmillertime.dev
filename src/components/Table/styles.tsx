import styled from "styled-components";

export const StyledTable = styled.table`
  grid-column: 2 / -1;
  border-collapse: collapse;
  font-family: var(--font-alt);
  color: var(--color-white-80);
  width: 100%;

  td {
    padding-inline: 1rem;
    text-transform: uppercase;
  }

  tr:nth-child(even) {
    background: var(--color-grey-intermediate);
  }
  tr:nth-child(odd) {
    background: var(--color-grey-darker);
  }

  a {
    text-decoration: none;
    color: var(--color-red);
  }
`;
