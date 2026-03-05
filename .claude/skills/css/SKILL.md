---
name: css
description: CSS authoring conventions for goodpeople — naming scheme, file organization, and formatting rules. Load before writing any CSS.
---

You are about to write CSS for goodpeople. Apply these conventions exactly.

## Naming scheme

Mental model: human naming — first name (element), nickname (custom), surname chain (ancestry). The name's job is to let you mentally picture the selector's target element's location(s) in markup with minimal effort. Ancestry is distillation not breadcrumbs — pick the ancestor(s) that paint the clearest mental picture; keep the chain as short as possible, skip intermediaries, cut entirely if self-evidently unique — but never at the cost of clarity. Brevity, expressiveness, clarity.

- `-` separates words of the same kind (HTML names, or nicks)
- `--` separates kinds: HTML element/ancestry from nick; appears wherever a kind-boundary occurs
- No nick: `a-li-nav` (all single dash)
- With nick: `button--toggle--nav`, `ul--menu--nav`
- Divs omit the element prefix — the nick is the full name; no `--` needed (already the conventional CSS signal for divs)
- Component nicks serve as ancestry — `a--card`, `button--toggle--section--card` — no special component syntax; the scheme absorbs components naturally
- Ancestry serves double duty: locating the element in markup *or* disambiguating from similar elements elsewhere; use whichever is needed, sometimes both
- Page-specific classes use a page-identifier suffix: `--home-pg`, `--print-pg`, etc.
- State classes (`.active`, `.is-open`) are separate conventional classes, orthogonal to the scheme and JS-ready
- Known edge case: when a div nick appears as ancestry after another nick, insert `div` explicitly — `button--toggle--div--card` — to avoid ambiguity; add a `TODO: div → section` nearby; once resolved: `button--toggle--section--card`

Examples from this codebase:
- `p-footer` — element + HTML ancestry, no nick
- `a--print` — element + nick, ancestry unnecessary (self-evidently unique)
- `label--testimonial`, `article--testimonial` — element + nick
- `h1--index-pg`, `main--interior-pg` — element + page nick
- `button--toggle--nav` — element + nick flanked by HTML names
- `g-svg--gp-logomark` — SVG element + HTML ancestry + nick
- `gp-contact-info` — div nick only
- `gp-contact-info--header--mobile` — div nick + HTML ancestry + nick

## File organization

Partials by concern (`_navigation.scss`, `_typography.scss`, etc.).

**Global** — resets, box-sizing, universal rules; one place only: top of a single sheet or its own `_global.scss`; never duplicated across partials.

**Colors** live in `colors.scss` — a design token layer, separate from global resets.

Within each file, sections in this order:
1. **Typography** — block first (h1–h6, p, ul/ol/li, blockquote), inline last (cite, em, span, etc.); excludes `ul`/`li` inside navigation — those belong in Interactive
2. **Interactive** — `a`, `button`, navigation (including nav-specific `ul`, `li`), forms
3. **Layout** — div nicks included
4. **Images / Media**
5. **Tables**
6. **Utilities**
7. **@media queries** — bottom of file, mirroring sections 1–6 in order

Component partials follow the same internal section order, including only sections that apply.

## Formatting

Within each section:
- Shared-style selector lists come first, atop, preceding all other selectors (individual, combinators, compound) — each selector on its own line, last one opens the curly bracket; if single-declaration, it goes on the same line as the last selector; if multi-declaration, first declaration goes on a new line:
  ```css
  .a--print,
  .a--full-testimonial { color: gray; }

  .a--print,
  .a--full-testimonial,
  .a--testimonial-anchor {
    color: gray;
    margin-top: 3em;
  }
  ```
- Single-declaration rules on one line with the selector — applies to all selector types (individual, combinator, compound):
  ```css
  .a--print { margin-top: 3em; }

  nav > ul { list-style: none; }
  ```
- Then alphabetical by target throughout — element selectors, class selectors, combinators/compounds in one unified flow; no sub-grouping
- Combinators and compound selectors are a last resort; prefer a class
- IDs avoided

Alphabetical by target aligns naturally with the naming scheme (names start with the element). Divs sort by nick within the alphabetical flow — `.card` sorts under `c`, `.gridfield` under `g`, interleaved with element-named selectors as they fall.

## Current partial structure

- `_custom.scss` — main stylesheet; contains Global, Typography, Interactive, Layout, Images, Utilities sections
- `colors.scss` — design tokens (`@use 'colors' as c;` to consume)
- `_dark_mode.scss` — dark mode overrides
- `_navigation.scss` — create this when extracting nav styles from `_custom.scss`

Foundation partials (`_settings.scss`, `_settings_overrides.scss`, `foundation_and_overrides.scss`) are legacy and being replaced. Do not add new rules to Foundation files.

Note: `_custom.scss` is partially aligned with these conventions; apply consistently when touching it.
