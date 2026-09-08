import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#101112] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-xl font-black tracking-[-0.04em]">ATLAS COMMERCE</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
            Technical demo of a modern storefront and commerce-operations
            workspace. Seeded data only—no real orders are processed.
          </p>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-white/40">
            Explore
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <Link href="/shop">Catalog</Link>
            <Link href="/cart">Cart & checkout</Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-white/40">
            Operations
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <Link href="/admin">Dashboard</Link>
            <Link href="/admin/orders">Orders</Link>
            <Link href="/admin/inventory">Inventory</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
