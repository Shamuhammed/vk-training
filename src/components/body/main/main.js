import React from "react";
// components
import Content from './content/content';
import SideBarLeft from './sideBarLeft/sideBarLeft';
// css
import s from './main.module.css'

const Main = (props) => {

   return (
      <div className='wrapper'>
         <div className={s.container}>
            <div className={s.content}>
               <Content />
            </div>
            <div className={s.sideBar}>
               <SideBarLeft />
            </div>
         </div>
      </div>
   );
}

export default Main;