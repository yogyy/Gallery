import { NextResponse } from 'next/server';

const allowedOrigins =
  process.env.NODE_ENV === 'production'
    ? ['https://your.domain.com']
    : ['http://localhost:3000', 'http://localhost:8080'];

export function middleware(request: Request) {
  const origin = request.headers.get('origin');
  console.log('origin ' + origin);
  //console.log('allowedOrigins ' + allowedOrigins);

  //add || !origin if youu want to rest client
  //if ((origin && !allowedOrigins.includes(origin)) || !origin) {
  if (origin && !allowedOrigins.includes(origin)) {
    console.log('not allowed');
    return new NextResponse(null, {
      status: 400,
      statusText: 'Bad Request cuy',
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }

  return NextResponse.next({
    headers: {
      'Access-Control-Allow-Origin': origin || '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers':
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
    },
  });
}

export const config = {
  matcher: ['/api/:path*'],
};
