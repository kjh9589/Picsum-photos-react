import { CommonResult } from "../../common/CommonResult";
import CommonUseCase from "../../common/CommonUseCase";
import picsumRepository from "../../repository/picsum/picsumRepositry";

interface RequestGetImageDetail {
  id: string;
}

interface ResponseGetImageDetail {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

class GetImageDetail extends CommonUseCase<
  RequestGetImageDetail,
  ResponseGetImageDetail
> {
  protected execute(
    parameter: RequestGetImageDetail
  ): Promise<CommonResult<ResponseGetImageDetail>> {
    return picsumRepository.getImageDetail(parameter);
  }
}

export type { RequestGetImageDetail, ResponseGetImageDetail };
export default GetImageDetail;
