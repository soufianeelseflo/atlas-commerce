import { NextResponse } from "next/server";
import { products } from "@/lib/data";

export async function GET() {
  return NextResponse.json(
    {
      data: products,
      meta: {
        count: products.length,
        generatedAt: new Date().toISOString(),
      },
    },
    {
      headers: {
        "cache-control": "public, max-age=60, stale-while-revalidate=300",
      },
    },
  );
}
