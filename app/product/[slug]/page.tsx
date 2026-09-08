import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCart } from "@/components/storefront/add-to-cart";
import { Footer } from "@/components/storefront/footer";
import { SiteHeader } from "@/components/storefront/site-header";
import { getProductBySlug, products } from "@/lib/data";
import { formatMad } from "@/lib/format";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  return {
    title: product?.name ?? "Product",
    description: product?.shortDescription,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-16">
        <Link
          href="/shop"
          className="text-sm font-black text-black/45 underline underline-offset-4"
        >
          ← Back to catalog
        </Link>

        <div className="mt-7 grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div className="overflow-hidden rounded-[2.5rem] border border-black/8 bg-white shadow-sm">
            <img
              src={product.image}
              alt=""
              className="aspect-[4/3] w-full bg-[#eceae4] object-cover"
            />
          </div>

          <section className="lg:sticky lg:top-28">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff5c35]">
              {product.category}
            </p>
            <h1 className="mt-3 text-5xl font-black leading-[0.96] tracking-[-0.06em]">
              {product.name}
            </h1>
            <p className="mt-5 text-lg leading-8 text-black/55">
              {product.description}
            </p>

            <div className="mt-7 flex items-end gap-3">
              <p className="text-3xl font-black">{formatMad(product.priceMad)}</p>
              {product.compareAtMad ? (
                <p className="pb-1 text-sm text-black/35 line-through">
                  {formatMad(product.compareAtMad)}
                </p>
              ) : null}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-bold">
              <span className="rounded-full bg-white px-3 py-2 shadow-sm">
                ★ {product.rating} · {product.reviews} reviews
              </span>
              <span
                className={`rounded-full px-3 py-2 ${
                  product.stock > 7
                    ? "bg-emerald-100 text-emerald-800"
                    : product.stock > 0
                      ? "bg-amber-100 text-amber-800"
                      : "bg-red-100 text-red-700"
                }`}
              >
                {product.stock > 7
                  ? "In stock"
                  : product.stock > 0
                    ? `${product.stock} remaining`
                    : "Sold out"}
              </span>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-2xl border border-black/8 bg-white px-4 py-4 text-sm font-bold"
                >
                  <span className="mr-2 text-[#ff5c35]">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <AddToCart productId={product.id} stock={product.stock} />
            </div>

            <div className="mt-8 border-t border-black/10 pt-6">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-black/35">
                Integration note
              </p>
              <p className="mt-2 max-w-xl text-sm leading-6 text-black/50">
                In a production store, availability and pricing would come from the
                existing commerce backend. The product UI does not own that business
                logic, which keeps integration changes isolated.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
