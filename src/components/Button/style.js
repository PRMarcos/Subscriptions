import styled from "styled-components";

export const Btn = styled.button`
  margin-top: ${props => (props.small ? "auto" : "40px")};
  margin-bottom: ${props => (props.small ? "auto" : "80px")};
  margin-right: 10px;
  border: 0;
  border-radius: ${props => (props.small ? "4px" : "10px")};
  height: ${props => !props.small && "48px"};
  width: ${props => !props.small && "100%"};
  font-size: ${props => (props.small ? "12px" : "16px")};
  font-weight: bold;
  color: #fff;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);
  background: ${props => (props.disabled ? "#ffd79b" : "#ff9900")};
  padding: ${props => props.small && "6px"};

  cursor: pointer;

  :hover {
    background: ${props => (props.disabled ? "#ffd79b" : "#faa526")};
  }
`;
