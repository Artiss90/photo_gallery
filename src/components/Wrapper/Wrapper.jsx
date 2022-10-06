import React, { useState } from 'react';
import { DEFAULT_USER } from '../../constants/constants';

const localDataUser = localStorage.getItem('user');
const initialUser = localDataUser ? JSON.parse(localDataUser) : DEFAULT_USER;

export const ContextUser = React.createContext(undefined);

const Wrapper = ({ children }) => {
  const [user, setUser] = useState(initialUser);

  const editUser = (property, value) => {
    //? смотрим есть ли свойство, тогда изменяем
    //? добавлять новые если их нет по-умолчанию в DEFAULT_USER нельзя
    const isHasProperty = user.hasOwnProperty(property);
    if (isHasProperty) {
      const updatedUser = {
        ...user,
        [property]: value,
      };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    } else {
      console.error(`Didn't find property "${property}" in 'user' from localStorage `);
    }
  };

  return <ContextUser.Provider value={{ user, editUser }}>{children}</ContextUser.Provider>;
};

export default Wrapper;
