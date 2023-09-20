import axios from "axios";
import config from '../config.json'
import { toast } from "react-toastify";
import * as bussinesExceptions from "./businessException";

const env = config.ENV;
const baseURL = config.API_URL[env];

const getJwt = () => {
  const jwt = localStorage.getItem('jwt')

  return jwt
}

const axiosService = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${getJwt()}`
  }
});

const getCancelationTokenSource = () => {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  return source
}


axiosService.interceptors.response.use(null, (error) => {
  if (axios.isCancel(error)) {
    toast.error(`Request canceled!`)

    return
  }
  if (!bussinesExceptions.isExpectedError(error)) {
    const errorMessage = error.toJSON().message;
    toast.error(`An unexcepted error occured: ${errorMessage}`);

    return
  }

  if (bussinesExceptions.isServerError(error)) {
    toast(`Server error:\n${error.response.statusText}`);
      
    return
  }

  return Promise.reject(error);
});



export { axiosService, getCancelationTokenSource };
