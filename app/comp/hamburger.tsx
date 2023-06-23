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
import { AlignJustify, AlignLeft } from 'lucide-react';
import React from 'react';
import { SideNavLink } from './nav-link';

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link" className="text-white">
          <AlignJustify />
        </Button>
      </SheetTrigger>
      <SheetContent
        position="left"
        size="xl"
        className="flex flex-col items-start text-white border-none bg-foreground sm:hidden"
      >
        <SheetHeader>
          <SheetTitle className="flex w-full text-base text-white">
            <AlignLeft className="mx-2.5" /> <span className="text-green-600">Nusantara</span>
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
