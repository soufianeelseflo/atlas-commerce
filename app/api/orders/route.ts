import { NextResponse } from "next/server";
import { listOrders } from "@/lib/orders-store";

export async function GET() {
  const orders = listOrders();

  return NextResponse.json({
    data: orders,
    meta: {
      count: orders.length,
      generatedAt: new Date().toISOString(),
    },
  });
}
