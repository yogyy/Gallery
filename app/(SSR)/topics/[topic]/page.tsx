import { UnsplashImage } from '@/app/models/unsplash-image';
import { Metadata } from 'next';
import Image from 'next/image';

interface PageProps {
  params: { topic: string };
  // searchParams : {[key: string]: string | string[] | undefined}
}

export function metadata({ params: { topic } }: PageProps): Metadata {
  return {
    title: `${topic} - NextJS 13.4 Image Gallery`,
  };
}

export function generateStaticParams() {
  return ['dc comics', 'indonesia', 'coding'].map(topic => ({ topic }));
}

export default async function Page({ params: { topic } }: PageProps) {
  const res = await fetch(
    `https://api.unsplash.com/photos/random?query=${topic}&count=30&client_id=${process.env.UNSPLASH_KEY}`,
    {
      // next: {revalidate: 15}
    }
  );
  const images: UnsplashImage[] = await res.json();

  return (
    <div className="">
      <h1>{topic}</h1>
      {images.map((image, _index) => (
        <Image
          key={(image.description, _index)}
          src={image.urls.small}
          alt={image.description || 'Unsplash Image'}
          width={250}
          height={250}
          className="h-full max-w-full rounded"
        />
      ))}
    </div>
  );
}
