import React from "react";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as CgIcons from "react-icons/cg";
// import * as FaIcons from "react-icons/fa";

export const SidebarData = [
    {
        title: "Home",
        path: "/login/dashboard",
        icon: <AiIcons.AiFillHome/>,
        cName:  'nav-text'
    },
    {
        title: "Profile",
        path: "/login/dashboard/profile",
        icon: <CgIcons.CgProfile/>,
        cName:  'nav-text'
    },
    {
        title: "Buy",
        path: "/login/dashboard/buy",
        icon: <AiIcons.AiOutlineShoppingCart/>,
        cName:  'nav-text'
    },
    {
        title: "Logout",
        path: "/login",
        icon: <MdIcons.MdOutlineLogout/>,
        cName:  'nav-text'
    }
]