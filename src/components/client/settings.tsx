'use client';

import * as React from 'react';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import { LuSettings } from 'react-icons/lu';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useBg } from '@/stores/store';

type Checked = DropdownMenuCheckboxItemProps['checked'];

export default function Settings() {
  const { use, changeBg } = useBg();
  const [showProfile, setShowProfile] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="none" size="sm" className="group">
          <LuSettings className="w-5 transition-transform duration-300 hover:text-prim" size="26" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-3 bg-bg/70 text-prim ">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-prim" />
        <DropdownMenuCheckboxItem checked={showProfile} onCheckedChange={setShowProfile} disabled>
          Profile
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem checked={use} onCheckedChange={changeBg}>
          Using Background Image
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
