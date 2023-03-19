import { createContext, useState } from 'react';

const UserDataContext = createContext();

const UserDataContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(undefined);
  return <UserDataContext.Provider value={{ userInfo, setUserInfo }}>{children}</UserDataContext.Provider>;
};

export { UserDataContext, UserDataContextProvider };
