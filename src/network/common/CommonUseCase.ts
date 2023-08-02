import CommonError from "./CommonError";
import { CommonResult, Success, Failure } from "./CommonResult";
import CommonResultState from "./CommonResultState";

// P parameter 타입
// R response 타입
abstract class CommonUseCase<P, R> {
  public async invoke(parameter: P): Promise<CommonResult<R>> {
    try {
      const result: CommonResult<R> = await this.execute(parameter);
      return new Success(result.data);
    } catch (err) {
      if (err instanceof CommonError) {
        return new Failure(err.status, err.errorMessage);
      }

      return new Failure(CommonResultState.FAILURE, "UNKNOWN");
    }
  }

  protected abstract execute(parameter: P): Promise<CommonResult<R>>;
}

export default CommonUseCase;
