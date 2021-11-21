import styled from "styled-components";

export const ModelItem = styled.article`
  border: 5px solid var(--color-red);
  height: min-content;
`;

export const ModelName = styled.div`
  grid-column: 1 / -1;
  background: var(--color-red);
  padding: 1% 3%;
  color: var(--color-white-100);
  font-family: var(--font-alt);
  font-size: var(--p-size);
  letter-spacing: 2px;
`;

export const ModelImage = styled.div`
  grid-column: 1 / 2;

  span {
    min-height: 100%;
  }
`;

export const ModelDetails = styled.table`
  grid-column: 2 / -1;
  border-collapse: collapse;
  font-family: var(--font-alt);
  color: var(--color-white-80);

  td {
    padding-inline: 1rem;
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

export const TagList = styled.div`
  background: var(--color-grey-intermediate);
  font-size: var(--p-size);
  font-family: var(--font-alt);
  color: var(--color-white-80);
  padding-inline: 1rem;
  padding-block: 0.5rem;

  a {
    text-decoration: none;
    color: var(--color-red);
    cursor: pointer;
  }
`;
