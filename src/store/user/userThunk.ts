import { createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH_FORM_TYPE, USER_ERROR_TYPES } from "../../constants/user";
import errorsHandler from "../../errorsHandler";
import AuthService from "../../services/AuthService";
import JwtService from "../../services/JwtService";
import UserService from "../../services/UserService";
import { AuthUser } from "../../interfaces/AuthUser";
import { IStoreErrorHandler } from "../../interfaces/IStoreErrorHandler";

interface BaseAuthUser {
  redirectPath: string;
}

interface SignInUser extends BaseAuthUser {
  authUser: AuthUser;
}

interface SignUpUser {
  displayName: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

interface SignUp extends BaseAuthUser {
  user: SignUpUser;
}

interface AuthUserSocial extends BaseAuthUser {
  provider: string;
  accessToken: string;
}

interface AuthJwt extends BaseAuthUser {
  jwt: string;
}

export const signInUserThunk = createAsyncThunk(
  AUTH_FORM_TYPE.signInEmail,
  async ({ authUser, redirectPath = "/" }: SignInUser, { rejectWithValue }) => {
    try {
      const jwt = await AuthService.loginEmail(authUser);

      return setUserHelper({ jwt, redirectPath });
    } catch (err) {
      const errObj = {
        err,
        rejectWithValue,
        type: USER_ERROR_TYPES.signInJwt,
      };
      return handleErrorHelper(errObj);
    }
  }
);

export const signInUserSocialThunk = createAsyncThunk(
  AUTH_FORM_TYPE.signInSocial,
  async (
    { accessToken, provider, redirectPath = "/" }: AuthUserSocial,
    { rejectWithValue }
  ) => {
    try {
      const jwt = await AuthService.loginSocial(accessToken, provider);

      return setUserHelper({ jwt, redirectPath });
    } catch (err) {
      const errObj = {
        err,
        rejectWithValue,
        type: USER_ERROR_TYPES.signInJwt,
      };
      return handleErrorHelper(errObj);
    }
  }
);

export const signUpUserThunk = createAsyncThunk(
  AUTH_FORM_TYPE.signUpEmail,
  async ({ user, redirectPath = "/" }: SignUp, { rejectWithValue }) => {
    try {
      const jwt = await UserService.signUpEmail(user);

      return setUserHelper({ jwt, redirectPath });
    } catch (err) {
      const errObj = {
        err,
        rejectWithValue,
        type: USER_ERROR_TYPES.signInJwt,
      };
      return handleErrorHelper(errObj);
    }
  }
);

export const signUpUserSocialThunk = createAsyncThunk(
  AUTH_FORM_TYPE.signUpSocial,
  async (
    { accessToken, provider, redirectPath = "/" }: AuthUserSocial,
    { rejectWithValue }
  ) => {
    try {
      const jwt = await UserService.signUpSocial(accessToken, provider);

      return setUserHelper({ jwt, redirectPath });
    } catch (err) {
      return handleErrorHelper({
        err,
        rejectWithValue,
        type: USER_ERROR_TYPES.signInJwt,
      });
    }
  }
);

export const signInWithJwtThunk = createAsyncThunk(
  AUTH_FORM_TYPE.signInJwt,
  async ({ jwt, redirectPath = "/" }: AuthJwt, { rejectWithValue }) => {
    try {
      return setUserHelper({ jwt, redirectPath });
    } catch (err) {
      const errObj = {
        err,
        rejectWithValue,
        type: USER_ERROR_TYPES.signInJwt,
      };
      return handleErrorHelper(errObj);
    }
  }
);

const setUserHelper = async ({ jwt, redirectPath }: AuthJwt) => {
  const { user, jwt: newJwt } = await JwtService.getUser(jwt);

  const payload = {
    jwt: newJwt,
    currentUser: user,
    userStorageChecked: true,
    redirectPath: redirectPath,
  };

  return payload;
};

const handleErrorHelper = ({
  err,
  rejectWithValue,
  type,
}: IStoreErrorHandler) => {
  const errorMsg = errorsHandler.handleClientError(err);

  const errorObj = { errorMsg, type };

  return rejectWithValue(errorObj);
};
