import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, {ReportStateInterface} from './state';
import mutations from './mutations'
import getters from 'src/store/report/getters';
import actions from 'src/store/report/actions';
import comment from './report_tables/1/comment'
import progress_exam from './report_tables/1/progress_exam'
import progress from './report_tables/1/progress'
import proective from './report_tables/2/proective'
import creation from './report_tables/2/creation'
import class_rooms from './report_tables/3/class_rooms'
import complex from './report_tables/3/complex'
import education from './report_tables/3/education'
import programs from './report_tables/3/programs'
import reconstruction from './report_tables/3/reconstruction'
import sdo from './report_tables/3/sdo'
import teachingaids from './report_tables/3/teachingaids'
import working_program from './report_tables/3/working_program'
import circle from './report_tables/4/circle'
import events from './report_tables/4/events'
import institutions from './report_tables/4/institutions'
import plan from './report_tables/4/plan'
import activity from './report_tables/5/activity'
import coolhours from './report_tables/5/coolhours'
import obz from './report_tables/5/obz'
import plan_group from './report_tables/5/plan_group'
import contest from './report_tables/6/contest'
import participation from './report_tables/6/participation'
import qualification from './report_tables/6/qualification'
import selfeducation from './report_tables/6/selfeducation'
import seminars from './report_tables/6/seminars'
import technologies from './report_tables/7/technologies'
import experience from './report_tables/8/experience'
import interaction from './report_tables/9/interaction'
import subject from './report_tables/10/subject'
import manual from './report_tables/11/manual'
import meta from './meta'

const exampleModule: Module<ReportStateInterface, StateInterface> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {comment,meta,progress_exam,sdo,teachingaids,events,circle,experience,manual,subject,interaction,technologies,activity,participation,qualification,seminars,selfeducation,obz,contest,plan_group,coolhours,working_program,plan,institutions,reconstruction,progress,programs,education,creation,proective,class_rooms,complex}

};

export default exampleModule;
