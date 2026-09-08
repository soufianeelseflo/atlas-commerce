import type { Order, Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "p-aurora",
    slug: "aurora-headphones",
    name: "Aurora Headphones",
    category: "Audio",
    priceMad: 1290,
    compareAtMad: 1490,
    stock: 18,
    rating: 4.8,
    reviews: 126,
    image: "/products/aurora.svg",
    accent: "violet",
    shortDescription: "Wireless ANC headphones with 38-hour battery life.",
    description:
      "Aurora is tuned for long work sessions: active noise cancellation, a light over-ear fit and USB-C fast charging.",
    features: ["Active noise cancellation", "38-hour battery", "USB-C fast charge", "Dual-device pairing"],
    featured: true,
  },
  {
    id: "p-nomad",
    slug: "nomad-keyboard",
    name: "Nomad 75 Keyboard",
    category: "Workspace",
    priceMad: 890,
    stock: 7,
    rating: 4.7,
    reviews: 83,
    image: "/products/nomad.svg",
    accent: "amber",
    shortDescription: "Compact mechanical keyboard with quiet tactile switches.",
    description:
      "A focused 75% layout with hot-swappable switches, multi-device Bluetooth and a solid aluminum top plate.",
    features: ["75% layout", "Hot-swappable switches", "Bluetooth + USB-C", "Mac/Windows layers"],
    featured: true,
  },
  {
    id: "p-pulse",
    slug: "pulse-powerbank",
    name: "Pulse 20K Power Bank",
    category: "Mobile",
    priceMad: 549,
    stock: 32,
    rating: 4.6,
    reviews: 211,
    image: "/products/pulse.svg",
    accent: "cyan",
    shortDescription: "20,000 mAh USB-C PD battery with a clear power display.",
    description:
      "Pulse keeps phones, tablets and compact laptops moving with two USB-C ports and power delivery.",
    features: ["20,000 mAh", "65W USB-C PD", "Dual USB-C", "Battery percentage display"],
    featured: true,
  },
  {
    id: "p-orbit",
    slug: "orbit-desk-lamp",
    name: "Orbit Desk Lamp",
    category: "Workspace",
    priceMad: 690,
    compareAtMad: 790,
    stock: 4,
    rating: 4.9,
    reviews: 58,
    image: "/products/orbit.svg",
    accent: "emerald",
    shortDescription: "Glare-controlled desk lighting with touch dimming.",
    description:
      "Orbit uses a wide asymmetric light bar to keep your desk bright without reflecting into your display.",
    features: ["5 brightness levels", "3 color temperatures", "Memory mode", "USB-C power"],
  },
  {
    id: "p-solo",
    slug: "solo-speaker",
    name: "Solo Mini Speaker",
    category: "Audio",
    priceMad: 420,
    stock: 0,
    rating: 4.5,
    reviews: 147,
    image: "/products/solo.svg",
    accent: "rose",
    shortDescription: "Pocket Bluetooth speaker with a surprisingly full sound.",
    description:
      "A compact speaker built for everyday carry, with IPX6 splash resistance and a 12-hour battery.",
    features: ["12-hour battery", "IPX6", "USB-C", "Stereo pairing"],
  },
  {
    id: "p-frame",
    slug: "frame-charging-stand",
    name: "Frame Charging Stand",
    category: "Mobile",
    priceMad: 360,
    stock: 11,
    rating: 4.4,
    reviews: 69,
    image: "/products/frame.svg",
    accent: "blue",
    shortDescription: "Minimal magnetic charging stand for desk and bedside.",
    description:
      "Frame keeps your phone readable while charging and uses a weighted recycled-aluminum base for stability.",
    features: ["Magnetic alignment", "15W wireless charging", "Weighted base", "Portrait/landscape"],
  },
  {
    id: "p-halo",
    slug: "halo-air-purifier",
    name: "Halo Air Purifier",
    category: "Home",
    priceMad: 1190,
    stock: 6,
    rating: 4.7,
    reviews: 92,
    image: "/products/halo.svg",
    accent: "lime",
    shortDescription: "Quiet HEPA purifier with automatic air-quality mode.",
    description:
      "Halo is designed for bedrooms and workspaces, automatically adjusting fan speed based on air-quality readings.",
    features: ["HEPA filtration", "Auto mode", "Sleep mode", "Filter-life indicator"],
  },
  {
    id: "p-flow",
    slug: "flow-usb-hub",
    name: "Flow 8-in-1 Hub",
    category: "Workspace",
    priceMad: 620,
    stock: 23,
    rating: 4.6,
    reviews: 174,
    image: "/products/flow.svg",
    accent: "orange",
    shortDescription: "USB-C hub with HDMI, Ethernet, SD and 100W passthrough.",
    description:
      "Flow turns one USB-C port into a complete workstation with a cool-running aluminum shell.",
    features: ["4K HDMI", "Gigabit Ethernet", "SD + microSD", "100W passthrough"],
  },
];

