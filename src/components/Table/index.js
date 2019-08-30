import React from "react";
import { StyledTable, TableContainer } from "./style";

export function Table(props) {
  const { Headers, Values } = props;
  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
            {Headers.map(hd => (
              <th key={hd}>{hd}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Values.map(obj => (
            <tr key={obj._id}>
              {Object.keys(obj).map(
                chave => chave !== "_id" && <td key={chave}>{obj[chave]}</td>
              )}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
}
