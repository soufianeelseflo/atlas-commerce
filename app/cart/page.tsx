import type { Metadata } from "next";
import { CartPageClient } from "@/components/storefront/cart-page-client";
import { Footer } from "@/components/storefront/footer";
import { SiteHeader } from "@/components/storefront/site-header";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cart",
};

export default function CartPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto min-h-[70vh] max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff5c35]">
          Checkout flow
        </p>
        <h1 className="mt-3 text-5xl font-black tracking-[-0.06em]">Your cart.</h1>
        <p className="mt-4 max-w-2xl text-black/50">
          Persistent browser cart, stock-aware quantity controls and a validated
          demo checkout handoff.
        </p>
        <div className="mt-9">
          <CartPageClient products={products} />
        </div>
      </main>
      <Footer />
    </>
  );
}
