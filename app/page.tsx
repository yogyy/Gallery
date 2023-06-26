import Marquee from 'react-fast-marquee';
import { UnsplashImage } from './models/unsplash-image';
import Image from 'next/image';
import { NextImage } from '@/components/client/NextImage';

export default async function Home() {
  return (
    <div className="flex flex-col w-full h-screen min-h-full text-white">
      <div className="relative flex flex-col items-center justify-around h-full">
        <h1 className="font-serif text-2xl font-semibold">Welcome to Gallery!!</h1>
        <Marquee speed={30}>
          <div className="relative flex items-center ">
            {[...Array(2)].map((_, index) => (
              <NextImage
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
