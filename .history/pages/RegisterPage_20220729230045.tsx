import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Logo } from "../Components/logo";
import { RegisterForm } from "../Components/RegisterForm";
import logo from "../public/Assets/piggyvest.svg";

export default function RegisterPage() {
  return (
    <div className="Register ">
      <Logo src={logo} classStyle={logo}/>

      <div className="wrapper ">
        <RegisterForm />
      </div>
    </div>
  );
}
