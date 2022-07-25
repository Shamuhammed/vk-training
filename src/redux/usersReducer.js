import { UsersAPI } from "../api/api";

const SET_USERS = 'usrsReducer/SET_USERS';
const FOLLOW_USER = 'usrsReducer/FOLLOW_USER';
const TOTAL_COUNT = 'usrsReducer/TOTAL_COUNT';
const PAGE_SIZE = 'usrsReducer/PAGE_SIZE';
const CURRENT_PAGE = 'usrsReducer/CURRENT_PAGE';
const IS_FETCHING = 'usrsReducer/IS_FETCHING';

let initialState = {
   allUsers: [],
   totalCount: null,
   pageSize: 8,
   currentPage: 1,
   paginationLength: 19,
   isFetching: false

}

const usersReducer = (state = initialState, action = null) => {
   switch (action.type) {
      case SET_USERS:
         return {
            ...state,
            allUsers: action.users
         }

      case TOTAL_COUNT:
         return {
            ...state,
            totalCount: action.totalCount
         }
      

      case CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.currentPage
         }

      case FOLLOW_USER:
         return {
            ...state,
            allUsers: state.allUsers.map(user => {
               if (user.id === action.userId) {
                  return { ...user, followed: action.follow };
               }
               return user;
            })
         }

      case IS_FETCHING:
         return {
            ...state,
            isFetching: action.isFetching
         }
      
      default:
         return state;
   }

}
// action creaters
const setUsersList = (users) => ({ type: SET_USERS, users });
const setTotalCount = (totalCount) => ({ type: TOTAL_COUNT, totalCount });
const setPageSize = (pageSize) => ({ type: PAGE_SIZE, pageSize });
const setCurrentPage = (currentPage) => ({ type: CURRENT_PAGE, currentPage });
const followUser = (userId, follow) => ({ type: FOLLOW_USER, userId, follow });
const setIsFetching = (isFetching) => ({ type: IS_FETCHING, isFetching });
// thunks
export const getUsersApi = (currentPage, pageSize) => async (dispatch) => {
   dispatch(setIsFetching(true))
   let response = await UsersAPI.getUsers(currentPage, pageSize);
   dispatch(setUsersList(response.data.items));
   dispatch(setTotalCount(response.data.totalCount));
   dispatch(setCurrentPage(currentPage));
   dispatch(setIsFetching(false))
}
export const followUserApi = (userId) => async (dispatch) => {
   let response = await UsersAPI.followUser(userId);
   if (response.data.resultCode === 0) {
      dispatch(followUser(userId, true));
   }
}
export const unfollowUserApi = (userId) => async (dispatch) => {
   let response = await UsersAPI.unfollowUser(userId);
   if (response.data.resultCode === 0) {
      dispatch(followUser(userId, false));
   }
}

export default usersReducer;