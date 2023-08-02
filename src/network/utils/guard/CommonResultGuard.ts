import {
  CommonResult,
  Success,
  Loading,
  Failure,
} from "../../common/CommonResult";
import CommonResultState from "../../common/CommonResultState";

const isSuccessResult = <T>(result: CommonResult<T>): result is Success<T> => {
  return result.status === CommonResultState.SUCCESS;
};

const isLoadingResult = <T>(result: CommonResult<T>): result is Loading => {
  return result.status === CommonResultState.LOADING;
};

const isFailureResult = <T>(result: CommonResult<T>): result is Failure => {
  return (
    result.status !== CommonResultState.SUCCESS &&
    result.status !== CommonResultState.LOADING
  );
};

export { isSuccessResult, isFailureResult, isLoadingResult };
