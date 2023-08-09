import picsumApis from "../../apis/picsum/picsumApis";
import { CommonResult, Success } from "../../common/CommonResult";
import {
  RequestGetImageDetail,
  ResponseGetImageDetail,
} from "../../usecase/picsum/GetImageDetailUseCase";
import {
  PicsumItem,
  RequestGetImageList,
} from "../../usecase/picsum/GetImageListUseCase";

const getImageList = async (
  params: RequestGetImageList
): Promise<CommonResult<PicsumItem[]>> => {
  const res = await picsumApis.getImageList(params);

  return new Success(res.data);
};

const getImageDetail = async (
  params: RequestGetImageDetail
): Promise<CommonResult<ResponseGetImageDetail>> => {
  const res = await picsumApis.getImageDetail(params);

  return new Success(res.data);
};

const picsumRepository = {
  getImageList: getImageList,
  getImageDetail: getImageDetail,
};

export default picsumRepository;
