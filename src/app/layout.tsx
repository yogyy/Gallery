import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './navbar';
import { Toaster } from '@/components/client/toaster';
import Footer from '@/components/layout/footer';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], fallback: ['arial'] });

export const metadata = {
  title: 'Gallery',
  description: 'Learning Next 13.4, Gallery',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "h-full w-full bg-fixed bg-center bg-[url('https://utfs.io/f/5c2d8ffd-7f05-4c85-8534-53da0c9e656f_asuka.jpg')]",
          "md:bg-cover md:bg-[url('https://utfs.io/f/6a7b677d-a46b-4ba3-8450-589a30b71c42_more%20asuka.jpg')]",
          'relative',
          inter.className
        )}
      >
        <Navbar />
        <main className="min-h-sekrin pb-10 bg-bg/50">{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
