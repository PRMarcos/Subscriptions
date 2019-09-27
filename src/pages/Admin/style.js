import styled from "styled-components";


export const Danger = styled.div`
 
 position: relative;
 height: 100%;
 width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 5px solid lightgray;
  margin-top:20px;
  padding: 20px 0 0 0;
  
  div{
    color: white;
      font-size:16px;
      font-weight:bold;
      text-align:center;
  
    background-color: lightgray;
    padding: 5px;
    border-radius: 5px;

    position: absolute;
    top:-3px;
    left:50%;
    transform: translate(-50%,-50%);

    span{
      font-weight:bold;
      color:${props => props.closed ? "red" : "green"};
    }
  }

`;


export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow:scroll;
`;
export const OptionContainer = styled.div`
  width: 90%;
  max-width: 700px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom:30px;
  
 

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
