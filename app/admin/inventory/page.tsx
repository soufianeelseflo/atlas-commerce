import { productSalesCount, products } from "@/lib/data";
import { formatMad } from "@/lib/format";

function stockRisk(stock: number): {
  label: string;
  className: string;
} {
  if (stock === 0) {
    return { label: "Sold out", className: "bg-red-100 text-red-700" };
  }
  if (stock <= 5) {
    return { label: "Critical", className: "bg-amber-100 text-amber-800" };
  }
  if (stock <= 10) {
    return { label: "Low", className: "bg-yellow-100 text-yellow-800" };
  }
  return { label: "Healthy", className: "bg-emerald-100 text-emerald-800" };
}

export default function InventoryPage() {
  const inventory = products
    .map((product) => ({
      ...product,
      sold: productSalesCount(product.id),
      risk: stockRisk(product.stock),
    }))
    .sort((a, b) => a.stock - b.stock);

  return (
    <div className="mx-auto max-w-[1500px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff5c35]">
        Inventory
      </p>
      <h1 className="mt-2 text-4xl font-black tracking-[-0.05em]">
        Stock risk before stockouts.
      </h1>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-black/50">
        The same product domain powers the customer catalog and the operations
        risk view, preventing duplicated stock rules across the application.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {inventory.map((product) => (
          <article
            key={product.id}
            className="rounded-[1.8rem] border border-black/8 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <img
                src={product.image}
                alt=""
                className="size-20 rounded-2xl bg-[#eeede8] object-cover"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="truncate font-black">{product.name}</p>
                    <p className="mt-1 text-xs text-black/40">{product.category}</p>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-black ${product.risk.className}`}
                  >
                    {product.risk.label}
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div>
                    <p className="text-[10px] uppercase text-black/35">Stock</p>
                    <p className="mt-1 text-lg font-black">{product.stock}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-black/35">Sold</p>
                    <p className="mt-1 text-lg font-black">{product.sold}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-black/35">Price</p>
                    <p className="mt-1 text-sm font-black">
                      {formatMad(product.priceMad)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
