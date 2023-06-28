import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-6 border-t md:px-8 md:py-0 bg-background/95">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-sm leading-loose text-center text-slate-400 md:text-left">
          Built by{' '}
          <Link
            href="https://twitter.com/yogyxx"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            yogyy
          </Link>
          . The source code is available on{' '}
          <Link
            href="https://github.com/yogyy/NextJS-app-route"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
