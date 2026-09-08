export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div className="h-5 w-32 animate-pulse rounded bg-black/10" />
      <div className="mt-5 h-16 max-w-2xl animate-pulse rounded-2xl bg-black/10" />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[0, 1, 2].map((item) => (
          <div
            key={item}
            className="aspect-[4/3] animate-pulse rounded-[2rem] bg-black/7"
          />
        ))}
      </div>
    </div>
  );
}
