"use client";

import { useState } from "react";
import { useCart } from "@/components/storefront/cart-provider";

export function AddToCart({
  productId,
  stock,
}: {
  productId: string;
  stock: number;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(productId);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  }

  return (
    <button
      type="button"
      disabled={stock === 0}
      onClick={handleAdd}
      className="w-full rounded-2xl bg-[#101112] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-black disabled:cursor-not-allowed disabled:bg-black/25 sm:w-auto"
    >
      {stock === 0 ? "Sold out" : added ? "Added ✓" : "Add to cart"}
    </button>
  );
}
