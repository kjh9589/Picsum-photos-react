import { CommonResult } from "../../common/CommonResult";
import CommonUseCase from "../../common/CommonUseCase";
import picsumRepository from "../../repository/picsum/picsumRepositry";

interface RequestGetImageList {
  page?: number;
  limit?: number;
}

interface ResponseGetImageList {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

class GetImageListUseCase extends CommonUseCase<
  RequestGetImageList,
  ResponseGetImageList
> {
  protected execute(
    parameter: RequestGetImageList
  ): Promise<CommonResult<ResponseGetImageList>> {
    return picsumRepository.getImageList(parameter);
  }
}

export type { RequestGetImageList, ResponseGetImageList };
export default GetImageListUseCase;
