import { AxiosError } from "axios";

class ErrorMapper {
  message: string | undefined = "";
  code: number | undefined = 0;

  apiErrorToClient(err: AxiosError) {
    this.code = err.response?.status;
    this.message = err.response?.statusText;

    return { code: this.code, message: this.message };
  }
}

export default new ErrorMapper();
