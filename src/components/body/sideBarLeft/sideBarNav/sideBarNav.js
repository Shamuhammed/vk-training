import React from "react";
import { NavLink } from 'react-router-dom';
//css
import s from './sideBarNav.module.css'

const SideBarNav = (props) => {

   return (
      <div className={s.wrapper}>
         <ul className={s.list}>
            <li className={s.item}>
               <NavLink className={s.link} to='/profile'>Profile</NavLink>
            </li>
            <li className={s.item}>
               <NavLink className={s.link} to='/users'>Users</NavLink>
            </li>
         </ul>
      </div>
   );
}

export default SideBarNav;