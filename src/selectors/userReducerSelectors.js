
export const getAllUsers = (state) => state.users.allUsers;
export const getCurrentPage = (state) => state.users.currentPage;
export const getTotalCount = (state) => state.users.totalCount;
export const getPageSize = (state) => state.users.pageSize;
export const getIsFetching = (state) => state.users.isFetching;
export const getPaginationLength = (state) => state.users.paginationLength;

// useInRouterContext();