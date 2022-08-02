import React from "react";
import { LabelProps, InputProps } from "./AllProps";

export const AllInput: React.FC< InputProps> = (props) => {
  return (
    <div>
      <label htmlFor="FullName"> {props.type}</label>
      <br></br>
      <input
        type={LabelProps.type}
        name={InputProps.name}
        placeholder={InputProps.placeholder}
      />
    </div>
  );
};
