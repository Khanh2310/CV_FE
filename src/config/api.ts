import {
  IBackendRes,
  ICompany,
  IAccount,
  IUser,
  IModelPaginate,
  IGetAccount,
  IJob,
  IResume,
  IPermission,
  IRole,
  ISubscribers,
} from '@/types/backend';
import axios from 'config/axios-customize';

/**
 *
Module Auth
 */
export const callRegister = (
  name: string,
  email: string,
  password: string,
  age: number,
  gender: string,
  address: string
) => {
  return axios.post<IBackendRes<IUser>>('/v1/api/auth/register', {
    name,
    email,
    password,
    age,
    gender,
    address,
  });
};

export const callLogin = (username: string, password: string) => {
  return axios.post<IBackendRes<IAccount>>('/v1/api/auth/login', {
    username,
    password,
  });
};

export const callFetchAccount = () => {
  return axios.get<IBackendRes<IGetAccount>>('/v1/api/auth/account');
};

export const callRefreshToken = () => {
  return axios.get<IBackendRes<IAccount>>('/v1/api/auth/refresh');
};

export const callLogout = () => {
  return axios.post<IBackendRes<string>>('/v1/api/auth/logout');
};

/**
 * Upload single file
 */
export const callUploadSingleFile = (file: any, folderType: string) => {
  const bodyFormData = new FormData();
  bodyFormData.append('fileUpload', file);
  return axios<IBackendRes<{ fileName: string }>>({
    method: 'post',
    url: '/v1/api/files/upload',
    data: bodyFormData,
    headers: {
      'Content-Type': 'multipart/form-data',
      folder_type: folderType,
    },
  });
};

/**
 *
Module Company
 */
export const callCreateCompany = (
  name: string,
  address: string,
  description: string,
  logo: string
) => {
  return axios.post<IBackendRes<ICompany>>('/v1/api/companies', {
    name,
    address,
    description,
    logo,
  });
};

export const callUpdateCompany = (
  id: string,
  name: string,
  address: string,
  description: string,
  logo: string
) => {
  return axios.patch<IBackendRes<ICompany>>(`/v1/api/companies/${id}`, {
    name,
    address,
    description,
    logo,
  });
};

export const callDeleteCompany = (id: string) => {
  return axios.delete<IBackendRes<ICompany>>(`/v1/api/companies/${id}`);
};

export const callFetchCompany = (query: string) => {
  return axios.get<IBackendRes<IModelPaginate<ICompany>>>(
    `/v1/api/companies?${query}`
  );
};

export const callFetchCompanyById = (id: string) => {
  return axios.get<IBackendRes<ICompany>>(`/v1/api/companies/${id}`);
};

/**
 *
Module User
 */
export const callCreateUser = (user: IUser) => {
  return axios.post<IBackendRes<IUser>>('/v1/api/users', { ...user });
};

export const callUpdateUser = (user: IUser) => {
  return axios.patch<IBackendRes<IUser>>(`/v1/api/users`, { ...user });
};

export const callDeleteUser = (id: string) => {
  return axios.delete<IBackendRes<IUser>>(`/v1/api/users/${id}`);
};

export const callFetchUser = (query: string) => {
  return axios.get<IBackendRes<IModelPaginate<IUser>>>(
    `/v1/api/users?${query}`
  );
};

/**
 *
Module Job
 */
export const callCreateJob = (job: IJob) => {
  return axios.post<IBackendRes<IJob>>('/v1/api/jobs', { ...job });
};

export const callUpdateJob = (job: IJob, id: string) => {
  return axios.patch<IBackendRes<IJob>>(`/v1/api/jobs/${id}`, { ...job });
};

export const callDeleteJob = (id: string) => {
  return axios.delete<IBackendRes<IJob>>(`/v1/api/jobs/${id}`);
};

export const callFetchJob = (query: string) => {
  return axios.get<IBackendRes<IModelPaginate<IJob>>>(`/v1/api/jobs?${query}`);
};

