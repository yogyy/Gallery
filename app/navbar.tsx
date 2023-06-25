import { NavLink } from '@/components/layout/nav-link';
import { SheetDemo } from '../components/layout/hamburger';
import Link from 'next/link';

export default async function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b supports-backdrop-blur:bg-background/60 bg-background/95 backdrop-blur">
      <nav className="flex items-center sm:container h-14">
        <div className="inline-flex items-center justify-center px-0 py-2 mr-2 text-base font-medium transition-colors rounded-md focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 sm:hidden">
          <SheetDemo />
        </div>
        <Link href="/" className="items-start px-2 text-base font-bold">
          Gallery
        </Link>
        <div className="flex items-center justify-center w-full h-full max-w-5xl py-2 supports-backdrop-blur:bg-background/60 bg-background/95 backdrop-blur">
          <NavLink />
        </div>
      </nav>
    </header>
  );
}
