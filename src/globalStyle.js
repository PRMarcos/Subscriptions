import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle` 
* { 
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    
     
}  
body, html { 
    height: 100%;

} 

body {
  background-color: rgb(190, 200, 255);
 
}

body,
input,
button {
  font-family: Arial, Helvetica, sans-serif;
}
`;
