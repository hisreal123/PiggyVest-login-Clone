import React from "react";

interface LabelProps {
  LabelProps: {
    type: string;
    FullName: string | null;
    Email: string | null;
    Phone: number | null;
    Password: string;
    Referrer?: string | number | any;
    label: string;
  };

  In


}
[];

  
export const AllInput: React.FC<> = ({
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
