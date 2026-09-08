import Link from "next/link";
import { Footer } from "@/components/storefront/footer";
import { ProductCard } from "@/components/storefront/product-card";
import { SiteHeader } from "@/components/storefront/site-header";
import { products } from "@/lib/data";
import { formatMad } from "@/lib/format";

export default function HomePage() {
  const featured = products.filter((product) => product.featured).slice(0, 3);
  const lowStock = products.filter((product) => product.stock > 0 && product.stock <= 7).length;

  return (
    <>
      <SiteHeader />
      <main>
        <section className="surface-grid overflow-hidden border-b border-black/8">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
            <div>
              <p className="inline-flex rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em]">
                Modern commerce · Morocco
              </p>
              <h1 className="mt-6 max-w-4xl text-balance text-5xl font-black leading-[0.94] tracking-[-0.065em] sm:text-7xl">
                A storefront built to move fast without breaking what already works.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-black/55">
                A technical demo combining a fast customer experience with an
                operations workspace for orders, inventory and safe production-style
                changes.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  className="rounded-2xl bg-[#101112] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5"
                >
                  Explore storefront
                </Link>
                <Link
                  href="/admin"
                  className="rounded-2xl border border-black/12 bg-white px-6 py-4 text-sm font-black transition hover:-translate-y-0.5"
                >
                  Open operations demo
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-7 text-sm">
                <div>
                  <p className="text-2xl font-black">8</p>
                  <p className="text-black/40">seeded SKUs</p>
                </div>
                <div>
                  <p className="text-2xl font-black">{lowStock}</p>
                  <p className="text-black/40">low-stock alerts</p>
                </div>
                <div>
                  <p className="text-2xl font-black">0</p>
                  <p className="text-black/40">UI libraries</p>
                </div>
              </div>
            </div>

            <div className="relative min-h-[420px]">
              <div className="absolute inset-0 rotate-2 rounded-[3rem] bg-[#ff5c35]" />
              <div className="absolute inset-0 -rotate-2 rounded-[3rem] border border-black/10 bg-[#101112] p-5 text-white shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/35">
                      Live commerce view
                    </p>
                    <p className="mt-1 font-black">Today · 08 Sep 2026</p>
                  </div>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-black text-emerald-300">
                    Healthy
                  </span>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/[0.06] p-4">
                    <p className="text-xs text-white/40">Revenue</p>
                    <p className="mt-2 text-2xl font-black">{formatMad(5078)}</p>
                  </div>
                  <div className="rounded-2xl bg-white/[0.06] p-4">
                    <p className="text-xs text-white/40">Orders</p>
                    <p className="mt-2 text-2xl font-black">8</p>
                  </div>
                </div>
                <div className="mt-4 rounded-2xl bg-white/[0.06] p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-black">Fulfilment flow</p>
                    <p className="text-xs text-white/35">demo data</p>
                  </div>
                  <div className="mt-5 space-y-4">
                    {[
                      ["Confirmed", "AT-1048", "Casa"],
                      ["Packed", "AT-1047", "Rabat"],
                      ["Shipped", "AT-1045", "Agadir"],
                    ].map(([status, id, city]) => (
                      <div key={id} className="flex items-center gap-3">
                        <span className="size-2 rounded-full bg-[#ffb347]" />
                        <div className="min-w-0 flex-1">
                          <div className="flex justify-between gap-4 text-xs">
                            <span className="font-black">{id}</span>
                            <span className="text-white/35">{city}</span>
                          </div>
                          <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10">
                            <div
                              className="h-full rounded-full bg-white/70"
                              style={{
                                width:
                                  status === "Confirmed"
                                    ? "42%"
                                    : status === "Packed"
                                      ? "66%"
                                      : "84%",
                              }}
                            />
                          </div>
                        </div>
                        <span className="text-[10px] font-black text-white/45">
                          {status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="absolute bottom-5 left-5 right-5 text-xs leading-5 text-white/35">
                  Storefront and operations views share one typed commerce domain.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff5c35]">
                Featured
              </p>
              <h2 className="mt-2 text-4xl font-black tracking-[-0.05em]">
                Built for everyday use.
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-sm font-black underline decoration-2 underline-offset-4"
            >
              Browse all products →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="border-y border-black/8 bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-3">
            {[
              [
                "01",
                "Server-first storefront",
                "Catalog and product detail pages render from typed server data, while browser state is kept to focused client islands.",
              ],
              [
                "02",
                "Safe order mutations",
                "Status changes are optimistic for speed, validated by the API and automatically rolled back if the request fails.",
              ],
              [
                "03",
                "Small dependency surface",
                "The UI is custom React and Tailwind instead of a large component library, reducing upgrade and integration risk.",
              ],
            ].map(([number, title, copy]) => (
              <article key={number}>
                <p className="text-xs font-black text-[#ff5c35]">{number}</p>
                <h3 className="mt-3 text-xl font-black tracking-[-0.03em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/50">{copy}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
