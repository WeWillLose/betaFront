import { AxiosInstance } from 'axios';
import { ErrorImpl } from 'src/model/error/Error';
import { IUser, IUserLogin, User } from 'src/model/user/User';
import { Report } from 'src/model/report/Report';
import { EReportStatus } from 'src/model/report/ReportStatus';

export interface ServerResponse<T> {
  status: number
  statusText: string
  headers:Record<string, string>,
  data: T
}

export interface IRestApi {
  login(userLogin: IUserLogin): Promise<ServerResponse<IUser>>;

  registrationUser(user: IUser): Promise<ServerResponse<IUser>>;

  getCurrentUser(): Promise<ServerResponse<IUser | null | undefined>>;

  saveReport(data: Report): Promise<ServerResponse<Report>>;

  downloadReport(id: number): Promise<ServerResponse<ArrayBuffer>>;

  downloadScoreList(id: number): Promise<ServerResponse<ArrayBuffer>>;

  setChairman(chairmanId: number, followerId: number): Promise<ServerResponse<IUser>>

  getUsers(): Promise<ServerResponse<IUser[]>>

  getReportsCurrentUser(): Promise<ServerResponse<Report[]>>

  deleteUser(id: number): Promise<ServerResponse<unknown>>

  resetPassword(user: IUser): Promise<ServerResponse<IUser>>

  setRoles(user: IUser): Promise<ServerResponse<IUser>>

  getChairmans(): Promise<ServerResponse<IUser[]>>

  editUser(user: IUser): Promise<ServerResponse<IUser>>

  getFollowerReports(): Promise<ServerResponse<Report[]>>

  getReport(id: number): Promise<ServerResponse<Report>>

  updateReport(id: number, report: Report): Promise<ServerResponse<Report>>

  updateReportStatus(id: number, status: EReportStatus): Promise<ServerResponse<Report>>
}

export class RestApi implements IRestApi {
  private _resource: AxiosInstance;

  constructor(resource: AxiosInstance) {
    if (!resource) throw new ErrorImpl('In RestApi resource is null');
    this._resource = resource;
  }

  async login(userLogin: IUserLogin): Promise<ServerResponse<User>> {
    return this._resource.post('/auth/authenticate/', userLogin);
  };

  async registrationUser(user: User): Promise<ServerResponse<User>> {
    return this._resource.post('/auth/registration', user);
  };

  async getCurrentUser(): Promise<ServerResponse<User>> {
    return this._resource.get('/auth/authenticate');
  };

  async saveReport(report: Report): Promise<ServerResponse<Report>> {
    return this._resource.post('/report', report);
  };

  async getReportsCurrentUser(): Promise<ServerResponse<Report[]>> {
    return this._resource.get('/report/author/current');
  }

  async downloadReport(id: number): Promise<ServerResponse<ArrayBuffer>> {
    return this._resource.get(`/report/docx/${id}`, { responseType: 'arraybuffer' });
  }

  async downloadScoreList(id: number): Promise<ServerResponse<ArrayBuffer>> {
    return this._resource.get(`/scoreList/docx/${id}`, { responseType: 'arraybuffer' });
  }

  async setChairman(followerId: number,chairmanId: number): Promise<ServerResponse<IUser>> {
    return this._resource.put(`/user/chairman/${chairmanId},${followerId}`);
  }

  async getUsers(): Promise<ServerResponse<IUser[]>> {
    return this._resource.get('/user/info/public/all');
  }

  async deleteUser(id: number): Promise<ServerResponse<unknown>> {
    return this._resource.delete(`/user/${id}`);
  }

  async editUser(user: IUser): Promise<ServerResponse<IUser>> {
    if (!user || !user.id) throw new ErrorImpl('IN editUser user | user.id is null', user);
    return this._resource.put(`/user/info/${user.id}`, user);
  }

  async resetPassword(user: IUser): Promise<ServerResponse<IUser>> {
    if (!user || !user.id) throw new ErrorImpl('IN resetPassword user | user.id is null', user);
    if (!user.password) throw new ErrorImpl('IN resetPassword password is null', user);
    return this._resource.put(`/user/password/${user.id}`, { password: user.password });
  }

  async setRoles(user: IUser): Promise<ServerResponse<IUser>> {
    if (!user || !user.id) throw new ErrorImpl('IN setRoles user | user.id is null', user);
    if (!user.roles) user.roles = [];
    return this._resource.put(`/user/roles/${user.id}`, user.roles.map(role => {
      return { 'name': role.name };
    }));
  }

  async getChairmans(): Promise<ServerResponse<IUser[]>> {
    return this._resource.get('/user/chairman/all');
  }

  async getFollowerReports(): Promise<ServerResponse<Report[]>> {
    return this._resource.get('report/followers/current');
  }

  async getReport(id: number): Promise<ServerResponse<Report>> {
    return this._resource.get(`report/${id}`);
  }

  async updateReport(id: number, report: Report): Promise<ServerResponse<Report>> {
    return this._resource.put(`report/${id}`, report);
  }

  async updateReportStatus(id: number, status: EReportStatus): Promise<ServerResponse<Report>> {
    return this._resource.put(`report/status/${id}`, { 'status': status });
  }
}
