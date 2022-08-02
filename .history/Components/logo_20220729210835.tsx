import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/Assets/piggyvest.svg";

interface imageProps {
  src: string;
}
export const Logo: React.FC<imageProps> = ({ src }) => {
  return (
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
  );
};
