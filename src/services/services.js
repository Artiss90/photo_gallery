import { URL_PHOTO_LIST } from '../constants/constants';

export const fetchRandomPhoto = ({ page = '1', limit = '30' }) =>
  fetch(`${URL_PHOTO_LIST}?page=${page}&limit=${limit}`).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
