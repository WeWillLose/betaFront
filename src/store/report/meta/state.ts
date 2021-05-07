export interface MetaStateInterface {
  id?:number| null,
  lastName: string;
  firstName: string;
  middleName: string;
  quarter: number,
  year1: number,
  year2: number,
  sum1: number,
  sum2: number,
  total: number,
  procent1:number,
  procent2:number,
  reportName:string
}
const currYear = new Date().getFullYear();

export const defaultMetaState: MetaStateInterface = {
  id:null,
  lastName:'',
  firstName:'',
  middleName:'',
  quarter:1,
  year1: currYear,
  year2: currYear+1,
  sum1:0,
  sum2:0,
  total:0,
  procent1:0,
  procent2:0,
  reportName:''
}

function state(): MetaStateInterface {
  return {
    id:null,
    lastName:'',
    firstName:'',
    middleName:'',
    quarter:1,
    year1: currYear,
    year2: currYear+1,
    sum1:0,
    sum2:0,
    total:0,
    procent1:0,
    procent2:0,
    reportName:''
  }
}

export default state;
