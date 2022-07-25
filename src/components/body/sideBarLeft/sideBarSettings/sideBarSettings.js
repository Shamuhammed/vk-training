import React from "react";
import { NavLink } from 'react-router-dom';
//css
import s from './sideBarSettings.module.css'

const SideBarSettings = (props) => {

   return (
      <div className={s.wrapper}>
         <ul className={s.list}>
            <li className={s.item}>
               <NavLink className={s.link} to='/settings'>Settings</NavLink>
            </li>
         </ul>
      </div>
   );
}

export default SideBarSettings;