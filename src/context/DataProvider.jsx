"use client";

import { devotionData } from "@/data/devotionData";
import { createContext, useContext, useState } from "react";

const DevotionContext = createContext();

export { DevotionContext };

// eslint-disable-next-line react/prop-types
export const DevotionContextProvider = ({ children }) => {
  const [devotionData2, setDevotionData2] = useState();
  const devotionDataFetch = (pathNameMonth) => {
    const capitalizedMonth =
      pathNameMonth?.charAt(0).toUpperCase() + pathNameMonth?.slice(1);
    const monthFilter = devotionData?.filter(
      (entry) => entry.month === capitalizedMonth
    );
    setDevotionData2(monthFilter)
  };
  return (
    <DevotionContext.Provider
      value={{
        devotionData2,
        setDevotionData2,
        devotionDataFetch,
      }}
    >
      {children}
    </DevotionContext.Provider>
  );
};
export const useDevotionContext = () => useContext(DevotionContext);
