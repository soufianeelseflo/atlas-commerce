import Link from "next/link";
import { Footer } from "@/components/storefront/footer";
import { ProductCard } from "@/components/storefront/product-card";
import { SiteHeader } from "@/components/storefront/site-header";
import { products } from "@/lib/data";
import { formatMad } from "@/lib/format";

const proofPoints = [
  ["Next.js 16", "App Router · server-first"],
  ["Typed APIs", "Validated order mutations"],
  ["Optimistic UX", "Rollback on failed writes"],
  ["CI guarded", "Typecheck + production build"],
];

const reviewerRoutes = [
  {
    eyebrow: "Customer journey",
    title: "Storefront → product → cart",
    copy: "Search and filter the catalog, inspect product detail states, then run the persistent cart and checkout simulation.",
    href: "/shop",
    cta: "Test storefront",
  },
  {
    eyebrow: "Operations",
    title: "Orders with safe mutations",
    copy: "Change fulfilment state through an optimistic UI backed by validated API transitions and automatic rollback on failure.",
    href: "/admin/orders",
    cta: "Open orders",
  },
  {
    eyebrow: "Risk visibility",
    title: "Inventory before stockouts",
    copy: "See low-stock and sold-out risk using the same typed product source that powers the customer storefront.",
    href: "/admin/inventory",
    cta: "Inspect inventory",
  },
];

