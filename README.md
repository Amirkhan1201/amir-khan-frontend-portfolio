# Amir Khan J — Frontend Portfolio

React 18 + Vite. No UI libraries — every animation is hand-written with hooks and CSS.

## Run
```
npm install
npm run dev
```
Open http://localhost:5173

## Build / deploy
```
npm run build
```
Deploy the `dist` folder (Vercel: import the repo, framework = Vite).

## Edit content
All resume content lives in `src/data/resume.js`. Change it there and every section updates.

## Sections
- Hero — letter-by-letter name reveal, typewriter role, orbiting React atom, mouse parallax
- About — summary shown as a React DevTools component inspector
- Skills — package.json that "installs" each skill category + outline marquee
- Experience — `git log --graph`: each job is a branch, each achievement a commit
- Impact — Lighthouse-style gauges that count up on scroll
- Projects — filterable 3D-tilt cards with cursor glare
- Education — certificate cards
- Contact — copy-to-clipboard links + a working mini terminal
- Ctrl/⌘ + K command palette, custom cursor, scroll progress, scroll-spy nav

## React concepts used
Custom hooks (useInView, useTypewriter, useCountUp, useScrollSpy, useScrollProgress, useHotkey, useCopy),
React.lazy + Suspense code splitting, memo, useMemo, useCallback, useRef, controlled inputs, key-based remount animations.
