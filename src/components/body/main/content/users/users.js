import React, { useEffect } from "react";
//css
import s from './users.module.css'
// components
import UsersItem from "./usersItem/usersItem";
import Preload from '../../../../../commons/preload/preload';
import Pagination from "./pagination/pagination";
// utils
import { funcPagination } from "../../../../../utils/utils";


const Users = (props) => {

   useEffect(() => {
      props.getUsersApi(props.currentPage, props.pageSize);
   }, [props.currentPage]);

   let usersElements = props.allUsers.map(user => {
      return (
         <UsersItem
            {...user}
            key={user.id}
            follow={props.followUserApi}
            unfollow={props.unfollowUserApi} />
      )
   })

   let paginationElements = () => {

      return funcPagination(props.totalCount, props.pageSize, props.currentPage, props.paginationLength)
         .map(item => <Pagination
         key={item}
         item={item}
         currentPage={props.currentPage}
         getUsersApi={props.getUsersApi} />);
   }


   return (
      <>
         {props.isFetching ? <Preload /> : null}
         <div className={s.wrapper}>
            <div className={s.pagination}>
               {paginationElements()}
            </div>
            <div className={s.users}>
               <ul className={s.list}>
                  {usersElements}
               </ul>
            </div>
         </div>
      </>
   );
}

export default Users;
