import React from "react";
//css
import s from './body.module.css'
import Main from "./main/main";
//components
import SideBarLeft from "./sideBarLeft/sideBarLeft";
import SideBarRight from "./sideBarRight/sideBarRight";

const Body = (props) => {

   return (
      <div className={s.wrapper}>
         <header className={s.header}>
            <h2>header</h2>
         </header>
         <main className={s.main}>
            <Main />
         </main>
         <aside className={s.sideBarLeft}>
            <SideBarLeft />
         </aside>
         <aside className={s.sideBarRight}>
            <SideBarRight />
         </aside>
      </div>
   );
}

export default Body;