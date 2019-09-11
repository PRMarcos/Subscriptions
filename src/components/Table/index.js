import React from "react";
import { StyledTable, TableContainer } from "./style";
import { Button } from "../Button";

export function Table(props) {
  const { Headers, Values, btnX, deleteRow } = props;
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
              {btnX && (
                <td>
                  <Button
                    small
                    btnFunc={async () => {
                      await deleteRow(obj._id);
                    }}
                  >
                    X
                  </Button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
}
