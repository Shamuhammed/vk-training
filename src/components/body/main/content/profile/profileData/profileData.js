import React from "react";
import Button from "../../../../../../commons/button/button";
//css
import s from './profileData.module.css';

const ProfileData = (props) => {

   return (
      <div className={s.container}>
         <div className={s.row}>
            <div>
               <div className={s.userName}>Amanda White</div>
               <div className={s.userStatus}>Blablabla</div>
            </div>
         </div>
         <div className={s.row}>
            <div>
               <div className={s.mainInfo}>
                  aaaa
               </div>
            </div>
         </div>
         <div className={s.row}></div>
      </div>
   );
}

export default ProfileData;