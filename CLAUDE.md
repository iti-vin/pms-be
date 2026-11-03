<!-- sauron:start (managed by Sauron; edit outside this block) -->
# CLAUDE.md

> Managed by Sauron v1.0.0. Persistent instruction manual for Claude Code.

## Where Things Live

- Skills: `.claude/skills/` (invoke with `/<skill-name>`). Shared copy for other tools: `.agents/skills/`.
- Subagents: `.claude/agents/` (invoke with `@<agent-id>` or let Claude delegate).
- Slash commands: `.claude/commands/`.
- Anti-patterns reference: `.agents/anti-patterns.md`.
- Add your own project notes (build commands, architecture) outside the Sauron block in this file.

## Code Style & Conventions

- Present tense, active voice, English language exclusively.
- Zero emojis across all code files, comments, and commit messages.
- Prohibit Latin abbreviations: use 'for example', 'that is', 'and so forth'.
- Prohibit em dashes: use colons, parentheses, or separate sentences.
- Strict Red-Green-Refactor TDD required before touching production code.
- Zero untyped boundary parameters: enforce runtime validation (Zod, Pydantic).
- Zero hardcoded secrets, connection strings, or unredacted logging output.
- Token Conservation & Caveman Mode: active at tier 'ultra' from the first reply, no trigger needed. Preserve all code, commands, paths, and negations verbatim. Disable with '/caveman off'.

## Fellowship Sub-Agents

- **Elessar** (`@aragorn` or `/aragorn`): Principal System Architect
- **Shield of Gondor** (`@boromir` or `/boromir`): Security Auditor and Shield
- **Ringbearer** (`@frodo` or `/frodo`): Core Task Executor
- **Mithrandir** (`@gandalf` or `/gandalf`): Master Planner and Strategy Guide
- **Lockbearer** (`@gimli` or `/gimli`): Refactorer and AST Dead Code Slasher
- **Greenleaf** (`@legolas` or `/legolas`): Precision Linter and Syntax Bug Hunter
- **Brandir** (`@merry` or `/merry`): QA and TDD Specialist
- **Took** (`@pippin` or `/pippin`): Edge Case and Chaos Prober
- **The Brave** (`@samwise` or `/samwise`): Git Commits and State Keeper

## Token Optimization & Caveman Mode

- Default: ACTIVE at tier `ultra` from the first reply of every session. No trigger command is needed.
- Tier `ultra`: Maximum compression: fragments, common abbreviations, arrows for cause and effect. One word when one word is enough.
- Never compress code blocks, diffs, commands, file paths, URLs, error messages, or quoted text. Copy them verbatim.
- Never drop negations (`not`, `never`, `no`). Compression must not flip meaning.
- Use normal prose for security warnings and confirmations of irreversible actions.
- Switch tiers on request: `/caveman lite`, `/caveman full`, `/caveman ultra`. Disable with `/caveman off`.
<!-- sauron:end -->
