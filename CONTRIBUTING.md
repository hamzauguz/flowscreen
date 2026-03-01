# Contributing to FlowScreen

Thank you for your interest in contributing to FlowScreen. This project follows a free-first architecture with strict boundaries between the SDK, the optional provider, and the backend. Contributions that respect these boundaries are welcome.

FlowScreen is a controlled open-core project. The contributing guide below exists to protect architecture integrity and keep the public API stable for all users.

---

## Core Principles (CRITICAL SECTION)

The following rules are non-negotiable. PRs that violate them will not be merged.

- **Provider is optional.** The SDK must work fully without `ScreenFlowProvider`. Free mode must never require a network call or any backend.
- **Free mode must always work without network.** When no Provider is used, or when the bootstrap request fails, the SDK must render using free templates and never throw due to missing entitlement.
- **SDK must never import or depend on Supabase.** No Supabase client, types, or configuration in the SDK codebase. Supabase is used only in the backend, if at all.
- **Backend must never return UI.** The backend returns only entitlement JSON (`plan`, `enabledTemplates`, `ttl`). It must not return HTML, CSS, JS, or template markup.
- **Templates must live inside the SDK.** All templates are bundled with the SDK. No runtime fetch of templates from a server.
- **Public API changes require discussion before PR.** Open an issue or discussion first for any change to exported types, component props, or public function signatures.
- **No breaking changes without a major version bump.** Breaking changes to the public API are only accepted with a major version increment and prior agreement.

---

## Development Setup

1. Clone the repository.
2. Install dependencies (Node 18+ recommended):

   ```bash
   pnpm install
   ```

3. Build the SDK:

   ```bash
   pnpm build
   ```

4. Run type-check:

   ```bash
   pnpm type-check
   ```

Use `pnpm dev` if a dev script is added. Ensure the build passes before submitting a PR.

---

## Project Structure

```
src/                    # SDK source (published as flowscreen)
  core/                 # Registry, resolution, render logic
  react/                # FlowScreen component, Provider, context
  templates/            # All templates (error/, empty/, maintenance/)
  types/
  schema/
backend/                # Optional backend (private or separate repo)
examples/
docs/
```

**SDK code must not depend on backend code.** The `src/` tree must not import from `backend/`. The backend is a separate service that returns entitlement JSON only.

---

## Branch Naming Convention

Use short, descriptive branches:

- `feature/template-name` — new template or feature
- `fix/fallback-logic` — bug fix
- `docs/readme-update` — documentation only
- `refactor/internal-cleanup` — internal refactor, no API change

---

## Commit Convention

Use [Conventional Commits](https://www.conventionalcommits.org/).

Examples:

- `feat: add new maintenance template`
- `fix: correct free fallback behavior`
- `docs: update README`
- `refactor: simplify template registry`

---

## Pull Request Guidelines

- Keep PRs small and focused. Prefer several small PRs over one large one.
- Do not modify the public API without prior discussion (issue or discussion thread).
- Add or update example usage for UI-related changes (e.g. new templates, new props).
- Ensure `pnpm build` and `pnpm type-check` pass.
- Update documentation when behavior or API changes.
- No formatting-only PRs unless agreed in advance (e.g. project-wide style change).

---

## Adding a New Template

1. **Follow the existing folder structure.** Place the template under `src/templates/` in the appropriate category (`error/`, `empty/`, `maintenance/`).
2. **Define access level correctly.** In `src/core/registry.ts`, add the template to `templateAccess` as `"free"` or `"premium"`, and if free, add its id to `FREE_TEMPLATE_IDS`.
3. **Ensure free fallback behavior remains safe.** Unknown or premium-only template IDs must resolve to the default free fallback (e.g. `error-minimal`). Do not introduce paths that throw or render nothing in free mode.
4. **Update the template registry.** Register the template in the `templates` map and in the `TemplateType` union in `src/core/registry.ts`.
5. **Update documentation.** Add the template to the README (and any template list) and document access level and usage.

---

## Reporting Bugs

Please open a GitHub issue with:

- A clear description of the problem.
- Steps to reproduce.
- Expected vs actual behavior.
- Your environment (Node version, React version, FlowScreen version).

A minimal reproducible example (e.g. small repo or CodeSandbox) is strongly encouraged and speeds up triage.

---

## Security Issues

Do not open public issues for security vulnerabilities. Report them as described in [SECURITY.md](SECURITY.md). Do not disclose security-sensitive details in public discussions or PRs.

---

## Thank You

Your contributions help keep FlowScreen reliable and predictable for everyone. We appreciate your time and your respect for the architecture and principles above.
