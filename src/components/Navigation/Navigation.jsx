import { Link } from 'react-router-dom';
import style from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={style.container}>
      <ul className={style.list}>
        <li className={style.item}>
          <Link to="/">Головна сторінка</Link>
        </li>
        <li className={style.item}>
          <Link to="/favorites">Улюблені фото</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
