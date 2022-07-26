import React from "react";
//css
import s from './profile.module.css';
import ProfileData from "./profileData/profileData";
import ProfileImage from "./profileImage/profileImage";

const Profile = (props) => {

   return (
      <div className={s.container}>
         <div className={s.narrowColumn}>
            <ProfileImage />
         </div>
         <div className={s.wideColumn}>
            <ProfileData />
         </div>
      </div>
   );
}

export default Profile;