import { apiPaths } from "./apiEndpoints";
import axiosInstance from "./axiosInstance";

export const registerUserAPI = async (payload) => {
  try {
    const response = await axiosInstance.post(apiPaths.user, payload);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchusersAPI = async () => {
  try {
    const response = await axiosInstance.get(apiPaths.user);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const assignTaskAPI = async (payload) => {
  try {
    const response = await axiosInstance.post(apiPaths.task, payload);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
export const fetchTaskAPI = async (payload) => {
  try {
    const response = await axiosInstance.get(apiPaths.task, payload);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const approveuserAPI = async (userId) => {
  try {
    const response = axiosInstance.patch(`${apiPaths.user}/${userId}`, {
      isApproved: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
export const rejectuserAPI = async (userId) => {
  try {
    const response = axiosInstance.patch(`${apiPaths.user}/${userId}`, {
      isApproved: false,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
