import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form h1 {
    color: #fff;
    align-self: center;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  }
  form {
    width: 90%;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    margin-bottom: auto;
    margin-top: auto;
  }
`;
