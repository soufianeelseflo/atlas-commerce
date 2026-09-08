# Architecture notes

## Goal

Demonstrate a compact e-commerce codebase that is easy to extend without coupling UI components directly to persistence.

## Layers

### Domain
`lib/types.ts`, `lib/data.ts`, `lib/orders-store.ts`

The shape of products and orders is centralized. UI components consume typed objects instead of unstructured API responses.

### API
`app/api/**`

Route handlers are deliberately thin:
- validate input
- call domain/store helper
- map failures to HTTP status codes

### Storefront
`app/(storefront)/**`, `components/storefront/**`

Mostly server components. Client components are limited to behavior that needs browser state: cart, filters and checkout.

### Operations
`app/admin/**`, `components/admin/**`

Commerce KPIs are calculated server-side from typed order/product data. Order mutations use an optimistic client control with rollback.

## Safe extension strategy

When integrating a new production feature:

1. Add/extend the domain type.
2. Add the data/service boundary.
3. Add route handler validation.
4. Add isolated UI behavior.
5. Run `npm run typecheck` and `npm run build`.
6. Verify critical commerce flows before deployment.

This avoids changing unrelated production paths and keeps regressions easier to reason about.
