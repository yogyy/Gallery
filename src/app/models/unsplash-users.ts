export interface UnsplashUsers {
  username: string;
  first_name: string;
  last_name: string;
  id: string;
  updated_at: string;
  name: string;
  twitter_username: string;
  portfolio_url: string | null;
  bio: string;
  location: string | null;

  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
}
