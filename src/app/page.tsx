import Marquee from 'react-fast-marquee';
import { UnsplashImage } from './models/unsplash-image';
import Image from 'next/image';
import { NextImage } from '@/components/client/NextImage';

export default async function Home() {
  return (
    <div className="flex flex-col w-full h-[calc(100vh_-_200px)] text-white">
      <div className="relative flex flex-col items-center justify-around h-auto gap-10 m-auto">
        <h1 className="font-mono text-2xl font-semibold text-prim">Welcome to Gallery!!</h1>
        <div className="h-[400px]">
          <Marquee speed={30}>
            <div className="relative flex items-center bg-none">
              {[...Array(2)].map((_, index) => (
                <NextImage
                  key={index}
                  src="/images/marquee-t.webp"
                  width={1400}
                  height={500}
                  alt="marquee"
                  className="object-scale-down h-auto"
                  priority
                />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
