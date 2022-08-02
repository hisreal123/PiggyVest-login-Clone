import React, { useState } from "react";
import { AllInput } from "./AllInput";
import { InputProps as FormProps } from "./AllProps";

// interface RegisterFormProps {}
export const RegisterForm: React.FC = () => {
  return (
    <div className="RegisterForm">
      <div className="formHead">
        <h2> Create a Secure Account</h2>
        <p className="desc">Welcome to the future of savings and Investments</p>
      </div>
      <div className="inputSection">
        <AllInput
          type="text"
          name="FirstName"
          placeholder="First Name "
          label="Full Name"
          value=" value"
          classStyle="classStyle"
        />

        <AllInput
          type="email"
          name="Email "
          placeholder="Email Address"
          label="Email Address"
          value=" value"
          classStyle="classStyle"
        />

        <AllInput
          type="text"
          name="Phone"
          placeholder="Phone Number "
          label="Phone Number"
          value=" value"
          classStyle="classStyle"
        />

        <AllInput
          type="Password"
          name="Password"
          placeholder="Password"
          label="Password"
          value=" value"
          classStyle="classStyle"
        />
        <AllInput
          type="text"
          name="Referrer"
          placeholder="Referrer Phone or Code"
          label="Referrer Phone or Promo Code (Optional)"
          value=" value"
          classStyle="classStyle"
        />

        <select name="" id="" className="selection">
          <option value="Facebook selected" className="option">
            {" "}
            Click To Select
          </option>
          <option value="Facebook " className="option">
            {" "}
            Facebook
          </option>
          <option value="Instagram " className="option">
            {" "}
            Instagram
          </option>
          <option value="Twitter " className="option">
            {" "}
            Twitter
          </option>
          <option value="Google  " className="option">
            {" "}
            Google Search
          </option>
          <option value="Linkden " className="option">
            {" "}
            Linkden
          </option>
        </select>
      </div>
    </div>
  );
};
