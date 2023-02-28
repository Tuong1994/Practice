import axios from "axios";

enum EMethod {
  get = "GET",
  post = "POST",
  put = "PUT",
  delete = "DELETE",
}

export const BASE_URL = "http://localhost:5001";

const axiosClient = {
  get: (path: string, query?: string) => {
    let url: string = "";
    if (query) url = path + query;
    else url = path;
    const fetch = axios({
      url,
      method: EMethod.get,
    });
    return fetch;
  },

  post: (path: string, data: object, token?: string) => {
    const fetch = axios({
      url: path,
      method: EMethod.post,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return fetch;
  },

  put: (path: string, data: object, query: string, token?: string) => {
    const fetch = axios({
      url: path + query,
      method: EMethod.put,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return fetch;
  },

  delete: (path: string, query: string, token?: string) => {
    const fetch = axios({
      url: path + query,
      method: EMethod.delete,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default axiosClient;
