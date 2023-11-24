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
  const [devotionMonthDataLoading, setDevotionMonthDataLoading] = useState();
  const [devotionMonthDataCount, setDevotionMonthDataCount] = useState();
  const devotionDataFetch = (pathNameMonth) => {
    const capitalizedMonth =
      pathNameMonth?.charAt(0).toUpperCase() + pathNameMonth?.slice(1);
    const monthFilter = devotionData?.filter(
      (entry) => entry.month === capitalizedMonth
    );
    setDevotionData2(monthFilter);
  };

  // const devotionDataMonthFetch = async (pathNameMonth) => {
  //   try {
  //     const capitalizedMonth =
  //       pathNameMonth?.charAt(0).toUpperCase() + pathNameMonth?.slice(1);

  //     const url =
  //       process.env.NEXT_PUBLIC_API_URL +
  //       `/api/v1/devotion/month/list/${capitalizedMonth}/`;
  //       console.log({capitalizedMonth, pathNameMonth})
  //     setDevotionMonthDataLoading(true);
  //     const res = await fetch(url, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       withCredentials: true,
  //     });

  //     if (res.ok) {
  //       setDevotionMonthDataLoading(false);
  //       const response = await res.json();
  //       console.log(response?.results);
  //       console.log("Success fetching");
  //       setDevotionMonthDataCount(response?.results?.length);
  //       setDevotionMonthData(response?.results);
  //       setDevotionMonthDataError(false);
  //     } else {
  //       console.log("Failed to fetch");
  //       setDevotionMonthDataLoading(false);

  //       setDevotionMonthDataError(true);
  //     }
  //   } catch (error) {
  //     // console.error("Error during fetch:", error);
  //     setDevotionMonthDataLoading(false);

  //     setDevotionMonthDataError(true);
  //   }
  // };

  const devotionDataMonthFetch = async (pathNameMonth) => {
    try {
      // Check if pathNameMonth is undefined or empty
      if (!pathNameMonth) {
        console.log("pathNameMonth is undefined or empty");
        return;
      }
  
      const capitalizedMonth =
        pathNameMonth.charAt(0).toUpperCase() + pathNameMonth.slice(1);
  
      const url =
        process.env.NEXT_PUBLIC_API_URL +
        `/api/v1/devotion/month/list/${capitalizedMonth}/`;
  
      console.log({ capitalizedMonth, pathNameMonth });
  
      setDevotionMonthDataLoading(true);
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
  
      if (res.ok) {
        setDevotionMonthDataLoading(false);
        const response = await res.json();
        console.log(response?.results);
        console.log("Success fetching");
        setDevotionMonthDataCount(response?.results?.length);
        setDevotionMonthData(response?.results);
        setDevotionMonthDataError(false);
      } else {
        console.log("Failed to fetch");
        setDevotionMonthDataLoading(false);
        setDevotionMonthDataError(true);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      setDevotionMonthDataLoading(false);
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
        devotionMonthDataLoading,
        devotionMonthDataCount,
      }}
    >
      {children}
    </DevotionContext.Provider>
  );
};
export const useDevotionContext = () => useContext(DevotionContext);
