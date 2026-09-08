import type { Metadata } from "next";
import "@/app/globals.css";
import { CartProvider } from "@/components/storefront/cart-provider";

export const metadata: Metadata = {
  title: {
    default: "Atlas Commerce",
    template: "%s · Atlas Commerce",
  },
  description:
    "A production-minded e-commerce storefront and operations dashboard built with Next.js, TypeScript and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
