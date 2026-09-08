import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-[#f4f3ef] px-5">
      <div className="max-w-lg text-center">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff5c35]">
          404
        </p>
        <h1 className="mt-3 text-5xl font-black tracking-[-0.06em]">
          That page is not in the catalog.
        </h1>
        <Link
          href="/"
          className="mt-7 inline-flex rounded-xl bg-black px-5 py-3 text-sm font-black text-white"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
