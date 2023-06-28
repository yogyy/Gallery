'use client';

import { cn } from '@/lib/utils';
import styles from './loader.module.css';

interface LoadingProps {
  className?: string;
}

const Loading = ({ className }: LoadingProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center w-full h-full pt-10 scale-50 md:scale-75',
        className
      )}
    >
      <div className={styles.loading}></div>
    </div>
  );
};

export default Loading;
