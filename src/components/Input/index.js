import React from "react";
import { InputField } from "./style";

export function Input(props) {
  const { IsInvalid, Name, Value, OnChange, Type, Placeholder } = props;
  return (
    <InputField
      IsInvalid={IsInvalid}
      name={Name}
      value={Value}
      onChange={OnChange}
      type={Type}
      placeholder={Placeholder}
    />
  );
}
