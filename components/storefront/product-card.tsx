import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatMad } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <Link
        href={`/product/${product.slug}`}
        className="block overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-[0_20px_70px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(0,0,0,0.09)]"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[#eceae4]">
          <img
            src={product.image}
            alt=""
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"
          />
          {product.stock === 0 ? (
            <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1.5 text-xs font-bold text-white">
              Sold out
            </span>
          ) : product.stock <= 7 ? (
            <span className="absolute left-4 top-4 rounded-full bg-[#ff5c35] px-3 py-1.5 text-xs font-bold text-white">
              Only {product.stock} left
            </span>
          ) : null}
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/40">
                {product.category}
              </p>
              <h3 className="mt-2 text-xl font-black tracking-[-0.035em]">
                {product.name}
              </h3>
            </div>
            <div className="text-right">
              <p className="font-black">{formatMad(product.priceMad)}</p>
              {product.compareAtMad ? (
                <p className="text-xs text-black/35 line-through">
                  {formatMad(product.compareAtMad)}
                </p>
              ) : null}
            </div>
          </div>
          <p className="mt-3 text-sm leading-6 text-black/55">
            {product.shortDescription}
          </p>
          <div className="mt-5 flex items-center justify-between border-t border-black/8 pt-4 text-xs font-bold">
            <span>★ {product.rating} · {product.reviews} reviews</span>
            <span className="transition group-hover:translate-x-1">View →</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
