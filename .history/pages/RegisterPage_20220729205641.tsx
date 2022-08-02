import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/Assets/piggyvest.svg";
import "../styles"

export default function RegisterPage() {
  return (
    <div className="Register">
      <div className="logo">
        <Link href="#" className="logo">
          <Image
            alt=" logo "
            src={logo}
            height="100"
            width="100"
            layout="intrinsic"
            objectFit="contain"
          />
        </Link>
      </div>
      RegisterPage
    </div>
  );
}
