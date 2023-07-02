import { NextResponse } from 'next/server';
import { UnsplashSearchResponse } from '@/app/models/unsplash-search-reqsponse';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  if (!query) return NextResponse.json({ error: 'No query provided' }, { status: 400 });

  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.UNSPLASH_KEY}`
  );
  const { results }: UnsplashSearchResponse = await res.json();

  return NextResponse.json(results);
}
