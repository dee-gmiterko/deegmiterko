# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Dominik Gmiterko (deegmiterko.com). A Gatsby-based site with a unique "book" UI pattern for presenting content.

## Commands

```bash
# Development
yarn develop              # Start development server (from root)
yarn start               # Alias for develop

# Build
yarn workspace @deegmiterko/deegmiterko build   # Production build
yarn workspace @deegmiterko/deegmiterko serve   # Serve production build
yarn workspace @deegmiterko/deegmiterko clean   # Clear Gatsby cache

# Formatting
yarn format              # Format all packages with prettier
```

## Architecture

### Monorepo Structure

Uses Yarn workspaces with packages:
- `packages/deegmiterko/` - Main Gatsby website
- `packages/gatsby-transformer-chat-parse/` - Custom Gatsby transformer for parsing chat-format `.txt` files
- `packages/deegmiterko-cv/` - LaTeX CV documents (separate from the web app)

### Main Website (`packages/deegmiterko/`)

**Book/Page Pattern**: The site uses a custom "Book" component system for content presentation:
- `Book.tsx` - Container managing page state via `BookProvider` context
- `BookContent.tsx` - Renders book with navigation controls
- `Page.tsx` - Individual pages within a book, auto-generates slugified IDs for hash navigation

**Slides Components**: Content sections in `src/components/slides/`:
- `SlidesArtful.tsx`, `SlidesGenerativeDesign.tsx`, `SlidesGameExperiments.tsx`, `SlidesProfessional.tsx`, `SlidesMe.tsx`
- Each contains Book components with Page children

**Context System**:
- `appContext.tsx` - App-wide state (book references, page sizing)
- `bookContext.tsx` - Per-book state management

**Content Loading**: Chat-format `.txt` files in `src/content/` are parsed by the custom transformer and queried via GraphQL.

### Custom Gatsby Transformer (`packages/gatsby-transformer-chat-parse/`)

Parses `.txt` files into structured chat conversation data with messages, authors, media, and metadata. Uses `ohm-js` for grammar parsing.

### Page Section Mapping

| Section | Source |
|---------|--------|
| Header Announcement | `src/components/HeaderAnnouncement.js` |
| Banner | `src/components/Banner.js` |
| Introduction | `src/content/introduction.txt` |
| Artful slides | `src/components/slides/SlidesArtful.tsx` |
| Artful conversation | `src/content/artful.txt` |
| Generative Design slides | `src/components/slides/SlidesGenerativeDesign.tsx` |
| Generative Design conversation | `src/content/generative-design.txt` |
| Game Experiments slides | `src/components/slides/SlidesGameExperiments.tsx` |
| Game Experiments conversation | `src/content/game-experiments.txt` |
| Professional slides | `src/components/slides/SlidesProfessional.tsx` |
| Professional conversation | `src/content/professional.txt` |
| Me slides | `src/components/slides/SlidesMe.tsx` |
| Me conversation | `src/content/me.txt` |
| Contact | `src/components/Contact.js` |
| Footer | `src/components/Footer.tsx` |

### CV Package (`packages/deegmiterko-cv/`)

LaTeX CV using moderncv. Build with `pdflatex main.tex` (or `letter.tex` for cover letter). Output variants stored in `2024/` subdirectories.
