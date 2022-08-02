import React from "react";
import { InputProps } from "./AllProps";

export const AllInput: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
  value,
  label,
}) => {
  return (
    <div>
      <label htmlFor="FullName"> {name}</label>
      <br></br>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};
