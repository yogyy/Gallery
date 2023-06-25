import SearchPage from './SearchPage';

export const metadata = {
  title: 'Search - NextJS 13.4 Image Gallery',
};
export default async function Page() {
  return (
    <div className="min-h-screen w-full bg-fixed bg-black/60 bg-cover bg-[url('https://images.unsplash.com/photo-1563863251222-11d3e3bd3b62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]">
      <div className="flex justify-center w-full mx-auto bg-black/40">
        <SearchPage />
      </div>
    </div>
  );
}
