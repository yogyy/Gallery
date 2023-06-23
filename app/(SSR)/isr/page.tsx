import { Suspense } from 'react';
import Loading from '@/components/client/loader';
import { UnsplashImage } from '@/app/models/unsplash-image';
import Link from 'next/link';
import { NavMenu } from '@/components/client/nav-menu';
import { NextImage } from '@/components/client/NextImage';
export const metadata = {
  title: 'Incremental Static Regeneration Fetching - Next JS 13.4 Image',
};

export const revalidate = 15;

export default async function Page() {
  const res = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_KEY}`,
    {
      // next: {revalidate: 15}
    }
  );
  const image: UnsplashImage = await res.json();

  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;
  return (
    <div className="flex flex-col items-center justify-normal">
      <div className="flex flex-col items-center max-w-5xl gap-3 py-4">
        <NavMenu />
        <p className="text-blue-500 hover:underline">
          by&nbsp;
          <Link href={`/user/${image.user.username}`}>{image.user.username}</Link>
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Suspense fallback={<Loading className="w-screen h-screen" />}>
          <NextImage
            src={image.urls.regular}
            alt={image.description || image.alt_description}
            width={width}
            height={height}
          />
        </Suspense>
      </div>
    </div>
  );
}
