# GEMINI.md

The contents and structure of these four files are kept identical: `CLAUDE.md`, `AGENTS.md`, `GEMINI.md`, `.github/copilot-instructions.md` — when any is updated, apply the same change to all others.

These files are minimal by design. Only include what an agent would get wrong without being told. Discoverable information (commands, file structure, standard Rails/Ruby conventions) is noise — omit it.

Ruby on Rails static informational site for a home care employment agency (no database interactions, no auth). Propshaft, cssbundling, importmap.

## Direction for new code
Rails-first always. New UI: Stimulus + Turbo (not jQuery). CSS: modern vanilla CSS (Foundation is being replaced — no framework preference; prefer raw standard tools over utility libraries like Tailwind).

## CSS
Read `docs/ai/css-authoring.md` before writing any CSS. Note: it references a universal canonical guide at `~/Documents/LAYEREDCODE/dev-ai/css-authoring.md`; Gemini only: read it using shell commands (e.g. `cat`) to bypass sandbox restrictions; other agents: can access it directly; Claude Code: also invocable as `/css`.

## Phased changes
When creating or updating a feature touches many files, break into testable phases — each leaving the app functional. 3 files per phase, 4 max.

## Agent memory
- Project context (current work, decisions, migration state): `docs/ai/memory/MEMORY.md`
- Cross-project behavior preferences: `~/Documents/LAYEREDCODE/dev-ai/memory/MEMORY.md`

## Workflow
- Commits are handled by the user via GitHub Desktop — draft messages when asked, never run `git add` or `git commit`.
- Commit conventions: `~/Documents/LAYEREDCODE/dev-ai/gitmessage-conventions.md` — review before drafting, extend when introducing new types/scopes.
- When a new tool or config generates files at the project root, check whether they belong in `.gitignore` before committing.
