import { useEffect, useReducer } from "react";
import GetImageListUseCase, {
  PicsumItem,
  RequestGetImageList,
} from "../../network/usecase/picsum/GetImageListUseCase";
import commonReducer from "../../common/commonReducer";
import { CommonState } from "../../common/CommonType";
import { Loading } from "../../network/common/CommonResult";
import {
  isSuccessResult,
  isFailureResult,
} from "../../network/utils/guard/CommonResultGuard";
const initState: CommonState<PicsumItem[]> = {
  isLoading: false,
  isSuccess: false,
  isFailure: false,
  data: null,
  error: null,
};
const useImageList = (
  params: RequestGetImageList,
  dependencies?: any[],
  isSkip: boolean = false
) => {
  const [state, dispatch] = useReducer(commonReducer<PicsumItem[]>, initState);

  const fetchData = async () => {
    dispatch({
      type: "LOADING",
      result: new Loading(),
    });

    const res = await new GetImageListUseCase().invoke(params);

    if (isSuccessResult(res)) {
      dispatch({
        type: "SUCCESS",
        result: res,
      });
    }

    if (isFailureResult(res)) {
      dispatch({
        type: "FAILURE",
        result: res,
      });
    }
  };

  useEffect(() => {
    if (isSkip) {
      return;
    }

    fetchData();
  }, dependencies);

  return { state, fetchData };
};

export default useImageList;