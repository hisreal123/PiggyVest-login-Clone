import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/Assets/piggyvest.svg";

export default function RegisterPage() {
  return (
    <div className="Register">
      <div className="logo">
        <Link href="#">
          <Image
            alt=" logo "
            src={logo}
            height="100"
            width="100"
            layout=""
            objectFit="contain"
          />
        </Link>
      </div>
      RegisterPage
    </div>
  );
}
