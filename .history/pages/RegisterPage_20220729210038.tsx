import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/Assets/piggyvest.svg";

export default function RegisterPage() {
  return (
    <div className="Register">
      <div className="logo">
        <Link href="#" className="logo">
          <Image
            alt=" logo "
            src={logo}
            height="190"
            width="36"
            layout="responsive"
            objectFit="contain"
          />
        </Link>
      </div>
      RegisterPage
    </div>
  );
}
