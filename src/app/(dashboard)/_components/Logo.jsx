import Image from "next/image";
import React from "react";
import schlogo from "../../../../public/images/schlogo.png";
export const Logo = () => {
  return (
    <div className="w-[90px] h-[90px]">
      <Image src={schlogo} alt="Philomath Logo" />
    </div>
  );
};
