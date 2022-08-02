import React from "react";

interface InputProps {
  InputProps: {
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



export const AllInput: React.FC<InputProps["InputProps"]> = ({
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
