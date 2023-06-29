import { UnsplashImage } from '../models/unsplash-image';
import Link from 'next/link';
import { NavMenu } from '@/components/client/nav-menu';
import { NextImage } from '@/components/client/NextImage';

export const metadata = {
  title: 'Static Fetching - Next JS 13.4 Image',
};

export default async function Page() {
  const key = process.env.UNSPLASH_KEY;
  const res = await fetch(`https://api.unsplash.com/photos/random?client_id=${key}`);
  const image: UnsplashImage = await res.json();

  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;
  return (
    <div className="flex flex-col items-center w-full px-2 mx-auto h-auto md:px-0">
      <div className="flex flex-col items-center max-w-5xl gap-3 py-4">
        <NavMenu />
        <p className="text-acc/80 hover:underline">
          by&nbsp;
          <Link href={`/user/${image.user.username}`}>{image.user.username}</Link>
        </p>
      </div>

      <NextImage
        src={image.urls.regular}
        alt={image.description || image.alt_description}
        width={width}
        height={height}
      />
    </div>
  );
}
