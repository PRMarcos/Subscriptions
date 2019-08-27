import React from "react";
import "./Input.css";

export function Input(props) {
  const { IsInvalid, Name, Value, OnChange, Type, Placeholder } = props;
  return (
    <input
      className="Input-Component"
      id={IsInvalid && "is-invalid"}
      name={Name}
      value={Value}
      onChange={OnChange}
      type={Type}
      placeholder={Placeholder}
    />
  );
}
