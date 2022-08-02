import React from "react";
import { AllProps } from "./AllProps";

export const AllInput: React.FC<AllProps[]> = (LabelProps, InputProps) => {
  return (
    <div>
      <label htmlFor="FullName"> {LabelProps.label}</label>
      <br></br>
      <input
        type={.LabelProps.type}
        name={props.InputProps.name}
        placeholder={props.InputProps.placeholder}
      />
    </div>
  );
};
