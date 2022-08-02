import Image from "next/image";
import Link from "next/link";
import React from "react";

interface imageProps {
  src: string;
  classStyle: string
}

export const Logo: React.FC<imageProps> = ({ src, classStyle }) => {
  return (
    <div className=logo>
      <Link href="#">
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
