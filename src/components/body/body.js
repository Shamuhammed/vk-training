import React from "react";
//css
import s from './body.module.css'
import Main from "./main/main";
//components
import Header from "./header/header";

const Body = (props) => {

   return (
      <div className={s.container}>
         <header className={s.header}>
            <Header />
         </header>
         <main className={s.main}>
            <Main />
         </main>
      </div>
   );
}

export default Body;