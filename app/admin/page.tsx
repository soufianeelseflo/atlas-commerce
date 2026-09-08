import Link from "next/link";
import { KpiCard } from "@/components/admin/kpi-card";
import { orderTotal, ordersSeed, products } from "@/lib/data";
import { formatDateTime, formatMad } from "@/lib/format";

export default function AdminOverviewPage() {
  const activeOrders = ordersSeed.filter(
    (order) => !["delivered", "cancelled"].includes(order.status),
  );
  const realizedRevenue = ordersSeed
    .filter((order) => order.status === "delivered")
    .reduce((sum, order) => sum + orderTotal(order), 0);
  const openValue = activeOrders.reduce(
    (sum, order) => sum + orderTotal(order),
    0,
  );
  const lowStock = products.filter(
    (product) => product.stock > 0 && product.stock <= 7,
  );
  const soldOut = products.filter((product) => product.stock === 0);

  return (
    <div className="mx-auto max-w-[1500px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff5c35]">
            Commerce overview
          </p>
          <h1 className="mt-2 text-4xl font-black tracking-[-0.05em]">
            Keep the operation boring.
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-black/50">
            The useful kind of boring: clear inventory risk, visible fulfilment
            state and small, reversible mutations.
          </p>
        </div>
        <Link
          href="/"
          className="text-sm font-black underline decoration-2 underline-offset-4"
        >
          View storefront ↗
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard
          label="Realized revenue"
          value={formatMad(realizedRevenue)}
          hint="Delivered orders in seeded demo data"
        />
        <KpiCard
          label="Open order value"
          value={formatMad(openValue)}
          hint={`${activeOrders.length} orders still moving through fulfilment`}
        />
        <KpiCard
          label="Inventory risk"
          value={`${lowStock.length + soldOut.length} SKUs`}
          hint={`${lowStock.length} low stock · ${soldOut.length} sold out`}
        />
        <KpiCard
          label="Catalog"
          value={`${products.length} SKUs`}
          hint="One typed product source powers storefront and operations"
        />
      </div>

      <div className="mt-7 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <section className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-black/8 px-5 py-4 sm:px-6">
            <div>
              <p className="font-black">Recent orders</p>
              <p className="mt-1 text-xs text-black/40">
                Latest seeded fulfilment activity
              </p>
            </div>
            <Link
              href="/admin/orders"
              className="text-xs font-black underline underline-offset-4"
            >
              Manage all
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="text-[10px] font-black uppercase tracking-[0.14em] text-black/35">
                  <th className="px-6 py-3">Order</th>
                  <th className="px-6 py-3">Customer</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Created</th>
                  <th className="px-6 py-3 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {ordersSeed.slice(0, 6).map((order) => (
                  <tr key={order.id} className="border-t border-black/6 text-sm">
                    <td className="px-6 py-4 font-black">{order.id}</td>
                    <td className="px-6 py-4">
                      <p className="font-bold">{order.customer.name}</p>
                      <p className="text-xs text-black/40">{order.customer.city}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="rounded-full bg-black/5 px-2.5 py-1 text-[11px] font-black capitalize">
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs text-black/45">
                      {formatDateTime(order.createdAt)}
                    </td>
                    <td className="px-6 py-4 text-right font-black">
                      {formatMad(orderTotal(order))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-[2rem] bg-[#101112] p-6 text-white shadow-lg">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-white/35">
            Inventory attention
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-[-0.04em]">
            Restock before the storefront feels it.
          </h2>

          <div className="mt-6 space-y-3">
            {[...soldOut, ...lowStock].map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-white/[0.04] p-4"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-black">{product.name}</p>
                  <p className="mt-1 text-xs text-white/35">{product.category}</p>
                </div>
                <span
                  className={`rounded-full px-2.5 py-1 text-[11px] font-black ${
                    product.stock === 0
                      ? "bg-red-400/15 text-red-200"
                      : "bg-amber-400/15 text-amber-200"
                  }`}
                >
                  {product.stock === 0 ? "Sold out" : `${product.stock} left`}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/admin/inventory"
            className="mt-6 inline-flex text-xs font-black text-white underline underline-offset-4"
          >
            Open inventory view →
          </Link>
        </section>
      </div>
    </div>
  );
}
