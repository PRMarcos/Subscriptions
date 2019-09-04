import styled from "styled-components";

export const AlertContainer = styled.div`
  width: 100%;
  margin-top: 20px;

  input {
    margin-bottom: auto;
    height: 30px;
    width: 30px;
  }
  label,
  p {
    text-align: justify;
    color: rgb(41, 41, 41);
    margin-left: 5px;
    font-size: 18px;
  }
  label {
    font-weight: bold;
  }
`;
export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  form {
    width: 90%;
    max-width: 700px;
  }

  form h1 {
    text-align: center;
    color: #fff;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  }
`;
