import React from "react";

interface AllProps {
  LabelProps: {
    type: string;
    FullName: string | null;
    Email: string | null;
    Phone: number | null;
    Password: string;
    Referrer?: string | number | any;
    label: string;
  };

  InputProps: {
    name: string;
    value: string | number;
    placeholder: string
  };
}
[];

export const AllInput: React.FC<AllProps> = (props) => {
  return (
    <div>
      <label htmlFor="FullName"> {props.LabelProps.label}</label>
      <br></br>
      <input type={props.LabelProps.type} name={props.InputProps.name} placeholder={props.} />
    </div>
  );
};
