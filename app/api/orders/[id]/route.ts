import { NextResponse } from "next/server";
import {
  findOrder,
  isOrderStatus,
  updateOrderStatus,
} from "@/lib/orders-store";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(
  _request: Request,
  { params }: RouteContext,
) {
  const { id } = await params;
  const order = findOrder(id);

  if (!order) {
    return NextResponse.json(
      { error: { code: "ORDER_NOT_FOUND", message: "Order not found." } },
      { status: 404 },
    );
  }

  return NextResponse.json({ data: order });
}

export async function PATCH(
  request: Request,
  { params }: RouteContext,
) {
  const { id } = await params;

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: { code: "INVALID_JSON", message: "Request body must be valid JSON." } },
      { status: 400 },
    );
  }

  const status =
    typeof payload === "object" &&
    payload !== null &&
    "status" in payload
      ? payload.status
      : undefined;

  if (!isOrderStatus(status)) {
    return NextResponse.json(
      {
        error: {
          code: "INVALID_STATUS",
          message: "A valid order status is required.",
        },
      },
      { status: 422 },
    );
  }

  try {
    const updated = updateOrderStatus(id, status);
    return NextResponse.json({ data: updated });
  } catch (error) {
    const code = error instanceof Error ? error.message : "UNKNOWN_ERROR";

    if (code === "ORDER_NOT_FOUND") {
      return NextResponse.json(
        { error: { code, message: "Order not found." } },
        { status: 404 },
      );
    }

    if (code === "INVALID_TRANSITION") {
      return NextResponse.json(
        {
          error: {
            code,
            message: "That order status transition is not allowed.",
          },
        },
        { status: 409 },
      );
    }

    return NextResponse.json(
      { error: { code: "UNKNOWN_ERROR", message: "Unexpected server error." } },
      { status: 500 },
    );
  }
}
