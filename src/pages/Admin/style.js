import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const OptionContainer = styled.div`
  width: 90%;
  max-width: 700px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: auto;
  margin-top: auto;

  h1 {
    margin-top: 10px;
    color: white;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  }

  button {
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
    width: 90%;
    font-size: 16px;
  }
`;
