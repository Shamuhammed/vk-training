import React from "react";
// css
import s from './button.module.css'

const Button = (props) => {
   return (
      <a className={s.link} href='#'>
         {props.button}
      </a>
   );
}

export default Button;
