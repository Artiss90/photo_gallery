import { useState } from 'react';
import style from './Search.module.css';

function Search() {
  const [query, setQuery] = useState('');

  const handleChangeValue = (e) => {
    e.preventDefault();
    const valueQuery = e.currentTarget.value;

    if (valueQuery) {
      setQuery(valueQuery);
    }
  };

  const getSearch = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.value);
    // TODO logic search

    //?   clear input
    setQuery('');
  };

  return (
    <div className={style.container}>
      <input type="text" name="limitPage" value={query} onChange={handleChangeValue} placeholder="Введіть категорію" />
      <button type="button" onClick={getSearch}>
        Знайти
      </button>
    </div>
  );
}

export default Search;
