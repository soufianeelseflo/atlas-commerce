# Atlas Commerce

A production-minded e-commerce demo built to show how I structure safe changes in an existing commerce codebase.

**Stack:** Next.js 16.3.3 · React 19.2.8 · TypeScript 5.9.3 · Tailwind CSS 4.3

> This is a technical demo, not a client project. Product/order data is seeded and the admin mutation endpoint uses an in-memory demo store.

## What it demonstrates

- App Router with server-first pages and small client islands
- Typed domain models for products, orders, stock and statuses
- Storefront with product search, category filters and product detail pages
- Persistent cart using localStorage
- Checkout simulation with validation and clear user states
- Commerce operations dashboard with revenue/order/stock KPIs
- Order management with optimistic status updates and rollback on API failure
- Inventory views with low-stock risk surfacing
- Route handlers (`GET` / `PATCH`) behind a small service boundary
- Runtime payload validation without pulling in unnecessary dependencies
- Loading, not-found and error states
- Responsive UI and keyboard-visible focus states
- CI workflow that runs type checking and a production build

## Local run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Useful routes:

- `/` storefront
- `/shop` searchable catalog
- `/cart` cart + demo checkout
- `/admin` commerce overview
- `/admin/orders` order operations
- `/admin/inventory` inventory risk view
- `/api/products`
- `/api/orders`

## Production-safety choices

This repo intentionally keeps business state behind typed helpers instead of editing UI state ad hoc.

For example, order status changes:

1. Validate the transition client-side.
2. Update the row optimistically for fast feedback.
3. Send a `PATCH` to `/api/orders/:id`.
4. Roll back to the previous state if the API fails.

That pattern is useful when working on an existing e-commerce product because UI changes remain local, reversible, and testable.

## What I would replace in a real client project

- Seeded products/orders → PostgreSQL / existing commerce backend
- In-memory order mutation → transactional persistence
- Demo checkout → existing payment/COD workflow
- Demo admin access → authentication + RBAC
- Static product art → CDN / existing media pipeline
- Basic event calls → existing analytics/observability

The UI components and domain boundaries are structured so those integrations can be swapped without rewriting every page.

## Dependency policy

The project intentionally avoids a large component-library/dependency surface. That reduces upgrade risk and makes the code easier to audit inside an existing production application.

Tailwind uses the current v4 PostCSS setup:

```css
@import "tailwindcss";
```

No Tailwind v3 config boilerplate or deprecated `@tailwind base/components/utilities` setup is used.
