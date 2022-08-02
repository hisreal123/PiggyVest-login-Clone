import React, { useState } from "react";
import { AllInput } from "./AllInput";
import { InputProps as FormProps } from "./AllProps";

interface RegisterFormProps {}
export const RegisterForm: () => JSX.Element = () => {
  const [input, setInput] = useState({});
  return (
    <div>
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
        label="Email Adress"
        value=" value"
      />

      <AllInput
        type="text"
        name="phone"
        placeholder="First Name "
        label="Full Name"
        value=" value"
      />
    </div>
  );
};
