import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './navbar';
import { MyContextProvider } from '@/components/client/context';
import { Toaster } from '@/components/client/toaster';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'], fallback: ['arial'] });

export const metadata = {
  title: 'Gallery',
  description: 'Learning Next 13.4, Gallery',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`relative ${inter.className}`}>
        <Navbar />
        <main>{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
