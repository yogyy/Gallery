import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-6 border-t md:px-8 md:py-0 h-[98px] bg-bg/80 backdrop-blur">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-sm leading-loose text-center md:text-left text-prim/70">
          Built by{' '}
          <Link
            href="https://twitter.com/yogyxx"
            target="_blank"
            rel="noreferrer"
            className="anchorfooter"
          >
            yogyy
          </Link>
          . The source code is available on{' '}
          <Link
            href="https://github.com/yogyy/NextJS-app-route"
            target="_blank"
            rel="noreferrer"
            className="anchorfooter"
          >
            Github
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
