<!-- sauron:start (managed by Sauron; edit outside this block) -->
<!--
  AGENTS.md: shared agent instructions standard (https://agents.md).
  Read by Codex, Cursor, GitHub Copilot, Windsurf, Cline, OpenCode, Kiro, Zed, CodeBuddy, and Pi.
-->

# AGENTS.md

> Governed by Sauron v1.0.0. Shared instructions for every AGENTS.md-aware coding agent.

## Project Overview

Production codebase governed by Sauron Universal Agent Harness.

## Essential Commands

- Build: `npm run build`
- Test All: `npm test`
- Typecheck: `npx tsc --noEmit`

## Engineering Rules

- Present tense, active voice, English language exclusively.
- Zero emojis across all code files, comments, and commit messages.
- Prohibit Latin abbreviations: use 'for example', 'that is', 'and so forth'.
- Prohibit em dashes: use colons, parentheses, or separate sentences.
- Strict Red-Green-Refactor TDD required before touching production code.
- Zero untyped boundary parameters: enforce runtime validation (Zod, Pydantic).
- Zero hardcoded secrets, connection strings, or unredacted logging output.
- Token Conservation & Caveman Mode: active at tier 'ultra' from the first reply, no trigger needed. Preserve all code, commands, paths, and negations verbatim. Disable with '/caveman off'.

## Token Optimization & Caveman Mode

- Default: ACTIVE at tier `ultra` from the first reply of every session. No trigger command is needed.
- Tier `ultra`: Maximum compression: fragments, common abbreviations, arrows for cause and effect. One word when one word is enough.
- Never compress code blocks, diffs, commands, file paths, URLs, error messages, or quoted text. Copy them verbatim.
- Never drop negations (`not`, `never`, `no`). Compression must not flip meaning.
- Use normal prose for security warnings and confirmations of irreversible actions.
- Switch tiers on request: `/caveman lite`, `/caveman full`, `/caveman ultra`. Disable with `/caveman off`.

## Fellowship Sub-Agents

- **Elessar** (`/aragorn`): Principal System Architect
- **Shield of Gondor** (`/boromir`): Security Auditor and Shield
- **Ringbearer** (`/frodo`): Core Task Executor
- **Mithrandir** (`/gandalf`): Master Planner and Strategy Guide
- **Lockbearer** (`/gimli`): Refactorer and AST Dead Code Slasher
- **Greenleaf** (`/legolas`): Precision Linter and Syntax Bug Hunter
- **Brandir** (`/merry`): QA and TDD Specialist
- **Took** (`/pippin`): Edge Case and Chaos Prober
- **The Brave** (`/samwise`): Git Commits and State Keeper

## Anti-Pattern Guardrails

- AP-1 (Vague task verb) : Always decompose requests into concrete atomic tasks.
- AP-6 (Monolithic prompt) : Never combine architecture, code, and test in one step.
- AP-14 (Leaking secrets) : Zero credentials in version control.
- AP-17 (Skipping tests) : Code without a prior failing test is unverified code.
- AP-18 (Non-atomic commit) : One logical concern per commit.
- AP-52 (Fake fix) : Masking errors with type casts or empty catch blocks is prohibited.
- Full catalog: see `.agents/anti-patterns.md` before planning non-trivial work.

## Skills

- Shared Agent Skills live in `.agents/skills/<name>/SKILL.md`. See `.agents/skills/README.md`.
<!-- sauron:end -->
