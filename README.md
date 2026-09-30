# sacha-a11y

One-page landing for a WCAG / RGAA remediation offer on React / Next.js stacks.

## What was added
- Next.js 15 (App Router, fully static), React 19, TypeScript strict, CSS Modules
- Sections: Hero, Logos, Problem (incl. legal timeline), Solution, Services, Contact CTA
- Decorative screen-reader caption panel in the hero (pausable, static under reduced motion)
- Light and dark themes via `prefers-color-scheme`

## Architecture decisions
- `src/features/landing/` holds the feature: `components/`, `hooks/`, `content.ts` (all copy), `links.ts`, barrel `index.ts`
- `src/components/ui/` holds primitives (`ButtonLink`, `Container`)
- `src/lib/site.ts` is the single config file: email, calendar link, site URL
- `src/app/page.tsx` only orchestrates sections
- No sticky header, so focus can never be obscured (WCAG 2.2, 2.4.11)

## Before going live
1. Edit `src/lib/site.ts` (email, calendar URL, site URL)
2. Drop logos into `public/logos/` and update `logoSrc` in `src/features/landing/content.ts`
   (while a logo is still the React placeholder, the company name is shown as text)
3. Re-check with axe DevTools, Lighthouse and VoiceOver

## Testing rationale
- axe-core (WCAG 2.0/2.1/2.2 A+AA + best practices): 0 violations, light and dark
- Keyboard: skip link, header CTA, hero CTAs, animation pause, contact CTAs, email
- Manual VoiceOver pass still to do before launch

## LLM usage transparency
Scaffolded with Claude from a brief and conventions defined by me; content and structure reviewed by me.

## Setup notes
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run typecheck
```
