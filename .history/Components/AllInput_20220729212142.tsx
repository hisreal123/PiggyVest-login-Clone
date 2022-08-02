import React from "react";

interface InputProps {
  LabelProps: {
    type: string;
    FullName: string | null;
    Email: string | null;
    Phone: number | null;
    Password: string;
    Referrer?: string | number | any;
    label: string;
  };
}
[];


interface InputProps {
    InputProps: {
     name:
    };
  }
  [];
  
export const AllInput: React.FC<InputProps["LabelProps" , "InputProps"]> = ({
  type,
  FullName,
  Email,
  Phone,
  Password,
  Referrer,
  label,
}) => {
  return (
    <div>
      <label htmlFor="FullName"> {label}</label>
      <br></br>
      <input type={type} name="" id="" />
    </div>
  );
};
