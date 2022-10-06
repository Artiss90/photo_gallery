import Cart from '../Cart/Cart';
import style from './ListCarts.module.css';

function ListCarts({ carts }) {
  return (
    <ul className={style.container}>
      {carts.map((cart) => {
        const { id, author } = cart;
        const altImg = author ? `Photo by ${author}` : author;
        return (
          id && (
            <li key={id} className={style.container}>
              <Cart cartId={id} cartAlt={altImg} />
            </li>
          )
        );
      })}
    </ul>
  );
}

export default ListCarts;
