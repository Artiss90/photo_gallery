import { useContext, useState } from 'react';
import { ContextUser } from '../Wrapper/Wrapper';
import style from './Search.module.css';

function Search() {
  const context = useContext(ContextUser);
  const queryUser = context?.user?.query;
  const editUser = context?.editUser;
  const [query, setQuery] = useState(queryUser || '');

  const handleChangeValue = (e) => {
    e.preventDefault();
    const valueQuery = e.currentTarget.value;
    setQuery(valueQuery);
  };

  const getSearch = () => {
    editUser('query', query);
  };

  return (
    <div className={style.container}>
      <input
        type="number"
        name="limitPage"
        value={query}
        onChange={handleChangeValue}
        placeholder="Введіть ID"
        className={style.input}
      />
      <button type="button" onClick={getSearch} className={style.btn}>
        Знайти
      </button>
    </div>
  );
}

export default Search;
