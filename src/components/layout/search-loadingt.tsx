import { Skeleton } from '../ui/skeleton';

export function SkeletonDemo() {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <Skeleton key={index} className="min-w-full rounded h-80 shrink" />
      ))}
    </>
  );
}
