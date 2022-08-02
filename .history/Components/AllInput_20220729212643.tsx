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
  };
}
[];

export const AllInput: React.FC<AllProps> = (props}) => {
  return (
    <div>
      <label htmlFor="FullName"> {label}</label>
      <br></br>
      <input type={type} name="" id="" />
    </div>
  );
};
