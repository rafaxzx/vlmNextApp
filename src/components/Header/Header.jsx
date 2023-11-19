import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav
      className="w-full
      sticky
      top-0
      bg-gray-600
      border-b
      flex justify-center
      items-center
      p-2
      gap-2
      gap-x-4
      mx-auto
      text-sm
      md:text-lg"
    >
      <Link href={"/"} className="border rounded p-2 hover:bg-gray-800">
        Início
      </Link>
      <Link href={"/VLM"} className="border rounded p-2 hover:bg-gray-800">
        Gerenciar VLM
      </Link>
      {/* <Link
        href={"/Manufacturers"}
        className="border rounded p-2 hover:bg-gray-800"
      >
        Gaveteiros
      </Link> */}
      <Link href={"/HowToUse"} className="border rounded p-2 hover:bg-gray-800">
        Como utilizar?
      </Link>
    </nav>
  );
}
