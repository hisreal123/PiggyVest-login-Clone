import React, { useState } from "react";
import { AllInput } from "./AllInput";
import { InputProps as FormProps } from "./AllProps";

// interface RegisterFormProps {}
export const RegisterForm: React.FC = () => {
  return (
    <div className="RegisterForm">
      <div className="formHead">
        <h1> Create a Secure Account</h1>
        <p className="desc"> Welcome to the future of savings and Investment</p>

      </div>
      <div className="inputSection">
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
    </div>
  );
};
