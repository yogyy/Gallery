import SearchPage from './SearchPage';

export const metadata = {
  title: 'Search - NextJS 13.4 Image Gallery',
};
export default async function Page() {
  return (
    <div className="h-full w-full bg-fixed bg-black/60 bg-cover bg-[url('https://utfs.io/f/6a7b677d-a46b-4ba3-8450-589a30b71c42_more%20asuka.jpg')]">
      <div className="flex justify-center w-full pb-10 mx-auto min-h-sekrin bg-black/40">
        <SearchPage />
      </div>
    </div>
  );
}
