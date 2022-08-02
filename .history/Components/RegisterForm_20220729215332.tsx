import React from "react";
import { AllInput } from "./AllInput";
import { InputProps as FormProps } from "./AllProps";

interface RegisterFormProps {

}
export const RegisterForm: () => JSX.Element = () => {
  const [, set] = useState(second)
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
