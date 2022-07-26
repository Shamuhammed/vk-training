import React from "react";
//css
import s from './pagination.module.css'
// components


const Pagination = (props) => {

   return (
      <li className={s.item}>
         <span
            onClick={() => {
               props.getUsersApi(props.item, 10)
            }}
            className={s.number + ' ' + ((props.item === props.currentPage) ? s.active : '')}>
            {props.item}
         </span>
      </li>
   );
}

export default Pagination;
