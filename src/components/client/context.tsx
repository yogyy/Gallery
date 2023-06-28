'use client';

import * as React from 'react';

interface IMenuContext {
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}

export const MyContext = React.createContext<IMenuContext>({
  data: '',
  setData: () => {},
});

export const MyContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = React.useState('dadad');
  return <MyContext.Provider value={{ data, setData }}>{children}</MyContext.Provider>;
};

export const useThemeContext = () => React.useContext(MyContext);
