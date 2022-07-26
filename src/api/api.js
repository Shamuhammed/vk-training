import * as axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": "e39cf90b-cf9d-44f5-8c42-812b91283ad6"
   }
});

export const UsersAPI = {
   getUsers(currentPage = 1, pageSize) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => {
            return response;
         });
   },
   followUser(userId) {
      return instance.post(`follow/${userId}`);
   },
   
   unfollowUser(userId) {
      return instance.delete(`follow/${userId}`);
   }
}
export const ProfileAPI = {
   getUsers(currentPage = 1, pageSize) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => {
            return response;
         });
   },
   followUser(userId) {
      return instance.post(`follow/${userId}`);
   },
   
   unfollowUser(userId) {
      return instance.delete(`follow/${userId}`);
   }
}