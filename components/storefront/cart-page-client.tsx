"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/storefront/cart-provider";
import { formatMad } from "@/lib/format";
import type { Product } from "@/lib/types";

type CheckoutState = "idle" | "submitting" | "success";

export function CartPageClient({ products }: { products: Product[] }) {
  const { lines, setQuantity, removeItem, clear, hydrated } = useCart();
  const [checkoutState, setCheckoutState] = useState<CheckoutState>("idle");
  const [error, setError] = useState<string | null>(null);

  const detailed = useMemo(
    () =>
      lines.flatMap((line) => {
        const product = products.find((item) => item.id === line.productId);
        return product ? [{ ...line, product }] : [];
      }),
    [lines, products],
  );

  const subtotal = detailed.reduce(
    (sum, line) => sum + line.quantity * line.product.priceMad,
    0,
  );
  const shipping = subtotal === 0 || subtotal >= 800 ? 0 : 35;
  const total = subtotal + shipping;

  async function submitCheckout(formData: FormData) {
    setError(null);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const city = String(formData.get("city") ?? "").trim();

    if (name.length < 2 || phone.length < 8 || city.length < 2) {
      setError("Please complete name, phone and city before confirming.");
      return;
    }

    setCheckoutState("submitting");
    await new Promise((resolve) => window.setTimeout(resolve, 650));
    clear();
    setCheckoutState("success");
  }

  if (!hydrated) {
    return (
      <div className="rounded-[2rem] border border-black/8 bg-white p-8">
        <div className="h-6 w-40 animate-pulse rounded bg-black/10" />
        <div className="mt-4 h-24 animate-pulse rounded-2xl bg-black/5" />
      </div>
    );
  }

  if (checkoutState === "success") {
    return (
      <div className="rounded-[2rem] border border-black/8 bg-white p-8 shadow-sm md:p-12">
        <span className="grid size-12 place-items-center rounded-full bg-emerald-100 text-xl">
          ✓
        </span>
        <h2 className="mt-6 text-3xl font-black tracking-[-0.04em]">
          Demo order confirmed.
        </h2>
        <p className="mt-3 max-w-xl text-black/55">
          This checkout is intentionally simulated. In a real integration, this
          step would hand off to the existing order/payment workflow.
        </p>
        <Link
          href="/shop"
          className="mt-8 inline-flex rounded-xl bg-[#101112] px-5 py-3 text-sm font-black text-white"
        >
          Continue shopping
        </Link>
      </div>
    );
  }

  if (detailed.length === 0) {
    return (
      <div className="rounded-[2rem] border border-black/8 bg-white p-10 text-center shadow-sm">
        <p className="text-2xl font-black tracking-[-0.04em]">Your cart is empty.</p>
        <p className="mt-3 text-sm text-black/50">
          Add a product to exercise the persistent cart flow.
        </p>
        <Link
          href="/shop"
          className="mt-6 inline-flex rounded-xl bg-[#101112] px-5 py-3 text-sm font-black text-white"
        >
          Browse catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
      <section className="rounded-[2rem] border border-black/8 bg-white p-5 shadow-sm sm:p-7">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-black">Items</h2>
          <button
            type="button"
            onClick={clear}
            className="text-xs font-black text-black/45 underline underline-offset-4"
          >
            Clear cart
          </button>
        </div>

        <div className="mt-5 divide-y divide-black/8">
          {detailed.map((line) => (
            <div
              key={line.productId}
              className="grid grid-cols-[84px_1fr] gap-4 py-5 sm:grid-cols-[96px_1fr_auto]"
            >
              <img
                src={line.product.image}
                alt=""
                className="aspect-square w-full rounded-2xl bg-[#efeee9] object-cover"
              />
              <div>
                <p className="font-black">{line.product.name}</p>
                <p className="mt-1 text-sm text-black/45">
                  {formatMad(line.product.priceMad)} each
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setQuantity(line.productId, line.quantity - 1)
                    }
                    className="grid size-8 place-items-center rounded-lg border border-black/10 font-black"
                    aria-label={`Decrease ${line.product.name} quantity`}
                  >
                    −
                  </button>
                  <span className="min-w-6 text-center text-sm font-black">
                    {line.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setQuantity(
                        line.productId,
                        Math.min(line.quantity + 1, line.product.stock),
                      )
                    }
                    className="grid size-8 place-items-center rounded-lg border border-black/10 font-black"
                    aria-label={`Increase ${line.product.name} quantity`}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => removeItem(line.productId)}
                    className="ml-2 text-xs font-bold text-black/40 underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <p className="col-start-2 font-black sm:col-auto">
                {formatMad(line.product.priceMad * line.quantity)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <aside className="h-fit rounded-[2rem] bg-[#101112] p-6 text-white shadow-xl sm:p-8">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-white/40">
          Demo checkout
        </p>
        <div className="mt-6 space-y-3 border-b border-white/10 pb-6 text-sm">
          <div className="flex justify-between">
            <span className="text-white/55">Subtotal</span>
            <span className="font-bold">{formatMad(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/55">Shipping</span>
            <span className="font-bold">
              {shipping === 0 ? "Free" : formatMad(shipping)}
            </span>
          </div>
          <div className="flex justify-between pt-2 text-lg">
            <span className="font-black">Total</span>
            <span className="font-black">{formatMad(total)}</span>
          </div>
        </div>

        <form action={submitCheckout} className="mt-6 space-y-3">
          <input
            name="name"
            placeholder="Full name"
            className="h-12 w-full rounded-xl border border-white/10 bg-white/8 px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/30"
          />
          <input
            name="phone"
            placeholder="Phone number"
            inputMode="tel"
            className="h-12 w-full rounded-xl border border-white/10 bg-white/8 px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/30"
          />
          <input
            name="city"
            placeholder="City"
            className="h-12 w-full rounded-xl border border-white/10 bg-white/8 px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/30"
          />
          {error ? (
            <p className="rounded-xl bg-red-400/10 px-4 py-3 text-xs font-bold text-red-200">
              {error}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={checkoutState === "submitting"}
            className="h-12 w-full rounded-xl bg-[#ff5c35] text-sm font-black transition hover:bg-[#ff6d49] disabled:opacity-60"
          >
            {checkoutState === "submitting"
              ? "Confirming..."
              : "Confirm demo order"}
          </button>
        </form>

        <p className="mt-4 text-xs leading-5 text-white/35">
          No payment is processed. This screen demonstrates validation, cart
          state and checkout handoff only.
        </p>
      </aside>
    </div>
  );
}
