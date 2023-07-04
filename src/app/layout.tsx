import './globals.css';
import Navbar from './navbar';
import { Toaster } from '@/components/client/toaster';
import Footer from '@/components/layout/footer';
import { cn } from '@/lib/utils';
import { MyContextProvider } from '@/components/client/context';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], fallback: ['arial'] });
export const metadata = {
  title: 'Gallery',
  description: 'Gallery App',
  themeColor: 'black',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyContextProvider>
          <Navbar />
          <main className={cn('pb-10 min-h-sekrin backdrop-brightness-50')}>{children}</main>
          <Toaster />
          <Footer />
        </MyContextProvider>
      </body>
    </html>
  );
}
