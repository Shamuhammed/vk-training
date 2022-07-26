import React from "react";
//css
import s from './home.module.css'

const Home = (props) => {

   return (
      <div className={s.wrapper}>

         <p>
            Учебный проект находиться в стадии разработки. <br/><br/>
            На данном этапе работает только ветка users
         </p>
         <div className={s.sketch}>
         </div>

      </div>
   );
}

export default Home;