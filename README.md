# FlowScreen

## 🚫 Your error pages are ugly. Fix them in 3 seconds.

One component. Zero CSS. Production-ready UI.⚡️

<p align="center">
  <img src="https://uyqokbozbnnvazolqxoh.supabase.co/storage/v1/object/public/saas-file/demo-place.gif" alt="FlowScreen Demo" width="100%" />
</p>

<p align="center">
  <a href="https://flowscreen.io/demo"><strong>🚀 Live Demo</strong></a> ·
  <a href="https://flowscreen.io/docs/get-started"><strong>📚 Docs</strong></a>
</p>

![npm](https://img.shields.io/npm/v/flowscreen?label=npm&style=flat-square)
![License](https://img.shields.io/npm/l/flowscreen?style=flat-square)

### ⚡ 1 line is all it takes

```tsx
<FlowScreen template="error-cloudflare" code="503" />
```

That’s it. Your ugly error page is now production-ready.

✨ No CSS · ⚡ Works instantly · 🧩 Drop-in component · 🛡 SSR safe · 🚀 Next.js ready

```bash
npm install flowscreen
```

## Preview

![FlowScreen Sleeping Moon](https://uyqokbozbnnvazolqxoh.supabase.co/storage/v1/object/public/saas-file/error-sleeping-moon.gif)
![FlowScreen Template Maintanence Offline](https://uyqokbozbnnvazolqxoh.supabase.co/storage/v1/object/public/saas-file/maintenance-offline.png)

## Install

```bash
npm install flowscreen
```

## Quick Start

```tsx
import { FlowScreen } from "flowscreen/react";

export default function Page() {
  return <FlowScreen template="error-cloudflare" code="503" />;
}
```

Works instantly with no provider and no backend setup.

## Examples

### Error Screen

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

### Empty State

No `code` required. Suited for dashboards and SaaS tables when there’s no data.

```tsx
<FlowScreen
  template="empty-basic"
  title="No results found"
  description="Try adjusting your filters."
  button={{ label: "Clear Filters", onClick: resetFilters }}
/>
```

### Maintenance Screen

Fits scheduled downtime or feature flags. SSR-safe.

```tsx
<FlowScreen
  template="maintenance-under-construction"
  code="503"
  title="Scheduled Maintenance"
  description="We'll be back at 02:00 UTC."
/>
```

### Hide fields (optional)

Omit title or description when the template supports it.

```tsx
<FlowScreen template="error-cloudflare" code="404" hideTitle hideDescription />
```

## Templates

### error-sleeping-moon

![error-sleeping-moon](https://uyqokbozbnnvazolqxoh.supabase.co/storage/v1/object/public/saas-file/error-sleeping-moon.gif)

### error-cloudflare

![error-cloudflare](https://uyqokbozbnnvazolqxoh.supabase.co/storage/v1/object/public/saas-file/error-cloudflare.png)

### error-parallax

![error-parallax](https://uyqokbozbnnvazolqxoh.supabase.co/storage/v1/object/public/saas-file/error-parallax.png)

### error-mailchimp-pro

![error-mailchimp-pro](https://uyqokbozbnnvazolqxoh.supabase.co/storage/v1/object/public/saas-file/error-mailchimp-pro.gif)

### error-amazon

![error-amazon](https://uyqokbozbnnvazolqxoh.supabase.co/storage/v1/object/public/saas-file/error-amazon-ss.png)

### Available Templates

- `basic`
- `error-cloudflare`
- `error-minimal`
- `error-modern`
- `error-classic`
- `error-parallax`
- `error-animated`
- `error-sad-bear`
- `error-character-illustration`
- `error-sleeping-moon`
- `error-amazon`
- `error-mailchimp`
- `error-mailchimp-pro`
- `empty-basic`
- `empty-no-results`
- `empty-inside-out`
- `empty-not-found-666`
- `maintenance-basic`
- `maintenance-under-construction`
- `maintenance-offline`
- `maintenance-electric-pro`
- `maintenance-playful-road`

### Template categories

- **Error** → HTTP errors (4xx, 5xx)
- **Empty** → No-data states (tables, search, dashboards)
- **Maintenance** → Downtime or feature-flag screens

## Features

- Works instantly in free mode
- No backend required
- SSR compatible
- Next.js ready
- Templates bundled in SDK
- Zero CSS setup
- Theme system
- Safe fallback behavior

### Who is this for?

- SaaS applications
- Dashboards
- Developer tools
- Internal admin panels
- Products needing production-ready error states

## Architecture

```text
App → FlowScreen SDK → Render (no network)
```

Key points:

- The SDK **never** fetches templates.
- Templates are bundled in the SDK.
- No backend is required to render screens.

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

## Docs

See full documentation at https://flowscreen.io/docs/get-started.

### Next.js and local `file:` dependency

Next.js 16 (Turbopack) has a [known limitation](https://github.com/vercel/next.js/issues/85057) resolving local packages and subpath exports.

Use:

- `transpilePackages: ["flowscreen"]`
- and, if needed, `turbopack.root`

Or use:

- `next build --webpack`

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

### Build

```bash
npm run build
```

### Security

See [SECURITY.md](./SECURITY.md).

## License

See [LICENSE](./LICENSE) in this repository.
