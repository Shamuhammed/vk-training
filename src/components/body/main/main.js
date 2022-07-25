import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./home/home";
//css
import s from './main.module.css'
//components
import Profile from "./profile/profile";
import UsersContainer from "./users/usersContainer";

const Main = (props) => {

   return (
      <div className={s.wrapper}>
         <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/profile' element={ <Profile /> }/>
            <Route path='/users' element={ <UsersContainer />}/>
         </Routes>
      </div>
   );
}

export default Main;