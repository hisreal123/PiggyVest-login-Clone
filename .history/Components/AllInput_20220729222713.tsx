import React, { useState } from "react";
import { InputProps } from "./AllProps";

export const AllInput: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
  value,
  label,
  classStyle
}) => {
  const [input, setInput] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(e.target.name);
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
