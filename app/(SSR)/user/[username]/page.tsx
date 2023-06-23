import { UnsplashUsers } from '@/app/models/unsplash-users';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { username: string };
}

async function getUser(username: string): Promise<UnsplashUsers> {
  const res = await fetch(
    `http://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_KEY}`
  );

  if (res.status === 404) notFound();

  return await res.json();
}

export async function generateMetadata({ params: { username } }: PageProps): Promise<Metadata> {
  const user = await getUser(username);

  return {
    title: `${user.first_name} ${user?.last_name} ` || `${user.username} NextJS 13.4 Image Gallery`,
  };
}
export default async function Page({ params: { username } }: PageProps) {
  const user = await getUser(username);

  return (
    <div className="flex items-center justify-center w-full px-3 lg:px-0">
      <div className="w-full max-w-5xl">
        <div className="flex">
          <div className="w-20 h-20">
            <Image width={80} height={80} src={user.profile_image.large} alt={user.bio} />
          </div>
          <h1>{user.username}</h1>
        </div>
        <Link
          className="text-blue-500"
          target="_blank"
          href={`https://unsplash.com/@${user.username}`}
        >
          {user.username}
        </Link>
      </div>
    </div>
  );
}
