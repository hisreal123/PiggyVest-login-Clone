import React from "react";

interface ButtonProps {
  type: String;
  classStyle?: string;
  content: string | any;
}

export const Button: React.FC<ButtonProps> = ({type, classStyle, contetnt}) => {
  return (
    <div>
      <button type={type} className={classStyle}>
        {content}{" "}
      </button>
    </div>
  );
};
