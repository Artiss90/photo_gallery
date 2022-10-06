import { useContext, useEffect, useState } from 'react';
import { ContextUser } from '../Wrapper/Wrapper';
import style from './Pagination.module.css';

function Pagination() {
  const context = useContext(ContextUser);
  const page = Number(context?.user?.page);
  const editUser = context?.editUser;
  const [numPage, setNumPage] = useState(3);

  //? текущая страница будет по центру кнопок пагинации, меньше "3" по центру не может быть
  useEffect(() => {
    if (page < 3) {
      setNumPage(3);
    } else {
      setNumPage(page);
    }

    console.log('🚀 ~ file: Pagination.jsx ~ line 14 ~ useEffect ~ page', page);
  }, [page]);

  function onChangePage(numberPageToString) {
    editUser('page', numberPageToString);
  }
  return (
    <ul className={style.list}>
      <li className={style.item}>
        <button
          className={style.btn}
          type="button"
          onClick={() => onChangePage(`${numPage - 2}`)}
          disabled={page === 1}
        >
          {numPage - 2}
        </button>
      </li>
      <li className={style.item}>
        <button
          className={style.btn}
          type="button"
          onClick={() => onChangePage(`${numPage - 1}`)}
          disabled={page === 2}
        >
          {numPage - 1}
        </button>
      </li>
      <li className={style.item}>
        <button className={style.btn} type="button" onClick={() => onChangePage(`${numPage}`)} disabled={page >= 3}>
          {numPage}
        </button>
      </li>
      <li className={style.item}>
        <button className={style.btn} type="button" onClick={() => onChangePage(`${numPage + 1}`)}>
          {numPage + 1}
        </button>
      </li>
      <li className={style.item}>
        <button className={style.btn} type="button" onClick={() => onChangePage(`${numPage + 2}`)}>
          {numPage + 2}
        </button>
      </li>
    </ul>
  );
}

export default Pagination;
