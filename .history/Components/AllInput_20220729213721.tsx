import React from "react";
import { AllProps } from "./AllProps";

export const AllInput: React.FC<AllProps> = (pro{LabelProps, InputProps}) => {
  return (
    <div>
      <label htmlFor="FullName"> {LabelProps.label}</label>
      <br></br>
      <input
        type={LabelProps.type}
        name={InputProps.name}
        placeholder={InputProps.placeholder}
      />
    </div>
  );
};
