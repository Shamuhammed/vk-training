import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./home/home";
//components
import Profile from "./profile/profile";
import UsersContainer from "./users/usersContainer";
//css
import s from './content.module.css'

const Content = (props) => {

   return (
      <div className={s.container}>
         <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/profile' element={ <Profile /> }/>
            <Route path='/users' element={ <UsersContainer />}/>
         </Routes>
      </div>
   );
}

export default Content;