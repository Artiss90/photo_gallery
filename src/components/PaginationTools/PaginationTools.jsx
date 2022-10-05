import { useState } from 'react';
import style from './PaginationTools.module.css';

const limitUser = localStorage.getItem('limit');

function PaginationTools() {
  const [limit, setLimit] = useState(limitUser || 30);

  const handleChangeValue = (e) => {
    e.preventDefault();
    const valueLimit = e.currentTarget.value;

    if (valueLimit) {
      setLimit(valueLimit);
      localStorage.setItem('limit', valueLimit);
    }
  };

  return (
    <div className={style.container}>
      <label>
        Кількість фото на сторінці
        <input type="number" name="limitPage" value={limit} onChange={handleChangeValue} />
      </label>
    </div>
  );
}

export default PaginationTools;
