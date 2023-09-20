import { axiosService } from "../../services/AxiosService";
import { IUserRootState } from "./userSlice";

type ReduxAction = {
  payload: any;
  type: string;
};

export const setUserHelper = (state: IUserRootState, action: ReduxAction) => {
  const { payload } = action;

  const { jwt, currentUser, userStorageChecked, redirectPath } = payload;

  state.jwt = jwt;
  state.currentUser = currentUser;
  state.userStorageChecked = userStorageChecked;
  resetLoading(state);

  state.redirectPath = redirectPath;
  localStorage.setItem("jwt", jwt);
  axiosService.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
};

export const setUserErrorHandler = (
  state: IUserRootState,
  action: ReduxAction
) => {
  const { errorMsg, type } = action.payload;
  const { code, message } = errorMsg;

  const errorObj = {
    msg: message,
    code,
    type,
  };

  resetLoading(state);
  state.error = { ...errorObj };
  state.redirectPath = "/sign-in";
};

export const setUserLoadingHandler = (state : IUserRootState, action : ReduxAction) => {
  const { type } = action;

  const loadingType = type.replace("/pending", "");

  const loading = { isLoading: true, type: loadingType };

  state.loading = { ...loading };
  state.error.msg = null;
  state.error.code = null;
  state.error.type = null;
};

const resetLoading = (state : IUserRootState) => {
  state.loading = {
    isLoading: false,
    type: null,
  };
};
