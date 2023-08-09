import { CommonResult } from "../../common/CommonResult";
import CommonUseCase from "../../common/CommonUseCase";
import picsumRepository from "../../repository/picsum/picsumRepositry";

interface RequestGetImageList {
  page?: number;
  limit?: number;
}

interface PicsumItem {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

class GetImageListUseCase extends CommonUseCase<
  RequestGetImageList,
  PicsumItem[]
> {
  protected execute(
    parameter: RequestGetImageList
  ): Promise<CommonResult<PicsumItem[]>> {
    return picsumRepository.getImageList(parameter);
  }
}

export type { RequestGetImageList, PicsumItem };
export default GetImageListUseCase;
