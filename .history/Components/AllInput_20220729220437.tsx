import React, { useState } from "react";
import { isConstructorDeclaration } from "typescript";
import { InputProps } from "./AllProps";

export const AllInput: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
  value,
  label,
}) => {
  const [input, setInput] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    isConstructorDeclaration.('tobi')
  };
  return (
    <div>
      <label htmlFor="FullName"> {name}</label>
      <br></br>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
