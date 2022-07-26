import React from "react";
import { NavLink } from 'react-router-dom'
import logo from '../../../../essets/images/vk.svg'
//css
import s from './logo.module.css'

const Logo = (props) => {

   return (
      <div className={s.container}>
         <NavLink to='/' className={s.link}>
            <div className={s.image}>
               <img src={logo} alt='vk' />
            </div>
         </NavLink>
      </div>
   );
}

export default Logo;