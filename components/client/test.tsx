'use client';

import { CalendarDays } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { MyContext, useThemeContext } from './context';

export function HoverCardDemo() {
  const { data, setData } = useThemeContext();
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button onClick={() => console.log(data)} variant="link">
          @nextjs
        </Button>
      </HoverCardTrigger>
      <button onClick={() => setData('perihal apa ')}>dadad</button>
      <HoverCardContent className="text-white w-80 bg-foreground">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">The React Framework – created and maintained by @vercel.</p>
            <div className="flex items-center pt-2">
              <CalendarDays className="w-4 h-4 mr-2 opacity-70" />{' '}
              <span className="text-xs text-muted-foreground">Joined December 2021</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
