import React from "react";
import Link from "next/link";

export default function ButtonBase({ route, text, Icon = undefined }) {
  const hasIcon = Icon !== undefined; //Verified if an icon exists
  return (
    <div>
      <Link href={route}>
        <div className="w-fit flex items-center gap-x-3 bg-gray-100 text-black shadow-lg p-3 rounded-lg">
          <p className="text-xl ">{text}</p>
          {hasIcon && <Icon size={"1.5em"}></Icon>}
        </div>
      </Link>
    </div>
  );
}
