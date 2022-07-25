import React from "react";
// css
import s from './avatar.module.css'
// image
import uncnow from '../../essets/images/uncnow.png'

const Avatar = (props) => {
   return (
      <div className={s.wrapper}>
         <img
            className={s.image}
            src={props.src ? props.src : uncnow}
            alt="photo" />
      </div>
   );
}

export default Avatar;
