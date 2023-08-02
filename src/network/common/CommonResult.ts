import CommonResultState from "./CommonResultState";

abstract class CommonResult<T> {
  public readonly status: CommonResultState;
  public readonly data: T | null;
  public readonly message: string | null;

  protected constructor(
    status: CommonResultState,
    data: T | null,
    message: string | null
  ) {
    this.status = status;
    this.data = data;
    this.message = message;
  }
}

class Success<T> extends CommonResult<T> {
  public readonly data: T;
  constructor(successData: T) {
    super(CommonResultState.SUCCESS, successData, null);
    this.data = successData;
  }
}

class Failure extends CommonResult<never> {
  constructor(failureStatus: CommonResultState, failureMessage: string) {
    super(failureStatus, null, failureMessage);
  }
}

class Loading extends CommonResult<never> {
  constructor() {
    super(CommonResultState.LOADING, null, null);
  }
}

export { CommonResult, Success, Failure, Loading };
