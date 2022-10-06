import { useContext } from 'react';
import { HEIGHT_PHOTO, URL_PHOTO_BY_ID, WIDTH_PHOTO } from '../../constants/constants';
import ButtonFavorite from '../ButtonFavorite/ButtonFavorite';
import { ContextUser } from '../Wrapper/Wrapper';
import style from './Cart.module.css';

function Cart({ cartId, cartAlt = '', width = WIDTH_PHOTO, height = HEIGHT_PHOTO, isModal }) {
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
  return (
    cartId && (
      <div className={style.container}>
        <img src={urlDownloadBySize} alt={cartAlt} onClick={showModal} className={style.img} />
        {!isModal && <ButtonFavorite cart={{ cartId, cartAlt }} />}
      </div>
    )
  );
}

export default Cart;
