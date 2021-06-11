import styled from 'styled-components';
import { FunctionComponent } from 'react';
import Link from 'next/link';

const Items = styled.span`
  display: inline-block;
`;

const ItemSpan = styled.span`
  text-transform: Capitalize;
`;

const Splitter = styled.span`
  color: var(--main-color);
  padding: 0 5px;
  display: inline-block;
`;

interface iArrayList {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  array: Array<any>;
  separator?: string;
  asLinks?: boolean;
}

export const ArrayList: FunctionComponent<iArrayList> = ({
  array,
  separator = `|`,
  asLinks = false,
}) => (
  <Items>
    {array.map((item, index) => (
      <ItemSpan key={item?.id}>
        {!!index && <Splitter>{separator}</Splitter>}
        {asLinks && (
          <Link href={item.slug}>
            <a>{item.title}</a>
          </Link>
        )}
        {!asLinks && item?.title}
      </ItemSpan>
    ))}
    {array.length == 0 && <ItemSpan>None</ItemSpan>}
  </Items>
);
