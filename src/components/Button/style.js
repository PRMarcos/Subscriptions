import styled from "styled-components";

export const Btn = styled.button`
  margin-top: 40px;
  margin-bottom: 80px;
  margin-right: 10px;
  border: 0;
  border-radius: 10px;
  height: 48px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);
  background: ${props => (props.Disabled ? "#ffd79b" : "#ff9900")};

  cursor: pointer;

  :hover {
    background: ${props => (props.Disabled ? "#ffd79b" : "#faa526")};
  }
`;
