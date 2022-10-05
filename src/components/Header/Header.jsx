import Navigation from '../Navigation/Navigation';
import PaginationTools from '../PaginationTools/PaginationTools';
import Search from '../Search/Search';
import style from './Header.module.css';

function Header() {
  return (
    <header className={style.container}>
      <Navigation />
      <Search />
      <PaginationTools />
    </header>
  );
}

export default Header;
