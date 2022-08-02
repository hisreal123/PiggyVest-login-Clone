import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  classStyle?: string;
  content: string | any;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  classStyle,
  content,
}) => {
  return (
    <div className="ButttonStyle">
      <button type={type} className={classStyle}>
        {content}{" "}
      </button>
    </div>
  );
};
