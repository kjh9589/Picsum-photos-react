import apiModule from "../../module/apiModule";
import { RequestGetImageDetail } from "../../usecase/picsum/GetImageDetailUseCase";
import { RequestGetImageList } from "../../usecase/picsum/GetImageListUseCase";
import convertError from "../../utils/convertError";

const getImageList = async (parameter: RequestGetImageList) => {
  const res = await apiModule
    .get("/list", {
      params: parameter,
    })
    .catch((error) => {
      return convertError(error);
    });

  return res;
};

const getImageDetail = async (parameter: RequestGetImageDetail) => {
  const res = await apiModule.get(`/id/${parameter}/info`).catch((error) => {
    return convertError(error);
  });

  return res;
};

const picsumApis = {
  getImageList: getImageList,
  getImageDetail: getImageDetail,
};

export default picsumApis;
