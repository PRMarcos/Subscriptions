import React from "react";
import { StyledCard, StyledCardDesc, StyledCardButton } from "./style";

export function Card(props) {
  const { image, butunText, description, buttonFuncition } = props;
  return (
    <StyledCard>
      <StyledCardDesc>
        <img src={image} alt="Icon" />
        <span> {description}</span>
      </StyledCardDesc>

      <StyledCardButton onclick={buttonFuncition}>{butunText}</StyledCardButton>
    </StyledCard>
  );
}
