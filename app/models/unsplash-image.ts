export interface UnsplashImage {
  description: string;
  alt_description: string;
  blur_hash: string;
  user: {
    username: string;
  };
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };
  width: number;
  height: number;
}
