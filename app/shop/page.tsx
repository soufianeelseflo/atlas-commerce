import type { Metadata } from "next";
import { Footer } from "@/components/storefront/footer";
import { ShopClient } from "@/components/storefront/shop-client";
import { SiteHeader } from "@/components/storefront/site-header";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Shop",
};

export default function ShopPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto min-h-[70vh] max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff5c35]">
          Catalog
        </p>
        <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h1 className="text-5xl font-black tracking-[-0.06em]">
              Useful objects, clearly sold.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-black/50">
              Search and filter without a round trip. Product detail pages remain
              server-rendered and share the same typed catalog.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <ShopClient products={products} />
        </div>
      </main>
      <Footer />
    </>
  );
}