export const callFetchJobById = (id: string) => {
  return axios.get<IBackendRes<IJob>>(`/v1/api/jobs/${id}`);
};

/**
 *
Module Resume
 */
export const callCreateResume = (url: string, companyId: any, jobId: any) => {
  return axios.post<IBackendRes<IResume>>('/v1/api/resumes', {
    url,
    companyId,
    jobId,
  });
};

export const callUpdateResumeStatus = (id: any, status: string) => {
  return axios.patch<IBackendRes<IResume>>(`/v1/api/resumes/${id}`, { status });
};

export const callDeleteResume = (id: string) => {
  return axios.delete<IBackendRes<IResume>>(`/v1/api/resumes/${id}`);
};

export const callFetchResume = (query: string) => {
  return axios.get<IBackendRes<IModelPaginate<IResume>>>(
    `/v1/api/resumes?${query}`
  );
};

export const callFetchResumeById = (id: string) => {
  return axios.get<IBackendRes<IResume>>(`/v1/api/resumes/${id}`);
};

export const callFetchResumeByUser = () => {
  return axios.post<IBackendRes<IResume[]>>(`/v1/api/resumes/by-user`);
};

/**
 *
Module Permission
 */
export const callCreatePermission = (permission: IPermission) => {
  return axios.post<IBackendRes<IPermission>>('/v1/api/permissions', {
    ...permission,
  });
};

export const callUpdatePermission = (permission: IPermission, id: string) => {
  return axios.patch<IBackendRes<IPermission>>(`/v1/api/permissions/${id}`, {
    ...permission,
  });
};

export const callDeletePermission = (id: string) => {
  return axios.delete<IBackendRes<IPermission>>(`/v1/api/permissions/${id}`);
};

export const callFetchPermission = (query: string) => {
  return axios.get<IBackendRes<IModelPaginate<IPermission>>>(
    `/v1/api/permissions?${query}`
  );
};

export const callFetchPermissionById = (id: string) => {
  return axios.get<IBackendRes<IPermission>>(`/v1/api/permissions/${id}`);
};

/**
 *
Module Role
 */
export const callCreateRole = (role: IRole) => {
  return axios.post<IBackendRes<IRole>>('/v1/api/roles', { ...role });
};

export const callUpdateRole = (role: IRole, id: string) => {
  return axios.patch<IBackendRes<IRole>>(`/v1/api/roles/${id}`, { ...role });
};

export const callDeleteRole = (id: string) => {
  return axios.delete<IBackendRes<IRole>>(`/v1/api/roles/${id}`);
};

export const callFetchRole = (query: string) => {
  return axios.get<IBackendRes<IModelPaginate<IRole>>>(
    `/v1/api/roles?${query}`
  );
};

export const callFetchRoleById = (id: string) => {
  return axios.get<IBackendRes<IRole>>(`/v1/api/roles/${id}`);
};

/**
 *
Module Subscribers
 */
export const callCreateSubscriber = (subs: ISubscribers) => {
  return axios.post<IBackendRes<ISubscribers>>('/v1/api/subscribers', {
    ...subs,
  });
};

export const callGetSubscriberSkills = () => {
  return axios.post<IBackendRes<ISubscribers>>('/v1/api/subscribers/skills');
};

export const callUpdateSubscriber = (subs: ISubscribers) => {
  return axios.patch<IBackendRes<ISubscribers>>(`/v1/api/subscribers`, {
    ...subs,
  });
};

export const callDeleteSubscriber = (id: string) => {
  return axios.delete<IBackendRes<ISubscribers>>(`/v1/api/subscribers/${id}`);
};

export const callFetchSubscriber = (query: string) => {
  return axios.get<IBackendRes<IModelPaginate<ISubscribers>>>(
    `/v1/api/subscribers?${query}`
  );
};

export const callFetchSubscriberById = (id: string) => {
  return axios.get<IBackendRes<ISubscribers>>(`/v1/api/subscribers/${id}`);
};
