"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { devotionData } from "@/data/devotionData";
import { BibleVerses } from "./BibleVerses";
import Link from "next/link";

export const DevotionDetails = ({ param }) => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  const [, , month, day] = pathname?.split("/");
  const capitalizedMonth = month?.charAt(0).toUpperCase() + month?.slice(1);
  const monthFilter = devotionData
    ?.filter((entry) => entry?.month === capitalizedMonth && entry?.day === day)
    ?.map((entry) => entry?.bible_verse);
  console.log(monthFilter);
  return (
    <div className="w-full pt-5 px-2">
      <Link href="." className="bg-black px-3 py-1 text-white rounded-md">
       Back
      </Link>

      <p className="py-5 capitalize font-normal text-lg">
        {capitalizedMonth} {day}, {currentYear} Devotion
      </p>
      <div className="grid min-[425px]:grid-cols-3 max-md:grid-cols-2 min-[768px]:grid-cols-4 lg:grid-cols-6 xl:grid-cols-10 gap-3 place-items-center">
        {monthFilter?.map((bibleVerses) =>
          bibleVerses?.map((verse) => (
            <BibleVerses
              key={verse?.position}
              bible_name={verse?.bible_name}
              bible_chapter={verse?.chapter}
              bible_from_verse={verse?.from_verse}
              bible_to_verse={verse?.to_verse}
            />
          ))
        )}
      </div>
    </div>
  );
};
