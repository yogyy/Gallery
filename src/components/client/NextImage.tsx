'use client';

import { cn } from '@/lib/utils';
import Image, { ImageProps } from 'next/image';
import React from 'react';

type SafeNumber = number | `${number}`;

interface NextImage extends ImageProps {
  onClick?: () => void;
  fill?: boolean;
  width?: SafeNumber | undefined;
  height?: SafeNumber | undefined;
}

export const NextImage = ({
  src,
  alt,
  width,
  height,
  className,
  onClick,
  fill,
  priority,
}: NextImage) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      onClick={onClick}
      fill={fill}
      priority={priority}
      className={cn(
        'w-auto h-full max-w-full transition-opacity duration-1000 rounded opacity-0',
        className
      )}
      onLoadingComplete={image => image.classList.remove('opacity-0')}
    />
  );
};
