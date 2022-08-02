import React from "react";
import { LabelProps, n } from "./AllProps";

export const AllInput: React.FC<AllProps> = () => {
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
