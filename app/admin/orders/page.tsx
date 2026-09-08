import { OrderStatusControl } from "@/components/admin/order-status-control";
import { orderTotal, ordersSeed } from "@/lib/data";
import { formatDateTime, formatMad } from "@/lib/format";

export default function OrdersPage() {
  return (
    <div className="mx-auto max-w-[1500px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff5c35]">
        Fulfilment
      </p>
      <h1 className="mt-2 text-4xl font-black tracking-[-0.05em]">
        Orders without mystery.
      </h1>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-black/50">
        Advance an order through valid states. The UI updates optimistically,
        calls the route handler and rolls back automatically on failure.
      </p>

      <div className="mt-8 overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[980px] border-collapse text-left">
            <thead>
              <tr className="bg-black/[0.025] text-[10px] font-black uppercase tracking-[0.14em] text-black/35">
                <th className="px-6 py-4">Order</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Items</th>
                <th className="px-6 py-4">Payment</th>
                <th className="px-6 py-4">Fulfilment</th>
                <th className="px-6 py-4 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {ordersSeed.map((order) => (
                <tr key={order.id} className="border-t border-black/7 align-top">
                  <td className="px-6 py-5">
                    <p className="text-sm font-black">{order.id}</p>
                    <p className="mt-1 text-[11px] text-black/35">
                      {formatDateTime(order.createdAt)}
                    </p>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm font-bold">{order.customer.name}</p>
                    <p className="mt-1 text-xs text-black/40">
                      {order.customer.city} · {order.customer.phone}
                    </p>
                  </td>
                  <td className="px-6 py-5">
                    <div className="max-w-56 space-y-1">
                      {order.lines.map((line) => (
                        <p key={line.productId} className="text-xs text-black/55">
                          {line.quantity}× {line.name}
                        </p>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="rounded-full bg-black/5 px-2.5 py-1 text-[11px] font-black uppercase">
                      {order.paymentStatus}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <OrderStatusControl
                      orderId={order.id}
                      initialStatus={order.status}
                    />
                  </td>
                  <td className="px-6 py-5 text-right text-sm font-black">
                    {formatMad(orderTotal(order))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
