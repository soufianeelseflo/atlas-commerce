"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="grid min-h-screen place-items-center bg-[#f4f3ef] px-5">
      <div className="max-w-lg rounded-[2rem] border border-black/10 bg-white p-8 text-center shadow-sm">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ff5c35]">
          Recoverable error
        </p>
        <h1 className="mt-3 text-3xl font-black tracking-[-0.04em]">
          Something failed safely.
        </h1>
        <p className="mt-3 text-sm leading-6 text-black/50">
          The application caught the failure instead of leaving the UI in an
          unknown state.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 rounded-xl bg-black px-5 py-3 text-sm font-black text-white"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
