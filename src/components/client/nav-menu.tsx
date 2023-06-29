'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Separator } from '../ui/separator';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Static',
    href: '/image',
    description: 'Fetching data static.',
  },
  {
    title: 'ISR',
    href: '/isr',
    description: 'Increment Static Revalidate Fetching data.',
  },
  {
    title: 'SSR',
    href: '/dynamic',
    description: 'Dynamically Fetching data.',
  },
];

export const NavMenu = () => {
  const pathname = usePathname();
  const arrsplit = pathname!.split('/');
  const baseRoute = '/' + arrsplit[1];
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium text-prim leading-none">Fetching data</h4>
        <p className="text-sm text-text">Choose different fetching strategy.</p>
      </div>
      <Separator className="my-4 bg-prim" />
      <div className="flex items-center justify-center h-5 space-x-4 text-sm">
        {components.map((component, index) => (
          <React.Fragment key={component.title}>
            <Link
              className={cn(pathname && baseRoute === component.href ? 'text-prim' : 'text-text')}
              href={component.href}
            >
              {component.title}
            </Link>
            {index !== components.length - 1 && (
              <Separator className="bg-prim" orientation="vertical" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
