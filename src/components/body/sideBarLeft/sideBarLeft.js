import React from "react";
import { NavLink } from 'react-router-dom';
//css
import s from './sideBarLeft.module.css'
import SideBarNav from "./sideBarNav/sideBarNav";
import SideBarSettings from "./sideBarSettings/sideBarSettings";
import SideBarLogo from "./sideBarLogo/sideBarLogo";

const SideBarLeft = (props) => {

   return (
      <div className={s.wrapper}>
         <SideBarLogo />
         <SideBarNav />
         <SideBarSettings />
      </div>
   );
}

export default SideBarLeft;