import { HEIGHT_PHOTO, URL_PHOTO_BY_ID, URL_PHOTO_LIST, WIDTH_PHOTO } from '../constants/constants';

export const fetchRandomPhoto = async ({ page = '1', limit = '30' }) => {
  const response = await fetch(`${URL_PHOTO_LIST}?page=${page}&limit=${limit}`);
  if (!response.ok) {
    throw new Error(response.status);
  }
  return await response.json();
};

export const fetchPhotoById = async (cartId) => {
  console.log('🚀 ~ file: services.js ~ line 11 ~ fetchPhotoById ~ cartId', cartId);
  const urlDownloadBySize = `${URL_PHOTO_BY_ID}/${cartId}/${WIDTH_PHOTO}/${HEIGHT_PHOTO}`;
  const response = await fetch(urlDownloadBySize);
  console.log('🚀 ~ file: services.js ~ line 15 ~ fetchPhotoById ~ response', response);
  // if (!response.ok) {
  //   throw new Error(response.status);
  // }
  return await response.json();
};
