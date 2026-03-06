---
name: motion-design
description: Build unforgettable, production-grade motion systems for Next.js + Tailwind using Framer Motion + GSAP. Use this skill when the user wants cinematic page choreography, scroll-driven scenes, micro-interactions, route transitions, and performance-safe animation architecture.
license: Complete terms in LICENSE.txt
---

This skill guides creation of distinctive, production-grade motion and animation systems that avoid generic “template motion.” Implement real working code with exceptional attention to timing, easing, choreography, and performance.

We are using **Next.js (App Router)** + **Tailwind**. Animation stack is:
- **Framer Motion** for UI-level states/transitions (enter/exit/variants/layout/hover/tap/route)
- **GSAP** for high-control timelines + advanced scroll scenes (ScrollTrigger), pinned sections, complex sequences, and nuanced choreography.

## Motion Context (Context7)

CRITICAL: Before implementing, consult Context7 docs/knowledge to:
- Confirm the latest recommended patterns for Next.js App Router client boundaries
- Validate GSAP + ScrollTrigger setup best practices
- Use current Framer Motion APIs and patterns
- Avoid deprecated hooks/approaches

When unsure about a method/API, always prefer Context7 guidance over assumptions.

## Motion Thinking (before coding)

Define a MOTION CONCEPT and a SYSTEM:

- **Purpose**
  - What should motion communicate? (hierarchy, feedback, storytelling, brand energy)
  - What interactions need clarity? (hover, tap, form submit, navigation, loading)

- **Tone (pick one and commit)**
  - Cinematic / editorial / kinetic typography / luxury-slow / playful-springy / brutal-snappy / retro UI / sci-fi HUD / organic-fluid

- **Constraints**
  - Accessibility: prefers-reduced-motion support is mandatory
  - Performance: avoid layout thrash, animate cheap properties, keep main thread free
  - Next.js SSR: animation must live in client components; avoid hydration mismatch

- **Signature Move**
  - One unforgettable moment: magnetic CTAs, typographic mask reveals, scroll-linked depth, branded route wipe, elegant light sweep, etc.

## Tooling Decision Rules (Framer vs GSAP)

Default: **Framer Motion** for most UI animation needs:
- Enter/exit, variants, stagger, hover/tap micro-interactions
- Layout animations (layout/layoutId)
- Shared element transitions
- Route transitions with AnimatePresence (client wrapper)

Use **GSAP** when:
- You need a timeline with tight control (overlapping beats, offsets, labels)
- Scroll-based animation needs advanced control (ScrollTrigger pin/scrub)
- You need to animate many elements efficiently and orchestrate complex scenes
- You want precision choreography that would be awkward with variants alone

Hybrid approach:
- Use Framer for component states + presence transitions
- Use GSAP inside isolated “scene” components for hero/scroll sequences
- Keep boundaries clear: don’t fight two engines on the same properties at the same time

## Non-negotiable Motion Principles

1. **Easing is design**
   - Never use default easing everywhere.
   - Use a small set of brand easings + named spring configs.

2. **Choreography > quantity**
   - One orchestrated entrance with stagger is better than random micro-effects.

3. **Animate the right properties**
   - Prefer `transform` + `opacity`
   - Use `filter` sparingly
   - Avoid animating layout properties (top/left/width/height) unless unavoidable
   - Use `will-change` selectively

4. **Respect users**
   - Implement `prefers-reduced-motion` fallbacks
   - Don’t block interaction during animations

5. **Performance is part of motion design**
   - For scroll: prefer GSAP ScrollTrigger or Framer’s scroll hooks (whichever is cleaner)
   - Defer offscreen work, pause when out of view (IntersectionObserver)
   - Clean up all listeners/timelines on unmount

## Motion System Architecture (Next.js + Tailwind)

Suggested structure:

- `app/`
- `components/motion/`
  - `motion.tokens.ts` (durations/easings/springs/stagger)
  - `motion.variants.ts` (Framer variants using tokens)
  - `Reveal.tsx` (staggered reveal wrapper)
  - `RouteTransition.tsx` (AnimatePresence wrapper)
  - `MagneticButton.tsx` (signature micro-interaction)
- `components/gsap/`
  - `useGSAPContext.ts` (gsap context helper + cleanup)
  - `HeroScene.tsx` (timeline-based hero)
  - `ScrollScene.tsx` (ScrollTrigger scenes)
- `lib/motion/`
  - `reducedMotion.ts` (centralized reduced-motion helpers)
  - `dom.ts` (helpers: split text, query, raf, clamp)
  - `perf.ts` (IntersectionObserver utilities, throttles)

### Motion Tokens (must define)

Define brand-level tokens used everywhere:
- Durations: `fast`, `base`, `slow`, `cinematic`
- Easings (2–4): `easeOut`, `easeInOut`, `snap`, `lux`
- Springs (1–2): `softSpring`, `tightSpring`
- Stagger: base stagger step + “cascade” presets
- Entrance offsets: y/blur/scale defaults

Everything (Framer variants + GSAP tweens) must reference these tokens.

## GSAP Standards (mandatory)

When using GSAP:
- Register plugins once (ScrollTrigger, etc.) in a safe client-only location.
- Use `gsap.context()` to scope selectors and ensure cleanup.
- Prefer transforms (x/y/scale/rotate) and opacity.
- Use timelines with labels for readability.
- For ScrollTrigger:
  - Avoid overly many triggers
  - Prefer `scrub` for smooth linkage, `pin` only when needed
  - Respect reduced-motion: disable triggers or simplify

## Interaction Patterns to Offer

Implement the relevant subset based on the UI:

- **Cinematic page load**
  - Typographic masks, staggered reveals, delayed CTA emphasis
  - Subtle background motion (grain/light sweep/pattern drift)

- **Scroll-driven storytelling (GSAP)**
  - Pinned section narrative
  - Parallax depth layers
  - Section-to-section transitions with labeled beats

- **Micro-interactions (Framer)**
  - Magnetic buttons, press physics, hover lift, input focus emphasis
  - Toggle morphs, chips, tabs with shared layout transitions

- **Route transitions (Framer)**
  - Branded wipe/fade-through
  - Shared element transitions where meaningful

- **Feedback states**
  - Loading/progress, success/error animations to improve clarity

## Accessibility & Reduced Motion (required)

Always implement:
- `prefers-reduced-motion`
  - Framer: use `useReducedMotion()`
  - GSAP: gate timelines/triggers; switch to opacity-only or instant states
- Ensure keyboard users still get clear focus states (Tailwind focus styles)

## Deliverables (what the assistant outputs)

When the user asks for animation:
1. Motion concept summary (tone + signature move + why)
2. Motion tokens (durations/easings/springs)
3. Implementation:
   - Framer components (Reveal, RouteTransition, micro-interactions)
   - GSAP scene components (Hero/ScrollScene) if needed
4. Notes:
   - Performance decisions
   - Reduced-motion behavior
   - Cleanup strategy (gsap.context + unmount)

## Quality Bar (strict)

- No generic “fade up everywhere”
- Motion must feel intentional, rhythmically consistent, and brand-specific
- Code must be real, functional, typed (TypeScript), and App Router-safe
- Avoid conflicts: never have GSAP and Framer animate the same properties on the same element at the same time