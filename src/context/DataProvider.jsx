"use client";

import { devotionData } from "@/data/devotionData";
import { createContext, useContext, useState } from "react";

const DevotionContext = createContext();
import React, { useEffect } from "react";

export { DevotionContext };

// eslint-disable-next-line react/prop-types
export const DevotionContextProvider = ({ children }) => {
  const currentYear = new Date().getFullYear();
  const [devotionData2, setDevotionData2] = useState();
  const [devotionMonthData, setDevotionMonthData] = useState();
  const [devotionMonthDataError, setDevotionMonthDataError] = useState();
  const [devotionMonthDataLoading, setDevotionMonthDataLoading] = useState();
  const [devotionMonthDataCount, setDevotionMonthDataCount] = useState();

  const [devotionVerseData, setDevotionVerseData] = useState();
  const [devotionVerseDataError, setDevotionVerseDataError] = useState();
  const [devotionVerseDataLoading, setDevotionVerseDataLoading] = useState();
  const [devotionVerseDataCount, setDevotionVerseDataCount] = useState();
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

  const devotionDataBibleVersesFetch = async (pathNameMonth, day) => {
    try {
      if (!pathNameMonth) {
        console.log("pathNameMonth is undefined or empty");
        return;
      }
      const url =
        process.env.NEXT_PUBLIC_API_URL +
        "/api/v1/devotion/bible/verses/list/" +
        `${pathNameMonth}/${day}/`;
      setDevotionVerseDataLoading(true);

      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.ok) {
        setDevotionVerseDataLoading(false);

        const response = await res.json();
        console.log(response);
        console.log("Success fetching verses");
        setDevotionVerseDataCount(response?.count);
        setDevotionVerseData(response?.results);
        setDevotionVerseDataError(false);
      } else {
        console.log("Failed to fetch verses");
        setDevotionVerseDataLoading(false);
        setDevotionVerseDataError(true);
      }
      console.log({ pathNameMonth, day });
    } catch (error) {
      console.error("Error during fetch:", error);
      setDevotionVerseDataLoading(false);
      setDevotionVerseDataError(true);
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
        devotionDataBibleVersesFetch,
        devotionVerseData,
        devotionVerseDataError,
        devotionVerseDataLoading,
        devotionVerseDataCount,
        currentYear
      }}
    >
      {children}
    </DevotionContext.Provider>
  );
};
export const useDevotionContext = () => useContext(DevotionContext);
