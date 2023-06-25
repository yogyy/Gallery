import Marquee from 'react-fast-marquee';
import { UnsplashImage } from './models/unsplash-image';
import Image from 'next/image';
import { Suspense } from 'react';

export default async function Home() {
  // const res = await fetch(
  //   `https://api.unsplash.com/search/photos?query=sea&client_id=${process.env.UNSPLASH_KEY}`
  // );
  // const images: UnsplashImage[] = await res.json();
  return (
    <div className="flex flex-col items-center w-full h-screen min-h-full text-white">
      <div className="relative flex flex-col items-center justify-around h-full">
        <h1 className="font-serif text-2xl font-semibold">Welcome to Gallery!!</h1>
        <Marquee speed={30}>
          <div className="relative flex items-center ">
            {[...Array(2)].map((_, index) => (
              <Image
                key={index}
                src="/images/marquee.webp"
                width={1400}
                height={500}
                alt="marquee"
                className="object-scale-down h-auto"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
