import Link from "next/link";
import { FunctionComponent } from "react";
import { StyledTable } from "./styles";

type TableLink = {
  label: string;
  url: string;
  target?: string;
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
                  const {
                    label,
                    url,
                    shallow = false,
                    target = "self",
                  } = cell as TableLink;

                  if (target === "self") {
                    return (
                      <td key={cellIndex}>
                        <Link href={url} shallow={shallow}>
                          {label}
                        </Link>
                      </td>
                    );
                  } else {
                    return (
                      <td key={cellIndex}>
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          {label}
                        </a>
                      </td>
                    );
                  }
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
