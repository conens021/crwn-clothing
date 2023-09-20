import { AxiosError } from "axios";
import ErrorMapper from "../mappers/errorMapper";

class ErrorHandler {
  handleClientError(err: AxiosError) {
    const errorClient = ErrorMapper.apiErrorToClient(err);

    return errorClient;
  }
}

export default new ErrorHandler();
