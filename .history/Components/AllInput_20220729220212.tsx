import React, { useState } from "react";
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
    setInput(value())

      function value(): React.SetStateAction<{}> {
          return console.log(e.target.value);
      }
  }
  return (
    <div>
      <label htmlFor="FullName"> {name}</label>
      <br></br>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e) => {
          alert("changed");
        }}
      />
    </div>
  );
};
