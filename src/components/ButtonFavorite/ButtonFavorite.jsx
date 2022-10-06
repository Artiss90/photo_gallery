import { useContext, useState } from 'react';
import { ContextUser } from '../Wrapper/Wrapper';
import icon from '../../icons/symbol-defs.svg';
import style from './ButtonFavorite.module.css';
import cn from 'classnames';

function ButtonFavorite({ cartId }) {
  const context = useContext(ContextUser);
  const favorites = context?.user?.favorites || [];
  const [isCheck, setIsCheck] = useState(favorites.includes(cartId));
  const editUser = context?.editUser;

  function onCheckFavorite() {
    setIsCheck(!isCheck);
    let copyFavorites = favorites.slice();
    //*если фото не находится в избранных - добавляем, иначе - удаляем оттуда
    if (!isCheck) {
      copyFavorites.push(cartId);
    } else {
      copyFavorites = copyFavorites.filter((item) => item !== cartId);
    }
    editUser('favorites', copyFavorites);
  }
  return (
    <button className={cn(style.container, { [style.check]: isCheck })} onClick={() => onCheckFavorite()}>
      <svg width="32" height="32">
        <use href={`${icon}#icon-heart`} />
      </svg>
    </button>
  );
}

export default ButtonFavorite;
