import picsumApis from "../../apis/picsum/picsumApis";
import { CommonResult, Success } from "../../common/CommonResult";
import {
  RequestGetImageList,
  ResponseGetImageList,
} from "../../usecase/picsum/GetImageListUseCase";

const getImageList = async (
  params: RequestGetImageList
): Promise<CommonResult<ResponseGetImageList>> => {
  const res = await picsumApis.getImageList(params);

  return new Success(res.data);
};

const picsumRepository = {
  getImageList: getImageList,
};

export default picsumRepository;
