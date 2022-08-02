import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Logo } from "../Components/logo";
import { RegisterForm } from "../Components/registerForm";
import logo from "../public/Assets/piggyvest.svg";

export default function RegisterPage() {
  return (
    <div className="Register ">
      <Logo src={logo} />
      <RegisterForm />
    </div>
  );
}
