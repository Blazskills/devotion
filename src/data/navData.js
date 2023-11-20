import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
  AiOutlineFileProtect,
} from "react-icons/ai";
import { FiShoppingBag, FiEdit, FiPieChart } from "react-icons/fi";
import { BsKanban, BsBarChart } from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine, RiStockLine } from "react-icons/ri";
import { GiLouvrePyramid } from "react-icons/gi";
import { FaRegBookmark, FaRegSun,  } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { FcDepartment,  } from "react-icons/fc";
import { Layout } from "lucide-react";
export const links = [
  {
    title: "Devotion Months",
    role: "Devotion",
    navLinks: [
      {
        routePermission: ["can_view_devotion_dashboard"],
        name: "devotion",
        href: "/devotion/home",
        icon: Layout,
      },
      {
        routePermission: ["can_view_devotion_dashboard"],
        name: "January",
        href: "/devotion/january",
        icon: FaRegBookmark,
      },
      {
        routePermission: ["can_view_devotion_dashboard"],
        href: "/devotion/february",
        name: "February",
        icon: FaRegBookmark,
      },
      {
        routePermission: ["can_view_devotion_dashboard"],
        href: "/devotion/march",
        name: "March",
        icon: FaRegBookmark,
      },
      {
        routePermission: ["can_view_devotion_dashboard"],
        name: "April",
        href: "/devotion/april",
        icon: FaRegBookmark,
      },
      {
        routePermission: ["can_view_devotion_dashboard"],
        name: "May",
        href: "/devotion/may",
        icon: FaRegBookmark,
      },
      {
        routePermission: ["can_view_devotion_dashboard"],
        href: "/devotion/june",
        name: "June",
        icon: FaRegBookmark,
      },
      {
        routePermission: ["can_view_devotion_dashboard"],
        href: "/devotion/july",
        name: "July",
        icon: FaRegBookmark,
      },
      {
        routePermission: ["can_view_devotion_dashboard"],
        name: "August",
        href: "/devotion/august",
        icon: FaRegBookmark,
      },
      {
        routePermission: ["can_view_devotion_dashboard"],
        name: "September",
        href: "/devotion/september",
        icon: FaRegBookmark,
      },
      {
        routePermission: ["can_view_devotion_dashboard"],
        href: "/devotion/october",
        name: "October",
        icon: FaRegBookmark,
      },
      {
        routePermission: ["can_view_devotion_dashboard"],
        href: "/devotion/november",
        name: "November",
        icon: FaRegBookmark,
      },
      {
        routePermission: ["can_view_devotion_dashboard"],
        href: "/devotion/december",
        name: "December",
        icon: FaRegBookmark,
      },
    ],
  },

  {
    title: "Sunday School",
    role: "Sunday_School",
    navLinks: [
      // Regular staff start here
      {
        routePermission: ["can_view_staff_dashboard", "can_view_super_dashboard"],
        name: "dashboard",
        href: "/",
        icon: Layout,
      },
      {
        routePermission: ["can_view_staff_dashboard", "can_view_super_dashboard"],
        name: "student",
        href: "student",
        icon: PiStudentFill,
      },
      {
        routePermission: ["can_view_staff_dashboard", "can_view_super_dashboard"],
        name: "courses",
        href: "courses",
        icon: PiStudentFill,
      },
      {
        routePermission: ["can_view_staff_dashboard", "can_view_super_dashboard"],
        name: "result",
        href: "result",
        icon: FcDepartment,
      },
      {
        routePermission: ["can_view_staff_dashboard", "can_view_super_dashboard"],
        name: "notification",
        href: "notification",
        icon: FiShoppingBag,
      },
      {
        routePermission: ["can_view_staff_dashboard", "can_view_super_dashboard"],
        name: "Course Approval",
        href: "course_approval",
        icon: FiShoppingBag,
      },

      // Regular staff end here

      // Finance route start here

      {
        routePermission: ["can_view_finance_payment_dashboard","can_view_super_dashboard"],
        name: "payments",
        href: "finance_payment",
        icon: AiOutlineShoppingCart,
      },
      {
        routePermission: ["can_view_finance_salary_dashboard","can_view_super_dashboard"],
        name: "salary",
        href: "finance_salary",
        icon: RiContactsLine,
      },
      {
        routePermission: ["can_view_finance_expenses_dashboard","can_view_super_dashboard"],
        name: "expenses",
        href: "finance_expenses",
        icon: RiContactsLine,
      },
      // Finance route end here

      // super admin route start here

      {
        routePermission: ["can_view_super_dashboard"],
        name: "All Students",
        href: "admin_all_students",
        icon: AiOutlineCalendar,
      },
      {
        routePermission: ["can_view_super_dashboard"],
        name: "All Staffs",
        href: "admin_all_satff",
        icon: AiOutlineCalendar,
      },
      {
        routePermission: ["can_view_super_dashboard"],
        name: "settings",
        href: "settings",
        icon: BsKanban,
      },
      {
        routePermission: ["can_view_super_dashboard"],
        name: "results",
        href: "results",
        icon: FiEdit,
      },
      {
        routePermission: ["can_view_super_dashboard"],
        name: "reports",
        href: "reports",
        icon: AiOutlineStock,
      },
      {
        routePermission: ["can_view_super_dashboard"],
        name: "manage semesters",
        href: "semesters",
        icon: AiOutlineAreaChart,
      },
      {
        routePermission: ["can_view_super_dashboard"],
        name: "manage sessions",
        href: "sessions",
        icon: RiStockLine,
      },
      {
        routePermission: ["can_view_super_dashboard"],
        name: "timetable",
        href: "timetable",
        icon: BsBarChart,
      },
      {
        routePermission: ["can_view_super_dashboard"],
        name: "news",
        href: "news",
        icon: BsBarChart,
      },
      {
        routePermission: ["can_view_super_dashboard"],
        name: "notification",
        href: "school_notifications",
        icon: BsBarChart,
      },
      // super admin route end here
    ],
  },
];
