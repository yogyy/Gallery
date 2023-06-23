import { NavLink } from './comp/nav-link';
import { SheetDemo } from './comp/hamburger';
import { NavMenu } from '@/components/client/nav-menu';

export default async function Navbar() {
  return (
    <header className="">
      <nav className="flex items-center justify-center sm:px-10">
        <div className="block sm:hidden">
          <SheetDemo />
        </div>
        <div className="flex items-center justify-center w-full h-full max-w-5xl py-2 supports-backdrop-blur:bg-background/60 bg-background/95 backdrop-blur">
          <p className="items-start text-base font-semibold text-green-600">Gallery</p>
          <NavLink />
        </div>
      </nav>
    </header>
  );
}
