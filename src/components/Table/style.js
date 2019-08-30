import styled from "styled-components";

export const TableContainer = styled.div`
  width: 90%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
export const StyledTable = styled.table`
  border-collapse: collapse;

  th,
  td {
    text-align: left;
    padding: 8px;
  }
  thead {
  }

  tr {
    background-color: #ffffffaf;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  th {
    background-color: #4caf50;
    color: white;
  }
`;
