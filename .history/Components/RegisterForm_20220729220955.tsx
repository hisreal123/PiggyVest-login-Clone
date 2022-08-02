import React, { useState } from "react";
import { AllInput } from "./AllInput";
import { InputProps as FormProps } from "./AllProps";

// interface RegisterFormProps {}
export const RegisterForm: React.FC<FormProps> = () => {
  return (
    <div className="RegisterForm">
      <AllInput
        type="text"
        name="FirstName"
        placeholder="First Name "
        label="Full Name"
        value=" value"
      />

      <AllInput
        type="email"
        name="Email "
        placeholder="Email Address"
        label="Email Address"
        value=" value"
      />

      <AllInput
        type="text"
        name="phone"
        placeholder="Phone Number "
        label="Phone Number"
        value=" value"
      />
    </div>
  );
};
