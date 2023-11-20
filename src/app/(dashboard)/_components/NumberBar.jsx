import Link from "next/link";
import React from "react";

export const NumberBar = ({ days, month }) => {
  const href = `/devotion/${month}/${days}`.toLowerCase();
  return (
    <Link href={href}>
      <div className="w-16 h-16 bg-gray-800 text-white flex rounded-md hover:bg-gray-600">
        <p className="m-auto md:text-2xl text-center">{days}</p>
      </div>
    </Link>
  );
};
