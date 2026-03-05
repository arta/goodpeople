# AGENTS.md

The contents and structure of these four files are kept identical: `CLAUDE.md`, `AGENTS.md`, `GEMINI.md`, `.github/copilot-instructions.md` — when any is updated, apply the same change to all others.

These files are minimal by design. Only include what an agent would get wrong without being told. Discoverable information (commands, file structure, standard Rails/Ruby conventions) is noise — omit it.

Ruby on Rails static informational site for a home care employment agency (no database interactions, no auth). Propshaft, cssbundling, importmap.

## Direction for new code
Rails-first always. New UI: Stimulus + Turbo (not jQuery). CSS: modern vanilla CSS (Foundation is being replaced — no framework preference; prefer raw standard tools over utility libraries like Tailwind).

## CSS
Read `docs/ai/css-authoring.md` before writing any CSS — naming scheme, file organization, and formatting conventions. (Claude Code: also invocable as `/css`.)

## Phased changes
When creating or updating a feature touches many files, break into testable phases — each leaving the app functional. 3 files per phase, 4 max.

## Workflow
- Commits are handled by the user via GitHub Desktop — draft messages when asked, never run `git add` or `git commit`.
- Commit conventions: `~/dev-git/gitmessage-conventions.md` — review before drafting, extend when introducing new types/scopes.
