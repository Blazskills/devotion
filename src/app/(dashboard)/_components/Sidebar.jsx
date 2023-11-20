import React from "react";
import { Logo } from "./Logo";
import { SidebarRoutes } from "./SidebarRoutes";
import Link from "next/link";
export const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-auto bg-white shadow-sm scrollbar-thin scrollbar-thumb-blue-200/[0.1] scrollbar-rounded-xl">
      <div className="py-3 mx-auto">
        {/* <Logo /> */}
        <div className="my-5">
          <Link
            href="/"
            className="text-white font-extrabold text-xl bg-slate-900 rounded-lg px-7 py-6"
          >
            TAC
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};
