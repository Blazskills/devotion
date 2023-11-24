"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NumberBar } from "@/app/(dashboard)/_components/NumberBar";
import { useDevotionContext } from "@/context/DataProvider";
import { LoadingState } from "@/app/(dashboard)/_components/LoadingState";
const JanuaryPage = () => {
  const {
    devotionMonthData,
    devotionDataFetch,
    devotionMonthDataError,
    devotionDataMonthFetch,
  } = useDevotionContext();

  const pathname = usePathname();
  const pathNameMonth = pathname?.split("/").pop().toLowerCase();
  const capitalizedMonth =
    pathNameMonth?.charAt(0).toUpperCase() + pathNameMonth?.slice(1);
  useEffect(() => {
    devotionMonthDataError;
    devotionDataFetch(pathNameMonth);
    devotionDataMonthFetch(pathNameMonth);
    return () => {
      devotionDataFetch(pathNameMonth);
      devotionDataMonthFetch();
    };
  }, [pathname, pathNameMonth, devotionMonthDataError]);

  if (devotionMonthDataError) {
    return <div className="w-full h-full flex flex-col"><p className="m-auto text-red-500 text-lg">Error Loading data...</p></div>;
  }

  if (devotionMonthData === undefined) {
    return <LoadingState />;
  }
  if (devotionMonthData?.length < 1) {
    return <div className="w-full h-full flex flex-col"><p className="m-auto text-green-500 text-lg">No Data...</p></div>;
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
            {devotionMonthData?.map((month) => (
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

export default JanuaryPage;
