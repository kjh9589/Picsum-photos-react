import { Success, Failure, CommonResult } from "../network/common/CommonResult";

interface CommonState<T> {
  isLoading: boolean;
  isSuccess: boolean;
  isFailure: boolean;
  data: Success<T> | null;
  error: Failure | null;
}

type CommonActionType = "LOADING" | "SUCCESS" | "FAILURE";

interface CommonAction<T> {
  type: CommonActionType;
  result: CommonResult<T>;
}

export type { CommonState, CommonAction };
