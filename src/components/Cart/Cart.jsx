import { useContext } from 'react';
import { HEIGHT_PHOTO, URL_PHOTO_BY_ID, WIDTH_PHOTO } from '../../constants/constants';
import { ContextUser } from '../Wrapper/Wrapper';
import style from './Cart.module.css';

function Cart({ cartId, alt = '', width = WIDTH_PHOTO, height = HEIGHT_PHOTO }) {
  const context = useContext(ContextUser);
  const onShowModal = context?.setIsShowModal;
  const setCurrentShow = context?.setCurrentShow;

  function showModal() {
    if (onShowModal) {
      onShowModal(true);
      setCurrentShow(cartId);
    }
  }
  const urlDownloadBySize = `${URL_PHOTO_BY_ID}/${cartId}/${width}/${height}`;
  return cartId && <img src={urlDownloadBySize} alt={alt} onClick={showModal} />;
}

export default Cart;
