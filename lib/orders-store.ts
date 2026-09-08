import { ordersSeed } from "@/lib/data";
import type { Order, OrderStatus } from "@/lib/types";

const validTransitions: Record<OrderStatus, OrderStatus[]> = {
  pending: ["confirmed", "cancelled"],
  confirmed: ["packed", "cancelled"],
  packed: ["shipped", "cancelled"],
  shipped: ["delivered"],
  delivered: [],
  cancelled: [],
};

let orders: Order[] = structuredClone(ordersSeed);

export function listOrders(): Order[] {
  return structuredClone(orders);
}

export function findOrder(id: string): Order | undefined {
  const order = orders.find((item) => item.id === id);
  return order ? structuredClone(order) : undefined;
}

export function canTransitionOrder(
  from: OrderStatus,
  to: OrderStatus,
): boolean {
  return validTransitions[from].includes(to);
}

export function updateOrderStatus(
  id: string,
  nextStatus: OrderStatus,
): Order {
  const index = orders.findIndex((order) => order.id === id);
  if (index === -1) {
    throw new Error("ORDER_NOT_FOUND");
  }

  const current = orders[index];
  if (!current) {
    throw new Error("ORDER_NOT_FOUND");
  }

  if (!canTransitionOrder(current.status, nextStatus)) {
    throw new Error("INVALID_TRANSITION");
  }

  const updated: Order = {
    ...current,
    status: nextStatus,
  };

  orders = [
    ...orders.slice(0, index),
    updated,
    ...orders.slice(index + 1),
  ];

  return structuredClone(updated);
}

export function isOrderStatus(value: unknown): value is OrderStatus {
  return (
    typeof value === "string" &&
    ["pending", "confirmed", "packed", "shipped", "delivered", "cancelled"].includes(
      value,
    )
  );
}
