import './globals.css';
import Navbar from './navbar';
import { Toaster } from '@/components/client/toaster';
import Footer from '@/components/layout/footer';
import { cn } from '@/lib/utils';
import { MyContextProvider } from '@/components/client/context';

export const metadata = {
  title: 'Gallery',
  description: 'Learning Next 13.4, Gallery',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <MyContextProvider>
        <Navbar />
        <main className={cn('pb-10 min-h-sekrin bg-bg/50')}>{children}</main>
        <Toaster />
        <Footer />
      </MyContextProvider>
    </html>
  );
}
