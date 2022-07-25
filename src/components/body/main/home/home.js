import React from "react";
import sketch from '../../../../essets/images/home.jpg'
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
            <img src={sketch} alt="" />
         </div>

      </div>
   );
}

export default Home;