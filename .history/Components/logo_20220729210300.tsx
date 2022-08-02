import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../";

export default function logo() {
  return (
    <div className="Register">
      <div className="logo">
        <Link href="#" className="logo">
          <Image
            alt=" logo "
            src={logo}
            height="36"
            width="199"
            objectFit="cover"
          />
        </Link>
      </div>
    </div>
  );
}