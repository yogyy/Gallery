'use client';

import { Button } from '../ui/button';

interface ButtonProps {
  data?: any;
  children: React.ReactNode;
}
const CButton = ({ data, children }: ButtonProps) => {
  return <Button onClick={() => console.log(data)}>{children}</Button>;
};

export { CButton };
