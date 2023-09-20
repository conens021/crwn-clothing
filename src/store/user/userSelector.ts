import { RootState } from "../index";

export const selectCurrentUser = (state: RootState) => state.user.currentUser;
export const selectUserJwt = (state: RootState) => state.user.jwt;
export const selectUserStorageChecked = (state: RootState) =>
  state.user.userStorageChecked;
export const selectUserError = (state: RootState) => state.user.error;
export const selectUserLoading = (state: RootState) => state.user.loading;
export const selectUserRedirectPath = (state: RootState) =>
  state.user.redirectPath;