export default function HomePage() {
  const featured = products.filter((product) => product.featured).slice(0, 3);
  const lowStock = products.filter((product) => product.stock > 0 && product.stock <= 7).length;

  return (
    <>
      <SiteHeader />
      <main>
        <section className="surface-grid overflow-hidden border-b border-black/8">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
            <div>
              <p className="inline-flex rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] shadow-sm">
                Commerce system · Morocco
              </p>
              <h1 className="mt-6 max-w-4xl text-balance text-5xl font-black leading-[0.93] tracking-[-0.067em] sm:text-7xl">
                Storefront speed on the front. Operational discipline behind it.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-black/55">
                Atlas Commerce is a production-minded Next.js case study that connects a
                customer storefront, checkout flow and commerce operations workspace through
                one typed domain model.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  className="rounded-2xl bg-[#101112] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Explore storefront
                </Link>
                <Link
                  href="/admin"
                  className="rounded-2xl border border-black/12 bg-white px-6 py-4 text-sm font-black transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  Open operations workspace
                </Link>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
                <div>
                  <p className="text-2xl font-black">{products.length}</p>
                  <p className="text-xs leading-5 text-black/40">seeded SKUs</p>
                </div>
                <div>
                  <p className="text-2xl font-black">{lowStock}</p>
                  <p className="text-xs leading-5 text-black/40">low-stock alerts</p>
                </div>
                <div>
                  <p className="text-2xl font-black">REST</p>
                  <p className="text-xs leading-5 text-black/40">typed route handlers</p>
                </div>
                <div>
                  <p className="text-2xl font-black">0</p>
                  <p className="text-xs leading-5 text-black/40">UI libraries</p>
                </div>
              </div>
            </div>

            <div className="relative min-h-[470px] lg:min-h-[500px]">
              <div className="absolute inset-2 rotate-2 rounded-[3rem] bg-[#ff5c35]" />
              <div className="absolute inset-0 -rotate-2 rounded-[3rem] border border-black/10 bg-[#101112] p-5 text-white shadow-2xl sm:p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/35">
                      Operations pulse
                    </p>
                    <p className="mt-1 font-black">Commerce health · seeded scenario</p>
                  </div>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-black text-emerald-300">
                    Healthy
                  </span>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/[0.06] p-4">
                    <p className="text-xs text-white/40">Realized revenue</p>
                    <p className="mt-2 text-2xl font-black">{formatMad(5078)}</p>
                  </div>
                  <div className="rounded-2xl bg-white/[0.06] p-4">
                    <p className="text-xs text-white/40">Orders monitored</p>
                    <p className="mt-2 text-2xl font-black">8</p>
                  </div>
                </div>
                <div className="mt-4 rounded-2xl bg-white/[0.06] p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-black">Fulfilment flow</p>
                    <p className="text-xs text-white/35">typed status model</p>
                  </div>
                  <div className="mt-5 space-y-4">
                    {[
                      ["Confirmed", "AT-1048", "Casablanca", "42%"],
                      ["Packed", "AT-1047", "Rabat", "66%"],
                      ["Shipped", "AT-1045", "Agadir", "84%"],
                    ].map(([status, id, city, progress]) => (
                      <div key={id} className="flex items-center gap-3">
                        <span className="size-2 shrink-0 rounded-full bg-[#ffb347]" />
                        <div className="min-w-0 flex-1">
                          <div className="flex justify-between gap-4 text-xs">
                            <span className="font-black">{id}</span>
                            <span className="text-white/35">{city}</span>
                          </div>
                          <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10">
                            <div
                              className="h-full rounded-full bg-white/70"
                              style={{ width: progress }}
                            />
                          </div>
                        </div>
                        <span className="text-[10px] font-black text-white/45">{status}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-2xl border border-white/8 p-4">
                    <p className="text-white/35">Mutation strategy</p>
                    <p className="mt-1 font-black">Optimistic + rollback</p>
                  </div>
                  <div className="rounded-2xl border border-white/8 p-4">
                    <p className="text-white/35">Deployment gate</p>
                    <p className="mt-1 font-black">Typecheck + build</p>
                  </div>
                </div>
                <p className="absolute bottom-5 left-5 right-5 text-xs leading-5 text-white/35 sm:left-6 sm:right-6">
                  Storefront and operations views share one typed commerce domain instead of duplicating business state in the UI.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-black/8 bg-white">
          <div className="mx-auto grid max-w-7xl gap-px bg-black/8 sm:grid-cols-2 lg:grid-cols-4">
            {proofPoints.map(([title, copy]) => (
              <div key={title} className="bg-white px-5 py-5 sm:px-8">
                <p className="text-sm font-black tracking-[-0.02em]">{title}</p>
                <p className="mt-1 text-xs leading-5 text-black/40">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff5c35]">
                Product experience
              </p>
              <h2 className="mt-2 text-4xl font-black tracking-[-0.05em]">
                A storefront that still feels like a product.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-black/50">
                The customer-facing flow is intentionally polished enough to review visually,
                while the same data model continues into operational screens and APIs.
              </p>
            </div>
            <Link
              href="/shop"
              className="text-sm font-black underline decoration-2 underline-offset-4"
            >
              Browse full catalog →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="border-y border-black/8 bg-[#101112] text-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff8a6d]">
                Reviewer path
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                Three flows show the engineering better than a wall of screenshots.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/50">
                Every route below is backed by code in this repository and designed to expose a
                different production concern: customer UX, state mutation safety and operational risk.
              </p>
            </div>

            <div className="mt-9 grid gap-4 lg:grid-cols-3">
              {reviewerRoutes.map((route) => (
                <article
                  key={route.title}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]"
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ff8a6d]">
                    {route.eyebrow}
                  </p>
                  <h3 className="mt-3 text-xl font-black tracking-[-0.03em]">{route.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/45">{route.copy}</p>
                  <Link
                    href={route.href}
                    className="mt-6 inline-flex text-xs font-black underline decoration-2 underline-offset-4"
                  >
                    {route.cta} →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-black/8 bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-3 lg:py-20">
            {[
              [
                "01",
                "Server-first by default",
                "Catalog and product detail pages render from typed server data, while browser state is limited to focused client islands such as cart and mutation controls.",
              ],
              [
                "02",
                "Mutations fail safely",
                "Order status changes feel immediate, but API validation remains authoritative and the UI restores the previous state when a request fails.",
              ],
              [
                "03",
                "Small dependency surface",
                "The interface is custom React and Tailwind rather than a large component library, reducing upgrade risk and making the implementation easy to audit.",
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
