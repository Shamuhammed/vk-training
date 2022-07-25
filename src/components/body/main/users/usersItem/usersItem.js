import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "../../../../../commons/avatar/avatar";
import { statusLenght } from "../../../../../utils/utils";
//css
import s from './usersItem.module.css'
// components

const UsersItem = (props) => {

   return (
      <li className={s.wrapper}>
         <div className={s.info}>
            <div className={s.image}>
               <NavLink className={s.link} to={'/profile'}>
                  <Avatar src={props.photos ? props.photos.small : null} />
               </NavLink>
            </div>
            <div className={s.data}>
               <h5 className={s.name}>
                  {props.name ? props.name : 'Uncnow'}
               </h5>
               <p className={s.status}>
                  {props.status ? statusLenght(props.status, 56) : 'No status'}
               </p>
            </div>
         </div>
         <div>
            <button
               className={s.button + ' ' + ((!props.followed) ? '' : s.active)}
               onClick={() => {
                  (!props.followed) ? props.follow(props.id) : props.unfollow(props.id)
               }}
            >
               {(!props.followed) ? 'Follow' : 'Unfollow'}
            </button>
         </div>
      </li>
   );
}

export default UsersItem;
