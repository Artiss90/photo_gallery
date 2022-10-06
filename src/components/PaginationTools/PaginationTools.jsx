import { useContext } from 'react';
import { ContextUser } from '../Wrapper/Wrapper';
import style from './PaginationTools.module.css';

function PaginationTools() {
  const context = useContext(ContextUser);
  const userLimitContext = context?.user?.limit || 30;
  const updateUser = context?.editUser;

  const handleChangeValue = (e) => {
    e.preventDefault();
    const valueLimit = e.currentTarget.value;

    if (valueLimit) {
      updateUser('limit', valueLimit);
    }
  };

  return (
    <div className={style.container}>
      <label className={style.label}>
        Кількість фото на сторінці
        <input
          type="number"
          name="limitPage"
          value={userLimitContext}
          onChange={handleChangeValue}
          className={style.input}
        />
      </label>
    </div>
  );
}

export default PaginationTools;
