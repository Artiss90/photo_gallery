import { HEIGHT_PHOTO, URL_PHOTO_BY_ID, WIDTH_PHOTO } from '../../constants/constants';
import style from './Cart.module.css';

function Cart({ cart }) {
  const { id, author } = cart;
  const urlDownloadBySize = `${URL_PHOTO_BY_ID}/${id}/${WIDTH_PHOTO}/${HEIGHT_PHOTO}`;
  return id && <img src={urlDownloadBySize} alt={author} />;
}

export default Cart;