export const ordersSeed: Order[] = [
  {
    id: "AT-1048",
    customer: { name: "Salma B.", city: "Casablanca", phone: "+212 6 12 45 78 20" },
    createdAt: "2026-09-08T14:42:00+01:00",
    status: "confirmed",
    paymentStatus: "cod",
    lines: [
      { productId: "p-aurora", name: "Aurora Headphones", quantity: 1, unitPriceMad: 1290 },
      { productId: "p-flow", name: "Flow 8-in-1 Hub", quantity: 1, unitPriceMad: 620 },
    ],
  },
  {
    id: "AT-1047",
    customer: { name: "Yassine K.", city: "Rabat", phone: "+212 6 43 19 02 11" },
    createdAt: "2026-09-08T12:10:00+01:00",
    status: "packed",
    paymentStatus: "paid",
    lines: [{ productId: "p-nomad", name: "Nomad 75 Keyboard", quantity: 1, unitPriceMad: 890 }],
  },
  {
    id: "AT-1046",
    customer: { name: "Imane A.", city: "Marrakech", phone: "+212 6 77 34 81 42" },
    createdAt: "2026-09-08T10:27:00+01:00",
    status: "pending",
    paymentStatus: "cod",
    lines: [{ productId: "p-orbit", name: "Orbit Desk Lamp", quantity: 2, unitPriceMad: 690 }],
  },
  {
    id: "AT-1045",
    customer: { name: "Omar E.", city: "Agadir", phone: "+212 6 91 04 55 32" },
    createdAt: "2026-09-07T18:06:00+01:00",
    status: "shipped",
    paymentStatus: "paid",
    lines: [
      { productId: "p-pulse", name: "Pulse 20K Power Bank", quantity: 1, unitPriceMad: 549 },
      { productId: "p-frame", name: "Frame Charging Stand", quantity: 1, unitPriceMad: 360 },
    ],
  },
  {
    id: "AT-1044",
    customer: { name: "Nora T.", city: "Tanger", phone: "+212 6 55 72 14 68" },
    createdAt: "2026-09-07T15:31:00+01:00",
    status: "delivered",
    paymentStatus: "paid",
    lines: [{ productId: "p-halo", name: "Halo Air Purifier", quantity: 1, unitPriceMad: 1190 }],
  },
  {
    id: "AT-1043",
    customer: { name: "Ayoub R.", city: "Fès", phone: "+212 6 32 08 64 17" },
    createdAt: "2026-09-07T09:20:00+01:00",
    status: "delivered",
    paymentStatus: "cod",
    lines: [{ productId: "p-aurora", name: "Aurora Headphones", quantity: 1, unitPriceMad: 1290 }],
  },
  {
    id: "AT-1042",
    customer: { name: "Meriem S.", city: "Casablanca", phone: "+212 6 68 92 20 33" },
    createdAt: "2026-09-06T17:44:00+01:00",
    status: "cancelled",
    paymentStatus: "refunded",
    lines: [{ productId: "p-flow", name: "Flow 8-in-1 Hub", quantity: 1, unitPriceMad: 620 }],
  },
  {
    id: "AT-1041",
    customer: { name: "Hamza J.", city: "El Jadida", phone: "+212 6 21 66 08 99" },
    createdAt: "2026-09-06T11:02:00+01:00",
    status: "delivered",
    paymentStatus: "paid",
    lines: [
      { productId: "p-nomad", name: "Nomad 75 Keyboard", quantity: 1, unitPriceMad: 890 },
      { productId: "p-pulse", name: "Pulse 20K Power Bank", quantity: 2, unitPriceMad: 549 },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function orderTotal(order: Order): number {
  return order.lines.reduce(
    (sum, line) => sum + line.quantity * line.unitPriceMad,
    0,
  );
}

export function productSalesCount(productId: string): number {
  return ordersSeed
    .filter((order) => order.status !== "cancelled")
    .flatMap((order) => order.lines)
    .filter((line) => line.productId === productId)
    .reduce((sum, line) => sum + line.quantity, 0);
}
