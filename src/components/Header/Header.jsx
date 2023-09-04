import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav
      className="w-full
      h-16
      fixed
      top-0
    bg-blue-400
    border-b
    flex justify-center
    items-center
    p-2
    gap-2
    gap-x-4
    m-auto
    text-sm
    md:text-lg"
    >
      <Link href={"/"} className="border rounded p-2 hover:bg-blue-800">
        Início
      </Link>
      <Link href={"/VLM"} className="border rounded p-2 hover:bg-blue-800">
        VLM
      </Link>
      {/* <Link
        href={"/Manufacturers"}
        className="border rounded p-2 hover:bg-blue-800"
      >
        Gaveteiros
      </Link> */}
      <Link href={"#"} className="border rounded p-2 hover:bg-blue-800">
        Como utilizar?
      </Link>
    </nav>
  );
}
