@AGENTS.md

# Project guidelines for Claude Code

## Code style
This project uses Prettier for formatting. Follow these rules in 
all code you write:

- Use semicolons
- Single quotes for strings
- Trailing commas everywhere (arrays, objects, function params)
- 2 space indentation
- Max line width 80 characters
- Arrow function parentheses always

## Component conventions
- All React components use ES6 arrow function syntax:
  const MyComponent = () => { ... }
  export default MyComponent
- Internal navigation always uses Next.js <Link>, never <a>
- External links (GitHub, LinkedIn, mailto) use plain <a>
- Read node_modules/next/dist/docs/ before using any Next.js API

## File conventions
- Component files: kebab-case (e.g. project-card.tsx)
- One component per file
- shadcn/ui components live in components/ui/
- Page sections live in components/sections/

## Before writing any code
- Follow the Prettier rules above exactly
- Use the existing design tokens (amber accent, dark backgrounds)
- Ask before creating new files outside the established structure
- Check node_modules/next/dist/docs/ for any Next.js APIs you plan 
  to use — this is Next.js 16 with breaking changes from older versions