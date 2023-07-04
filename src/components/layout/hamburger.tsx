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
        <Button variant="link" className="px-2">
          <HiMiniBars3 />
        </Button>
      </SheetTrigger>
      <SheetContent
        position="left"
        size="xl"
        className="flex flex-col items-start border-none bg-bg sm:hidden"
      >
        <SheetHeader>
          <SheetTitle className="flex w-full text-base text-acc">
            <HiMiniBars3CenterLeft className="mx-2.5" /> <span className="text-acc">Gallery</span>
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
