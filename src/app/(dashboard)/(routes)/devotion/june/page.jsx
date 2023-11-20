"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { NumberBar } from "@/app/(dashboard)/_components/NumberBar";
import { devotionData } from "@/data/devotionData";
import { useDevotionContext } from "@/context/DataProvider";
import { LoadingState } from "@/app/(dashboard)/_components/LoadingState";
const JunePage = () => {
  const { devotionData2, devotionDataFetch } = useDevotionContext();

  const pathname = usePathname();
  const pathNameMonth = pathname?.split("/").pop().toLowerCase();
  const capitalizedMonth =
    pathNameMonth?.charAt(0).toUpperCase() + pathNameMonth?.slice(1);
  useEffect(() => {
    devotionDataFetch(pathNameMonth);
    return () => {
      devotionDataFetch(pathNameMonth);
    };
  }, [pathname]);
  if (devotionData2 === undefined) {
    return <LoadingState />;
  }
  if (devotionData2?.length < 1) {
    return <p>No Data</p>;
  }
  return (
    <div className="px-3 py-5">
      <div className="w-full">
        <p className="py-5 capitalize font-bold text-lg">
          {capitalizedMonth} Devotion
        </p>
        {/* <p className="py-5 capitalize" onClick={()=>devotionDataFetch("1")}>{capitalizedMonth} Devotion</p> */}
        <div className="">
          <div className=" grid  max-[280px]:grid-cols-3 max-md:grid-cols-4 min-[768px]:grid-cols-7 lg:grid-cols-10 xl:grid-cols-15 2xl:grid-cols-20 place-items-center gap-y-3">
            {devotionData2?.map((month) => (
              <NumberBar
                key={month?.day}
                days={month?.day}
                month={month?.month}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JunePage;
