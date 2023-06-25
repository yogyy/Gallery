'use client';

import { cn } from '@/lib/utils';
import Image, { ImageProps } from 'next/image';
import React from 'react';

interface NextImage extends ImageProps {
  onClick?: () => void;
  fill?: boolean;
}

export const NextImage = ({ src, alt, width, height, className, onClick, fill }: NextImage) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      onClick={onClick}
      fill={fill}
      className={cn(
        'w-auto h-full max-w-full transition-opacity duration-1000 rounded opacity-0',
        className
      )}
      onLoadingComplete={image => image.classList.remove('opacity-0')}
    />
  );
};
