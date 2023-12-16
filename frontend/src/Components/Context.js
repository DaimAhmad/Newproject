// AppContext.js
import React, { createContext, useState } from 'react';
import { products, Top, Men, Women } from './data';

export const Context = createContext();

const AppContext = ({ children }) => {
  const [data1, setdata1] = useState(products);
  const [data2, setdata2] = useState(Top);
  const [data3, setdata3] = useState(Men);
  const [data4, setdata4] = useState(Women);

  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Context.Provider
      value={{
        data1,
        setdata1,
        data2,
        setdata2,
        data3,
        setdata3,
        data4,
        setdata4,
        user,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
