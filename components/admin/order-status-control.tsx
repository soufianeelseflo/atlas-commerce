"use client";

import { useMemo, useState } from "react";
import type { OrderStatus } from "@/lib/types";

const nextStatus: Partial<Record<OrderStatus, OrderStatus>> = {
  pending: "confirmed",
  confirmed: "packed",
  packed: "shipped",
  shipped: "delivered",
};

const label: Record<OrderStatus, string> = {
  pending: "Pending",
  confirmed: "Confirmed",
  packed: "Packed",
  shipped: "Shipped",
  delivered: "Delivered",
  cancelled: "Cancelled",
};

export function OrderStatusControl({
  orderId,
  initialStatus,
}: {
  orderId: string;
  initialStatus: OrderStatus;
}) {
  const [status, setStatus] = useState(initialStatus);
  const [pending, setPending] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const next = useMemo(() => nextStatus[status], [status]);

  async function advance() {
    if (!next || pending) return;

    const previous = status;
    setStatus(next);
    setPending(true);
    setFeedback(null);

    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status: next }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setFeedback(`Moved to ${label[next]}.`);
    } catch {
      setStatus(previous);
      setFeedback("Update failed — rolled back safely.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="min-w-40">
      <div className="flex items-center gap-2">
        <span
          className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-black ${
            status === "delivered"
              ? "bg-emerald-100 text-emerald-800"
              : status === "cancelled"
                ? "bg-red-100 text-red-700"
                : "bg-black/6 text-black/65"
          }`}
        >
          {label[status]}
        </span>
        {next ? (
          <button
            type="button"
            onClick={advance}
            disabled={pending}
            className="rounded-lg border border-black/10 px-2.5 py-1 text-[11px] font-black transition hover:bg-black hover:text-white disabled:opacity-50"
          >
            {pending ? "Saving…" : `→ ${label[next]}`}
          </button>
        ) : null}
      </div>
      {feedback ? (
        <p className="mt-1.5 text-[10px] font-bold text-black/40">{feedback}</p>
      ) : null}
    </div>
  );
}
