import React from "react";
import Button from "../../../../../../commons/button/button";
//css
import s from './profileImage.module.css';

const ProfileImage = (props) => {

   return (
      <div className={s.container}>
         <div className={s.image}>
            <img
               // src='https://sun9-5.userapi.com/impf/PGhJK7gfapr0UNXR4Muc-1zMjuOELeF9XegNGg/Ri6NIPOEaww.jpg?size=960x604&quality=96&sign=95ea1ba7c5987f119983440eb5e0cc27&c_uniq_tag=jKuHadaUVsHFjXnb8HHrUc_MVbOJYFjabeePBTdVIHI&type=album'
               src='https://on-desktop.com/wps/2019Girls___Beautyful_Girls_Beautiful_girl_in_a_dress_lying_on_the_grass_with_dandelions_135675_.jpg'
               alt='' />
         </div>
         <div className={s.buttons}>
            <div className={s.button}>
               <Button button='Написать сообщение' />
            </div>
            <div className={s.button}>
               <Button button='Добавить в друзья' />
            </div>
         </div>
      </div>
   );
}

export default ProfileImage;