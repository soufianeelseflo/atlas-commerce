"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/storefront/product-card";
import type { Category, Product } from "@/lib/types";

const categories: Array<"All" | Category> = [
  "All",
  "Audio",
  "Workspace",
  "Mobile",
  "Home",
];

export function ShopClient({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [inStockOnly, setInStockOnly] = useState(false);

  const visibleProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesText =
        normalized.length === 0 ||
        product.name.toLowerCase().includes(normalized) ||
        product.shortDescription.toLowerCase().includes(normalized);
      const matchesCategory =
        category === "All" || product.category === category;
      const matchesStock = !inStockOnly || product.stock > 0;

      return matchesText && matchesCategory && matchesStock;
    });
  }, [products, query, category, inStockOnly]);

  return (
    <div>
      <div className="grid gap-3 rounded-[2rem] border border-black/8 bg-white p-4 shadow-sm lg:grid-cols-[1fr_auto_auto]">
        <label className="relative">
          <span className="sr-only">Search products</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search products..."
            className="h-12 w-full rounded-xl border border-black/10 bg-[#f7f6f2] px-4 text-sm outline-none transition focus:border-black/35"
          />
        </label>

        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-xl px-4 py-3 text-xs font-black transition ${
                item === category
                  ? "bg-[#101112] text-white"
                  : "bg-[#f1f0eb] text-black/60 hover:text-black"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <label className="flex cursor-pointer items-center gap-3 rounded-xl bg-[#f1f0eb] px-4 py-3 text-xs font-black">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(event) => setInStockOnly(event.target.checked)}
            className="size-4 accent-black"
          />
          In stock
        </label>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-black/50">
          {visibleProducts.length} product{visibleProducts.length === 1 ? "" : "s"}
        </p>
        {(query || category !== "All" || inStockOnly) && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All");
              setInStockOnly(false);
            }}
            className="text-sm font-bold underline underline-offset-4"
          >
            Clear filters
          </button>
        )}
      </div>

      {visibleProducts.length > 0 ? (
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-[2rem] border border-dashed border-black/15 bg-white/60 px-6 py-16 text-center">
          <p className="text-lg font-black">No matching products.</p>
          <p className="mt-2 text-sm text-black/50">
            Try a broader search or clear the filters.
          </p>
        </div>
      )}
    </div>
  );
}
