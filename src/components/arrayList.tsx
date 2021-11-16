import Link from "next/link";
import { FunctionComponent } from "react";
import styled from "styled-components";

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
            <a>{item.title || item.name}</a>
          </Link>
        )}
        {!asLinks && (item?.title || item?.name)}
      </ItemSpan>
    ))}
    {array.length == 0 && <ItemSpan>None</ItemSpan>}
  </Items>
);
