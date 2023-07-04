'use client';

import { cn } from '@/lib/utils';
import { useBg } from '@/stores/store';

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
  const { use } = useBg();

  return (
    <MyContext.Provider value={{ data, setData }}>
      <div className={cn('relative h-full w-full bg-fixed bg-center bg-cover', use && 'bg-asuka ')}>
        {children}
      </div>
    </MyContext.Provider>
  );
};

export const useThemeContext = () => React.useContext(MyContext);
