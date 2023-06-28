'use client';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { HiMiniBars3, HiMiniBars3CenterLeft } from 'react-icons/hi2';
import React from 'react';
import { SideNavLink } from './nav-link';

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link" className="text-white">
          <HiMiniBars3 />
        </Button>
      </SheetTrigger>
      <SheetContent
        position="left"
        size="xl"
        className="flex flex-col items-start text-white border-none bg-foreground sm:hidden"
      >
        <SheetHeader>
          <SheetTitle className="flex w-full text-base text-white">
            <HiMiniBars3CenterLeft className="mx-2.5" />{' '}
            <span className="text-green-600">Gallery</span>
          </SheetTitle>
          <hr />
        </SheetHeader>
        <ul className="w-full">
          <SideNavLink />
        </ul>
      </SheetContent>
    </Sheet>
  );
}
