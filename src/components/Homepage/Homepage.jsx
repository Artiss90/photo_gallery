import { useEffect, useState } from 'react';
import { fetchRandomPhoto } from '../../services/services';
import ListCarts from '../ListCarts/ListCarts';
import style from './Homepage.module.css';

function Homepage() {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetchRandomPhoto()
      .then((res) => {
        setCarts(res);
      })
      .catch(console.log);
  }, []);
  return (
    <div className={style.container}>
      <ListCarts carts={carts} />
    </div>
  );
}

export default Homepage;
