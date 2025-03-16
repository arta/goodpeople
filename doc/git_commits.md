# Git Commit Message Conventions
Based on [Conventional Commits 1.0.0][def]

## Format
<type>(<scope>): <description>

## Types
- feat: new feature
- fix: bug fix
- docs: documentation changes
- style: formatting changes (whitespace, semicolons, etc.)
- refactor: code restructuring without feature/bug changes
- perf: performance improvements
- test: adding/updating tests
- chore: maintenance, dependencies, build changes

## Common Scopes
- (npm): package.json changes
- (deps): dependency updates
- (assets): images, logo versions, etc.
- (ui): user interface
- (api): API changes
- (db): database related
- (css): CSS changes
- (js): JavaScript code
- (ruby): Ruby code
- (rails): Rails-specific changes

## Breaking Changes
- add `!` after type/(scope), or
- use `BREAKING CHANGE:` in description
- can be part of any commit type or scope

## Best Practices
- keep commits atomic (one logical change per commit)
- use single scope when possible
- split multiple scope changes into separate commits
- ensure each commit leaves codebase in working state

## Examples
- chore(npm): remove unused test script stub
- feat(auth): add user login form
- fix(ui): correct button alignment
- refactor(api): improve API response time
- fix(css): correct navbar alignment
- docs(git): add git commit convention guide
- chore(deps)!: remove gem foundation-rails

## Multi-scope Examples (use sparingly)
- feat(auth,ui): add login form with styling
- fix(api,db): correct user data synchronization
- refactor(css,js): move styling to CSS modules
- fix(rails,ruby): update incompatible gem versions

[def]: https://www.conventionalcommits.org/en/v1.0.0/
