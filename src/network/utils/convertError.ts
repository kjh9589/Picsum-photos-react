import axios, { AxiosError } from "axios";
import CommonError from "../common/CommonError";
import CommonResultState from "../common/CommonResultState";

const convertError = (error: Error | AxiosError) => {
  console.error(error);
  if (axios.isAxiosError(error)) {
    if (error.response) {
      throw new CommonError(error.response.status, error.message);
    } else if (error.request) {
      throw new CommonError(CommonResultState.FAILURE, error.message);
    } else {
      throw new CommonError(CommonResultState.FAILURE, "AXIOS ERROR");
    }
  } else {
    throw new CommonError(CommonResultState.FAILURE, error.message);
  }
};

export default convertError;
