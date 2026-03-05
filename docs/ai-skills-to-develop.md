# Skills to Develop

Claude Code skills worth building as the project matures.
See: https://docs.anthropic.com/en/docs/claude-code/skills

## /css
Invoke before writing any CSS to ensure consistent authoring across:
- Naming scheme (see CLAUDE.md ## CSS naming scheme)
- File/section organization (see CLAUDE.md ## CSS organization)
- Formatting conventions (selector lists, one-liners, multi-declaration rules)

Once built, the CSS sections in CLAUDE.md and the other three agent instruction files will be replaced with an instruction to invoke the `/css` authoring skill before writing any CSS. The skill may reference a shared `css-authoring.md` spec file (location TBD — likely `docs/` or a future Rails AI-specific folder).
