import React from 'react';
import { connect } from "react-redux";
// selectors
import {
   getAllUsers, getCurrentPage, getTotalCount,
   getPageSize, getIsFetching, getPaginationLength
} from "../../../../selectors/userReducerSelectors";
// components
import Users from './users'
// other
import { getUsersApi, followUserApi, unfollowUserApi } from '../../../../redux/usersReducer'

const mapStateToProps = (state) => {
   return {
      allUsers: getAllUsers(state),
      currentPage: getCurrentPage(state),
      totalCount: getTotalCount(state),
      pageSize: getPageSize(state),
      isFetching: getIsFetching(state),
      paginationLength: getPaginationLength(state)
   };
}
const UsersContainer = connect(mapStateToProps, { getUsersApi, followUserApi, unfollowUserApi })(Users);

export default UsersContainer;