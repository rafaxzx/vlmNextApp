import React from "react";
import Link from "next/link";

export default function ButtonBase({ route, text, Icon }) {
  return (
    <div>
      <Link href={route}>
        <div className="w-fit flex items-center gap-x-3 bg-gray-100 text-black shadow-lg p-3 rounded-lg">
          <p className="text-xl ">{text}</p>
          <Icon size={"1em"}></Icon>
        </div>
      </Link>
    </div>
  );
}
