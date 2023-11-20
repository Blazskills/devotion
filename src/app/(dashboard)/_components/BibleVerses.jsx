import React from "react";

export const BibleVerses = ({
  bible_name,
  bible_chapter,
  bible_from_verse,
  bible_to_verse,
}) => {
  return (
    <div className="bg-slate-500 w-fit px-5 py-2 rounded-md text-white">
      <p className="min-[768px]:text-[15px] min-[1440px]:text-[16px] text-[17px] capitalize">
        {bible_name}{" "}
      </p>
      <div className="flex space-x-1">
        <p>{bible_chapter}</p>
        {bible_from_verse && <p>vs</p>}

        <p>{bible_from_verse}</p>
        {bible_to_verse && <p>-</p>}

        <p>{bible_to_verse}</p>
      </div>
    </div>
  );
};
