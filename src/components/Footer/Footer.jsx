import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer
      className="w-full
      h-16
      fixed
      bottom-0
      border-t
    bg-blue-400
    flex justify-center
    items-center
    p-2
    gap-2
    gap-x-4
    m-auto
    text-xl"
    >
      <Link href={"#"} className="border rounded p-2 hover:bg-blue-800">
        Contato
      </Link>
      <Link href={"#"} className="border rounded p-2 hover:bg-blue-800">
        Manut 721
      </Link>
    </footer>
  );
}
