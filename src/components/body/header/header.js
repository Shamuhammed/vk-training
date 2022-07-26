import React from "react";
//css
import s from './header.module.css'
import Logo from "./logo/logo";

const Header = (props) => {

   return (
      <div className={s.container}>
         <div className='wrapper'>
            <div className={s.headerContent}>
               <div className={s.logo}>
                  <Logo />
               </div>
               <div className={s.main}>
                  main
               </div>
            </div>
         </div>
      </div>
   );
}

export default Header;