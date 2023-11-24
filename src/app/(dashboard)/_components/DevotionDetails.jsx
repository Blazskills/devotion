"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { devotionData } from "@/data/devotionData";
import { BibleVerses } from "./BibleVerses";
import Link from "next/link";
import { useDevotionContext } from "@/context/DataProvider";
import { LoadingState } from "./LoadingState";

export const DevotionDetails = ({ param }) => {
  const { devotionDataBibleVersesFetch,
    devotionVerseData,
    devotionVerseDataError,
    devotionVerseDataLoading,
    devotionVerseDataCount,
    currentYear
  } = useDevotionContext();
  const pathname = usePathname();
  // const currentYear = new Date().getFullYear();
  const [, , month, day] = pathname?.split("/");
  const capitalizedMonth = month?.charAt(0).toUpperCase() + month?.slice(1);

  useEffect(() => {
    devotionDataBibleVersesFetch(month, day);
    return () => {
      devotionDataBibleVersesFetch(capitalizedMonth, day);
    };
  }, [capitalizedMonth, day]);

  const monthFilter = devotionData
    ?.filter((entry) => entry?.month === capitalizedMonth && entry?.day === day)
    ?.map((entry) => entry?.bible_verse);
  // console.log(monthFilter);

  if (devotionVerseDataError) {
    return (
      <div className="w-full h-full flex flex-col">
        <p className="m-auto text-red-500 text-lg">Error Loading data...</p>
      </div>
    );
  }

  if (devotionVerseDataLoading) {
    return <LoadingState />;
  }
  if (devotionVerseDataCount < 1) {
    return (
      <div className="flex flex-col px-5 gap-3">
        <Link href="." className="bg-black px-3 py-1 text-white rounded-md w-fit">
        Back
      </Link>
        <p className="m-auto text-green-500 text-lg text-center">No Bible Verses available for {capitalizedMonth } {day}, {currentYear}</p>
      </div>
    );
  }


  return (
    <div className="w-full pt-5 px-2">
      <Link href="." className="bg-black px-3 py-1 text-white rounded-md">
        Back
      </Link>

      <p className="py-5 capitalize font-normal text-lg">
        {capitalizedMonth} {day}, {currentYear} Devotion
      </p>
      <div className="grid min-[425px]:grid-cols-3 max-md:grid-cols-2 min-[768px]:grid-cols-4 lg:grid-cols-6 xl:grid-cols-10 gap-3 place-items-center">
        {devotionVerseData?.map((bibleVerses) =>
          // bibleVerses?.map((verse) => (
            <BibleVerses
              key={bibleVerses?.id}
              bible_verse_number={bibleVerses?.bible_reading_number}
              bible_name={bibleVerses?.bible_reading}
              bible_chapter={bibleVerses?.chapter}
              bible_from_verse={bibleVerses?.from_verse}
              bible_to_verse={bibleVerses?.to_verse}
            />
          // ))
        )}
      </div>
    </div>
  );
};
