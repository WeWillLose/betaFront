import fileDownload from 'js-file-download'
import { restApi } from 'boot/axios';
import HttpUtils from 'src/utils/http/HttpUtils';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

export interface IReportDownloadUtils {
  downloadReportById(id: number): Promise<void>
  downloadScoreListById(id: number):Promise<void>
}
export class ReportDownloadUtils implements IReportDownloadUtils{
  async downloadReportById(id: number): Promise<void> {
    if (!!id) {
      const response = await restApi.downloadReport(id);
      let name = HttpUtils.getFilenameFromHeaders(response.headers)
      if (!name) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/restrict-template-expressions
        name = `report_${uuidv4()}.docx`
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      fileDownload(response.data, name);
    }
  }
  async downloadScoreListById(id: number):Promise<void> {
    if (!!id) {
      const response = await restApi.downloadScoreList(id);
      let name = HttpUtils.getFilenameFromHeaders(response.headers)
      if (!name) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/restrict-template-expressions
        name = `score_list_${uuidv4()}.docx`
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      fileDownload(response.data, name);
    }

  }
}
const reportDownloadUtils = new ReportDownloadUtils()

export default reportDownloadUtils;
