import React from "react";
// css
import s from './preload.module.css'
// image
import preload from '../../essets/images/preload.gif'

const Preload = (props) => {
   return (
      <div className={s.wrapperPreload}>
         <div className={s.container}>
            <img className={s.image} src={preload} alt='preload' />
         </div>
      </div>
   );
}

export default Preload;
