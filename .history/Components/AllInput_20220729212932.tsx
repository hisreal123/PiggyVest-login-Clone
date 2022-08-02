import React from "react";


export const AllInput: React.FC<AllProps> = (props) => {
  return (
    <div>
      <label htmlFor="FullName"> {props.LabelProps.label}</label>
      <br></br>
      <input
        type={props.LabelProps.type}
        name={props.InputProps.name}
        placeholder={props.InputProps.placeholder}
      />
    </div>
  );
};
