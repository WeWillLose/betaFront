import {QInput}  from 'quasar';

export interface ReportTableStateInterface {
  name:string,
  editedIndex:number,
  editedItem: Record<string, unknown>,
  defaultItem:Record<string, unknown>,
  columns:Record<string, unknown>[],
  rows : Record<string, unknown>[],
  defaultRows: Record<string, unknown>[],
  maxScore: number,
}

export interface QFiledHasError  extends QInput{
  hasError :boolean
}

