import SearchPage from './SearchPage';

export const metadata = {
  title: 'Search - NextJS 13.4 Image Gallery',
};
export default async function Page() {
  return (
    <div>
      <div className="flex justify-center w-full mx-auto">
        <SearchPage />
      </div>
    </div>
  );
}
