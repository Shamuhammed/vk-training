import React from "react";
import { NavLink } from 'react-router-dom';
//css
import s from './sideBarLogo.module.css'

const SideBarLogo = (props) => {

   return (
      <div className={s.wrapper}>
         <ul className={s.container}>
               <NavLink className={s.link} to='/'>Logo</NavLink>
         </ul>
      </div>
   );
}

export default SideBarLogo;