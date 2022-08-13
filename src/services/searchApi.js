import { axiosClient } from './axiosClient';

export const searchApi = {
  getSearchResult: (params) => {
    const url = 'users/search';
    return axiosClient.get(url, {params});
  },
};
