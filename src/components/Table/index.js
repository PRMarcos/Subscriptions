import React from "react";
import "./Table.css";

export function Table(props) {
  const { Headers, values } = props;
  return (
    <div className="table-container">
      <table className="Table">
        <thead>
          <tr>
            {Headers.map(hd => (
              <th>{hd.value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {values.map(obj => (
            <tr key={obj._id}>
              {Object.keys(obj).map(chave => (
                <td>{obj[chave]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
