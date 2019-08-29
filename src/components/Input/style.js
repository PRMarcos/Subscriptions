import styled from "styled-components";

export const InputField = styled.input`
  margin-top: 20px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.IsInvalid ? "red" : "#ddd")};
  border-radius: 10px;
  height: 48px;
  width: 100%;
  padding: 0 20px;

  font-size: 16px;
  color: #666;

  background-color: ${props => props.IsInvalid && "rgb(255, 245, 245)"};

  ::placeholder {
    color: #aaa;
  }
`;
