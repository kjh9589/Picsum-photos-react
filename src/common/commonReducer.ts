import { Success, Failure } from "../network/common/CommonResult";
import { CommonState, CommonAction } from "./CommonType";

const commonReducer = <T>(
  state: CommonState<T>,
  action: CommonAction<T>
): CommonState<T> => {
  switch (action.type) {
    case "LOADING":
      return {
        isLoading: true,
        isSuccess: false,
        isFailure: false,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        isLoading: false,
        isSuccess: true,
        isFailure: false,
        data: new Success<T>(action.result.data!),
        error: null,
      };
    case "FAILURE":
      return {
        isLoading: false,
        isSuccess: false,
        isFailure: true,
        data: null,
        error: new Failure(action.result.status, action.result.message!),
      };
  }
};

export default commonReducer;
