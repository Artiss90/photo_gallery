import { URL_PHOTO_LIST } from '../constants/constants';

export const fetchRandomPhoto = async ({ page = '1', limit = '30' }) => {
  const response = await fetch(`${URL_PHOTO_LIST}?page=${page}&limit=${limit}`);
  if (!response.ok) {
    throw new Error(response.status);
  }
  return await response.json();
};