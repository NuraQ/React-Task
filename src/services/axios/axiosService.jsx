import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "content-type": "application/json"
  },
  timeout: 60 * 6 * 1000
});

const CancelToken = axios.CancelToken;
const isCancel = axios.isCancel;

const setAuthHeader = (token: string): void => {
  if (axiosInstance) {
    axiosInstance.defaults.headers.common["Authorization"] = token;
  }
};

const deleteAuthHeader = (): void => {
  delete axiosInstance.defaults.headers.common["Authorization"];
};

export default axiosInstance;
export { setAuthHeader, deleteAuthHeader, CancelToken, isCancel };
