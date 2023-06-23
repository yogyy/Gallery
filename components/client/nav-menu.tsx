'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Separator } from '../ui/separator';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Static',
    href: '/gallery',
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
        <h4 className="text-sm font-medium leading-none">Fetching data</h4>
        <p className="text-sm text-muted-foreground">Choose different fetching strategy.</p>
      </div>
      <Separator className="my-4" />
      <div className="flex items-center h-5 space-x-4 text-sm">
        {components.map((component, index) => (
          <React.Fragment key={component.title}>
            <Link
              className={cn(pathname && baseRoute === component.href ? 'text-sky-600' : '')}
              href={component.href}
            >
              {component.title}
            </Link>
            {index !== components.length - 1 && <Separator orientation="vertical" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
