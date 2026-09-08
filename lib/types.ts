export type Category = "Audio" | "Workspace" | "Mobile" | "Home";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: Category;
  priceMad: number;
  compareAtMad?: number;
  stock: number;
  rating: number;
  reviews: number;
  image: string;
  accent: string;
  shortDescription: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "packed"
  | "shipped"
  | "delivered"
  | "cancelled";

export type PaymentStatus = "cod" | "paid" | "refunded";

export type OrderLine = {
  productId: string;
  name: string;
  quantity: number;
  unitPriceMad: number;
};

export type Order = {
  id: string;
  customer: {
    name: string;
    city: string;
    phone: string;
  };
  createdAt: string;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  lines: OrderLine[];
};

export type CartLine = {
  productId: string;
  quantity: number;
};

export type OrderStatusPatch = {
  status: OrderStatus;
};
