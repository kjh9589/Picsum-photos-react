import apiModule from "../../module/apiModule";
import { RequestGetImageDetail } from "../../usecase/picsum/GetImageDetailUseCase";
import {
  PicsumItem,
  RequestGetImageList,
} from "../../usecase/picsum/GetImageListUseCase";
import convertError from "../../utils/convertError";

const getImageList = async (parameter: RequestGetImageList) => {
  const res = await apiModule
    .get<PicsumItem[]>("/v2/list", {
      params: parameter,
    })
    .catch((error) => {
      return convertError(error);
    });

  console.log("api", res.data);
  return res;
};

const getImageDetail = async (parameter: RequestGetImageDetail) => {
  const res = await apiModule.get(`/id/${parameter.id}/info`).catch((error) => {
    return convertError(error);
  });

  return res;
};

const picsumApis = {
  getImageList: getImageList,
  getImageDetail: getImageDetail,
};

export default picsumApis;
