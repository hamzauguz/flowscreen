# FlowScreen

**Beautiful, production-ready error and state screens for React and Next.js.**  
Free-first architecture. Optional entitlement system. No remote UI fetch.

Templates live in the SDK. Your backend returns only entitlement config (`plan`, `enabledTemplates`, `ttl`). No Supabase required. No API routes required to get started.

---

## Why FlowScreen?

- Drop-in error & state screens
- No CSS setup required
- Works instantly in free mode
- Templates bundled in SDK
- Optional entitlement system
- SSR safe
- Next.js ready
- SaaS-friendly architecture

---

## Architecture

**FREE MODE**

```
App → FlowScreen SDK → Render (no network)
```

**PRO / ENTERPRISE MODE**

```
App → FlowScreen SDK → FlowScreen backend (/bootstrap) → Supabase (server only)
```

- The SDK **never** fetches templates.
- The backend **never** returns HTML/CSS/JS.
- The backend returns only JSON: `{ plan, enabledTemplates, ttl }`.

---

## Installation

```bash
npm install flowscreen
```

---

## React

Use **`FlowScreen`** for any state screen (errors, empty states, maintenance, unauthorized, etc.).

```tsx
import {
  FlowScreen,
  ScreenFlowProvider,
  useFlowScreen,
} from "flowscreen/react";

export default function Page() {
  return <FlowScreen template="error-cloudflare" code="503" />;
}
```

Title and description are dynamic (from default messages by `code`, or overridable via props).

**Without Provider**

- Works in free mode
- No network call
- Free templates enabled
- Premium templates fall back to `error-minimal`

**With Provider**

- Wrap with `<ScreenFlowProvider projectKey="pk_..." />`
- Provider calls `POST /bootstrap`
- Response cached (memory + localStorage)
- Enables premium templates when entitled

---

## Usage Examples

### Error screen

Code drives default title/description; override with `title` and `description` props.

```tsx
<FlowScreen
  template="error-modern"
  code="500"
  title="Something went wrong"
  description="Please try again later."
  button={{ label: "Reload", onClick: () => window.location.reload() }}
/>
```

### Empty state

No `code` required. Suited for dashboards and SaaS tables when there’s no data.

```tsx
<FlowScreen
  template="empty-basic"
  title="No results found"
  description="Try adjusting your filters."
  button={{ label: "Clear Filters", onClick: resetFilters }}
/>
```

### Maintenance

Fits scheduled downtime or feature flags. SSR-safe.

```tsx
<FlowScreen
  template="maintenance-under-construction"
  code="503"
  title="Scheduled Maintenance"
  description="We'll be back at 02:00 UTC."
/>
```

---

## Theming

`theme.typography` controls visual tokens (e.g. code size, title size). Use `classNames` to override specific elements with your own CSS.

```tsx
<FlowScreen
  template="error-modern"
  code="503"
  theme={{
    fontFamily: "Inter",
    typography: {
      code: { fontSize: "6rem" },
      title: { fontSize: "2rem" },
    },
  }}
/>
```

---

## Hide fields

Omit title or description when the template supports it.

```tsx
<FlowScreen template="error-cloudflare" code="404" hideTitle hideDescription />
```

---

## useFlowScreen()

Returns: `{ plan, enabledTemplates, ttl }`.

- **plan**: `"free"` | `"pro"` | `"enterprise"`
- **enabledTemplates**: `string[]` (free: basic + error-modern, error-minimal, error-classic, error-cloudflare; pro/enterprise: `["*"]` = all templates)
- **ttl**: `number` (seconds)

Without Provider: returns free defaults; never throws. No network call.

---

## Free Templates & Fallback Behavior

**Free templates** (no Provider required): **basic**, **error-modern**, **error-minimal**, **error-classic**, **error-cloudflare**.

Unknown or premium-only template IDs fall back to **error-minimal**.

---

## Available Templates

- `basic` / `error-minimal` – minimal
- `error-cloudflare` – Cloudflare-style
- `error-modern` – modern gradient
- `error-classic` – classic bordered
- `error-parallax`, `error-animated`, `error-sad-bear`, `error-character-illustration`, `error-sleeping-moon`

---

## Template categories

- **Error** → HTTP errors (4xx, 5xx)
- **Empty** → No-data states (tables, search, dashboards)
- **Maintenance** → Downtime or feature-flag screens

---

## Features

- Free-first architecture
- Optional Provider (never required)
- Zero backend setup for customers
- Templates bundled in SDK
- SSR compatible
- Next.js ready
- Theme system
- `classNames` escape hatch
- Safe fallback in free mode
- TTL-based entitlement cache

---

## Who is this for?

- SaaS applications
- Dashboards
- Developer tools
- Internal admin panels
- Products needing production-ready error states

---

## Documentation

See full documentation at [https://flowscreen.io/docs/get-started](https://flowscreen.io/docs/get-started).

---

## Next.js and local `file:` dependency

Next.js 16 (Turbopack) has a [known limitation](https://github.com/vercel/next.js/issues/85057) resolving local packages and subpath exports. Use `transpilePackages: ["flowscreen"]` and, if needed, `turbopack.root`. Or use `next build --webpack`.

---

## Build

```bash
npm run build
```

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

---

## Security

See [SECURITY.md](./SECURITY.md).

---

## License

See [LICENSE](./LICENSE) in this repository.
