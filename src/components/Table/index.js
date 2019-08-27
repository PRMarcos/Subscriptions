import React from "react";
import "./Table.css";

export function Table(props) {
  const { Headers, Values } = props;
  return (
    <div className="table-container">
      <table className="Table">
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
      </table>
    </div>
  );
}
