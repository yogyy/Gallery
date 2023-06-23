import * as React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface Tooltips {
  children: React.ReactNode;
  trigger: React.ReactNode;
}
export default function Tooltips({ children, trigger }: Tooltips) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{trigger}</TooltipTrigger>
        <TooltipContent>{children}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
