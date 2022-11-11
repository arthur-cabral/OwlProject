import { AxiosInstance } from 'axios';

export const usuario = (api: AxiosInstance, url: string) => (
  {
    usuario: {
      getUser: () => api.get(url),
      getOne: (id: number) => api.get(`${url}/${id}`),
      register: (data: Object) => api.post(url, data),
      login: (data: Object) => api.post(`${url}/login`, data),
      // put: (url, id, data) => api.put(`${url}/${id}`, data),
      // delete: (url, id) => api.delete(`${url}/${id}`),
    }
  });