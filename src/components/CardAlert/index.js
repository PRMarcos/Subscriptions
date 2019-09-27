import React from "react";
import { StyledCard, StyledCardDesc, StyledCardButton } from "./style";

export function CardAlert(props) {
  const { image, butunText, description, buttonFuncition, title, aditional } = props;
  return (
    <StyledCard>
      <StyledCardDesc>
        <img src={image} alt="Icon" />
        <h3> {title}</h3>
        <span> {description}</span>
        <span className="aditional">{aditional}</span>
      </StyledCardDesc>

      <StyledCardButton onClick={buttonFuncition}>{butunText}</StyledCardButton>
    </StyledCard>
  );
}
