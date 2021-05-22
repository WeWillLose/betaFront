import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ReportStateInterface } from './state';
import { restApi } from 'boot/axios';
import { ErrorImpl } from 'src/model/error/Error';
import { IReport } from 'src/model/report/Report';
import reportUtils from 'src/utils/report/ReportUtils';

const actions: ActionTree<ReportStateInterface, StateInterface> = {
  async fetchReports(context){
    try{
      const res = await restApi.getReportsCurrentUser();
      context.commit('setReports',res.data);
      return true;
    }catch (e) {
      return false;
    }
  },
  async fetchReportById(context,id:number){
    try{
      const res = await restApi.getReport(id)
      context.commit('setReport',res.data)
      return true;
    }catch (e) {
      return false;
    }
  },
  async fetchReportByIdAndSetTablesData(context,id:number){
    try{
      const res = await restApi.getReport(id)
      context.commit('setReport',res.data)
      reportUtils.setTablesData(res.data)
      return true;
    }catch (e) {
      return false;
    }
  },
  async fetchFollowerReports(context) {
    try {
      const res = await restApi.getFollowerReports()
      context.commit('setFollowersReport', res.data)
      return true;
    } catch (e) {
        return false;
    }
  },
  async fetchAllFollowerReports(context) {
    try {
      const res = await restApi.getAllReports()
      context.commit('setFollowersReport', res.data)
      return true;
    } catch (e) {
      return false;
    }
  },
  async editReportStatus(context,report:IReport) {
    try {
      if(!report || !report.id  || !report.status) {
        throw new ErrorImpl('IN editReportStatus report || report.id || report.status is null',report)
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const res = await restApi.updateReportStatus(report.id,report.status)
      context.commit('updateFollowerReportById',res.data)
      return true;
    } catch (e) {
      return false;
    }
  },
  async editReport(context,report:IReport) {
    try {
      if(!report || !report.id ) {
        throw new ErrorImpl('IN editReport report || report.id  is null}',report)
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const res = await restApi.updateReport(report.id,report)
      context.commit('setReport',res.data)
      return true;
    } catch (e) {
      console.log(e)
      return false;
    }
  },
  async saveReport(context,report:IReport) {
    try {
      if(!report) {
        throw new ErrorImpl('IN saveReport report  is null',report)
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const res = await restApi.saveReport(report)
      context.commit('setReport',res.data)
      return true;
    } catch (e) {
      console.log(e)
      return false;
    }
  },
  async deleteReportById(context,id:number) {
    try {
      if(id == null) {
        throw new ErrorImpl('IN deleteReportById report  is null',id)
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const res = await restApi.deleteReport(id)
      context.commit('deleteFollowerReportsById',id)
      return true;
    } catch (e) {
      console.log(e)
      return false;
    }
  },
};

export default actions;
