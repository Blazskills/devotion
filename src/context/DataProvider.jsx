"use client";

import { devotionData } from "@/data/devotionData";
import { createContext, useContext, useState } from "react";

const DevotionContext = createContext();
import React, { useEffect } from "react";

export { DevotionContext };

// eslint-disable-next-line react/prop-types
export const DevotionContextProvider = ({ children }) => {
  const [devotionData2, setDevotionData2] = useState();
  const [devotionMonthData, setDevotionMonthData] = useState();
  const [devotionMonthDataError, setDevotionMonthDataError] = useState();
  const devotionDataFetch = (pathNameMonth) => {
    const capitalizedMonth =
      pathNameMonth?.charAt(0).toUpperCase() + pathNameMonth?.slice(1);
    const monthFilter = devotionData?.filter(
      (entry) => entry.month === capitalizedMonth
    );
    setDevotionData2(monthFilter);
  };


  // const devotionDataMonthFetch = async (pathNameMonth) => {
  //   const capitalizedMonth =
  //   pathNameMonth?.charAt(0).toUpperCase() + pathNameMonth?.slice(1);
  //   const url =
  //     process.env.NEXT_PUBLIC_API_URL + `/api/v1/devotion/month/list${capitalizedMonth}/`;
  //   const res = await fetch(url, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     withCredentials: true,
  //   });
  //   if (res.ok) {
  //   setDevotionMonthDataError(false);

  //     const response = await res.json();
  //     console.log(response?.results)
  //     console.log("Success fetching");
  //     setDevotionMonthData(response?.results)
  //   } else {
  //     setDevotionMonthDataError(true);
  //     console.log("failed to fetch");
  //     console.log(devotionMonthDataError)
  //   }
  //   console.log(devotionMonthDataError)
  //   console.log(`Fetch online resource ${pathNameMonth} ${url}`);
  // };


  const devotionDataMonthFetch = async (pathNameMonth) => {
    try {
      const capitalizedMonth =
        pathNameMonth?.charAt(0).toUpperCase() + pathNameMonth?.slice(1);
      const url =
        process.env.NEXT_PUBLIC_API_URL + `/api/v1/devotion/month/list/${capitalizedMonth}/`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
  
      if (res.ok) {
        const response = await res.json();
        console.log(response?.results);
        console.log("Success fetching");
        setDevotionMonthData(response?.results);
        setDevotionMonthDataError(false);
      } else {
        console.log("Failed to fetch");
        setDevotionMonthDataError(true);
      }
    } catch (error) {
      // console.error("Error during fetch:", error);
      setDevotionMonthDataError(true);
    }
  };
  return (
    <DevotionContext.Provider
      value={{
        devotionData2,
        setDevotionData2,
        devotionMonthData,
        devotionDataFetch,
        devotionDataMonthFetch,
        devotionMonthDataError,
      }}
    >
      {children}
    </DevotionContext.Provider>
  );
};
export const useDevotionContext = () => useContext(DevotionContext);
