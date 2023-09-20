import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { axiosService } from "../../services/AxiosService";
import {
  setUserErrorHandler,
  setUserHelper,
  setUserLoadingHandler,
} from "./userSliceHelpers";
import {
  signInUserSocialThunk,
  signInUserThunk,
  signInWithJwtThunk,
  signUpUserSocialThunk,
  signUpUserThunk,
} from "./userThunk";
import { ICurrentUser } from "../../interfaces/ICurrentUser";
import { IHttpError } from "../../interfaces/IHttpError";
import { ILoadingState } from "../../interfaces/ILoadingState";

export interface IUserRootState {
  currentUser: ICurrentUser | null;
  jwt: string | null;
  userStorageChecked: boolean;
  error: IHttpError;
  loading: ILoadingState;
  redirectPath: string;
}

const initialState: IUserRootState = {
  currentUser: null,
  jwt: null,
  userStorageChecked: false,
  error: {
    msg: null,
    code: null,
    type: null,
  },
  loading: {
    isLoading: false,
    type: null,
  },
  redirectPath: "/",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: IUserRootState, action) => {
      setUserHelper(state, action);
    },
    logoutUser: (state : IUserRootState) => {
      state.jwt = null;
      state.currentUser = null;
      state.userStorageChecked = false;
      localStorage.removeItem("jwt");
      axiosService.defaults.headers.common["Authorization"] = "";
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(
        signInUserThunk.pending,
        signInUserSocialThunk.pending,
        signUpUserThunk.pending,
        signUpUserSocialThunk.pending
      ),
      (state, action) => {
        setUserLoadingHandler(state, action);
      }
    );
    builder.addMatcher(
      isAnyOf(
        signInUserThunk.fulfilled,
        signInUserSocialThunk.fulfilled,
        signUpUserThunk.fulfilled,
        signInWithJwtThunk.fulfilled,
        signUpUserSocialThunk.fulfilled
      ),
      (state, action) => {
        setUserHelper(state, action);
      }
    );
    builder.addMatcher(
      isAnyOf(
        signInUserThunk.rejected,
        signInUserSocialThunk.rejected,
        signUpUserThunk.rejected,
        signUpUserSocialThunk.rejected
      ),
      (state, action) => {
        setUserErrorHandler(state, action);
      }
    );
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
