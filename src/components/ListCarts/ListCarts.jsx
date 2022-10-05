import Cart from '../Cart/Cart';
import style from './ListCarts.module.css';

function ListCarts({ carts }) {
  return (
    <ul className={style.container}>
      {carts.map(
        (cart) =>
          cart?.id &&
          cart?.download_url && (
            <li key={cart.id} className={style.container}>
              <Cart cart={cart} />
            </li>
          )
      )}
    </ul>
  );
}

export default ListCarts;
