import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-height: 400px;
  max-width: 350px;
  margin: 20px;

  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const StyledCardDesc = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  font-size: 18px;

  img {
    margin-bottom: 20px;
    width: 70%;
    height: 75%;
  }
  
  span{
    font-size:16px;
    margin: 10px;
  }
  .aditional, h3{
    font-weight:bold;
  }

`;

export const StyledCardButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  color: white;
  max-height: 10%;
  border-radius: 0 0 10px 10px;

  padding: 10px;
  background-color: rgb(255, 153, 0);

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    background-color: rgb(255, 140, 0);
    cursor: pointer;
  }
`;
