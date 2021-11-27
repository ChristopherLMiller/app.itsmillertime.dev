import { FunctionComponent } from "react";
import Link from "next/link";
import { StyledTable } from "./styles";

type TableLink = {
  label: string;
  url: string;
  shallow?: boolean;
};

interface iTable {
  rows: Array<Array<string | Number | TableLink>>;
}
const Table: FunctionComponent<iTable> = ({ rows }) => {
  return (
    <StyledTable>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => {
              if (typeof cell === "object") {
                if (cell !== null) {
                  const { label, url, shallow = false } = cell as TableLink;
                  return (
                    <td key={cellIndex}>
                      <Link href={url} shallow={shallow}>
                        <a>{label}</a>
                      </Link>
                    </td>
                  );
                }
              } else {
                return <td key={cellIndex}>{cell}</td>;
              }
            })}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
