import { Link } from 'react-router-dom';
import style from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={style.container}>
      <ul className={style.list}>
        <li>
          <Link to="/">Головна сторінка</Link>
        </li>
        <li>
          <Link to="/favorites">Улюблені фото</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
