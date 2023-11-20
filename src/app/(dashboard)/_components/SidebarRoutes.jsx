"use client";

import { SidebarItem } from "./SidebarItem";
import { links } from "../../../data/navData";

export const SidebarRoutes = () => {
  const typeFilter = "Devotion";
  const userPermissions1 = [
    "can_deleted_student",
    "can_add_student",
    "can_view_student_dashboard",
  ];
  const userPermissions = ["can_view_devotion_dashboard"];
  const userLinks = links?.find((link) => link?.role === typeFilter);
  let filteredLinks;
  if (userLinks) {
    // If a matching role is found in 'links'
    filteredLinks = userLinks?.navLinks?.filter((navLink) => {
      return navLink?.routePermission?.some((permission) =>
        userPermissions?.includes(permission)
      );
    });

    //   console.log(filteredLinks);
  } else {
    console.log("User type not found in links");
  }

  // console.log(filteredLinks);
  return (
    
    <div className="flex flex-col w-full">
      {filteredLinks.map((link) => (

        <SidebarItem
          key={link.href}
          icon={link.icon}
          label={link.name}
          href={link.href}
        />
      ))}
    </div>
  );
};
