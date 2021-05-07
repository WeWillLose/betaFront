export interface IDateUtils {
  toLocalString(val: string | number | Date | null): string
}

export class DateUtils implements IDateUtils{
  toLocalString(val: string | number | Date | null): string {
    return new Date(val || '').toLocaleString();
  }

}
const dateUtils = new DateUtils();
export default  dateUtils;
