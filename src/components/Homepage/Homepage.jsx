import { useContext, useEffect, useState } from 'react';
import { fetchRandomPhoto } from '../../services/services';
import ListCarts from '../ListCarts/ListCarts';
import { ContextUser } from '../Wrapper/Wrapper';
import style from './Homepage.module.css';

function Homepage() {
  const context = useContext(ContextUser);
  const limit = context?.user?.limit;
  const page = context?.user?.page;
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetchRandomPhoto({ page: page, limit: limit })
      .then((res) => {
        setCarts(res);
      })
      .catch(console.log);
  }, [limit, page]);
  return (
    <div className={style.container}>
      <ListCarts carts={carts} />
    </div>
  );
}

export default Homepage;
