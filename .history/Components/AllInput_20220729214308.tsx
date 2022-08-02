import React from "react";
import { LabelProps, InputProps } from "./AllProps";

export const AllInput: React.FC<{[La]}> = (props) => {
  return (
    <div>
      <label htmlFor="FullName"> {props.name}</label>
      <br></br>
      <input
        type={LabelProps.type}
        name={InputProps.name}
        placeholder={InputProps.placeholder}
      />
    </div>
  );
};
