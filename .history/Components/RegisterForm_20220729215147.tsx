import React from "react";
import { AllInput } from "./AllInput";

export const RegisterForm: () => JSX.Element = () => {
  return (
    <div>
      <AllInput
        type="text"
        name="FirstName"
        placeholder="First Name "
        label="Full Name"
        value=" value"
      />
    </div>
  );
};