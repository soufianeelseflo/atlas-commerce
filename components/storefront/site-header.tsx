"use client";

import Link from "next/link";
import { useCart } from "@/components/storefront/cart-provider";

export function SiteHeader() {
  const { itemCount, hydrated } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-black/8 bg-[#f4f3ef]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 font-black tracking-[-0.04em]"
          aria-label="Atlas Commerce home"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-[#101112] text-sm text-white">
            A
          </span>
          <span className="text-lg">ATLAS COMMERCE</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-black/65 md:flex">
          <Link className="transition hover:text-black" href="/shop">
            Shop
          </Link>
          <Link className="transition hover:text-black" href="/admin">
            Operations demo
          </Link>
        </nav>

        <Link
          href="/cart"
          className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-bold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          Cart
          <span className="grid min-w-6 place-items-center rounded-full bg-[#101112] px-1.5 py-0.5 text-xs text-white">
            {hydrated ? itemCount : 0}
          </span>
        </Link>
      </div>
    </header>
  );
}
