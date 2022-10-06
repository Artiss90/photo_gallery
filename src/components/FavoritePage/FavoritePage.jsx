import { useContext } from 'react';
import ListCarts from '../ListCarts/ListCarts';
import { ContextUser } from '../Wrapper/Wrapper';
import style from './FavoritePage.module.css';

function FavoritePage() {
  const context = useContext(ContextUser);
  const favorites = context?.user?.favorites || [];

  return (
    <div className={style.container}>
      <ListCarts carts={favorites} />
    </div>
  );
}

export default FavoritePage;
