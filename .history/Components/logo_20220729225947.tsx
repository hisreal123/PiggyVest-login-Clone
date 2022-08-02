import Image from "next/image";
import Link from "next/link";
import React from "react";

interface imageProps {
  src: string;
  classStyle
}

export const Logo: React.FC<imageProps> = ({ src }) => {
  return (
    <div className="logoWrap">
      <Link href="#" className="logo">
        <Image
          alt=" logo "
          src={src}
          height="36"
          width="199"
          objectFit="cover"
        />
      </Link>
    </div>
  );
};
