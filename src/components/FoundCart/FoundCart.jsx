import { useContext } from 'react';
import Cart from '../Cart/Cart';
import { ContextUser } from '../Wrapper/Wrapper';
import style from './FoundCart.module.css';

function FoundCart() {
  const context = useContext(ContextUser);
  const queryUser = context?.user?.query;

  return (
    queryUser && (
      <div className={style.container}>
        <Cart cartId={queryUser} />
      </div>
    )
  );
}

export default FoundCart;
