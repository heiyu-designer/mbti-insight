# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an MBTI personality assessment web application built with React + TypeScript + Vite. It provides three-tier testing (quick/standard/deep) with randomized question selection, comprehensive personality analysis for all 16 MBTI types, PDF report export, and result sharing features.

## Development Commands

```bash
# Start development server (runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Type check without emitting files
tsc -b

# Lint code
npm run lint

# Preview production build
npm preview
```

## Project Architecture

### Question Bank System

The application uses a **large question pool with subset selection** strategy:

- **Question Banks**: Located in `src/data/questions/`
  - `quick.ts`: 50 questions
  - `standard.ts`: 150 questions
  - `deep.ts`: 300 questions

- **Test Question Counts**: Defined in `src/contexts/TestContext.tsx`
  - Quick test: **15 questions** (selected from 50-question bank)
  - Standard test: **30 questions** (selected from 150-question bank)
  - Deep test: **50 questions** (selected from 300-question bank)

This design ensures test variety through randomization while keeping test duration manageable.

### Question Selection Algorithm

**Location**: `src/lib/test-engine/questionSelector.ts`

The `selectQuestions(bank, totalCount)` function ensures even distribution across the 4 MBTI dimensions (E/I, S/N, T/F, J/P):

1. Groups questions by dimension
2. Calculates questions per dimension (totalCount / 4)
3. Distributes remainder questions to first N dimensions
4. Randomly selects from each dimension using Fisher-Yates shuffle
5. Final shuffle of all selected questions

**Critical Rule**: Maximum 1-question difference between dimensions allowed.

### Scoring System

**Location**: `src/lib/test-engine/scoreCalculator.ts`

- Uses 5-point Likert scale with weights [1,2,3,4,5]
- Supports both **positive** and **negative** scoring directions
  - Positive: Higher score favors first letter (e.g., E in E/I)
  - Negative: Higher score favors second letter (e.g., I in E/I)
- Each dimension is scored independently
- Letter determination: ≥50% scores the first letter, <50% scores the second letter
- Final MBTI type: Concatenates 4 dimension letters in order (E/I → S/N → T/F → J/P)

### State Management

**Location**: `src/contexts/TestContext.tsx`

Uses React Context + useReducer pattern:

- `TestSession`: Current test state (questions, answers, progress)
- `TestProgress`: Real-time statistics (answered count, percentage, elapsed time)
- Auto-saves to localStorage after each answer
- Session expiry: 24 hours
- **Important**: `clearTestSession()` is called at the start of each new test to prevent level conflicts

### Data Persistence

**Location**: `src/lib/storage/testStorage.ts`

- Key: `'mbti_test_session'`
- Versioned storage (current: v1) for migration support
- 24-hour expiry with automatic cleanup
- Stores: test level, selected questions, answers, timestamps

### PDF Export

**Location**: `src/lib/export/pdfGenerator.ts`

Uses **html2canvas + jsPDF** screenshot approach (NOT text-based):

- Renders HTML content to canvas at 2x scale for clarity
- Converts canvas to PNG images
- Inserts images into PDF pages
- **Why**: Ensures perfect Chinese character rendering without font embedding issues
- Output: Multi-page PDF with cover, dimension analysis, traits, careers, and growth advice

### Routing Structure

- `/` - Home page with test level selection
- `/test/:level` - Test page (level: quick|standard|deep)
- `/result` - Result display page with personality analysis
- `/test-core` - Legacy test page component
- `/test-debug/:level` - Debug route for development

## Styling Configuration

### Tailwind CSS v4

**Critical**: This project uses Tailwind CSS v4 with a specific PostCSS setup:

- `postcss.config.js`: Must use `'@tailwindcss/postcss'` plugin (NOT `'tailwindcss'`)
- `src/index.css`: Import syntax is `@import 'tailwindcss'` (NOT `@tailwind` directives)

**Color Scheme**:
- Primary: `#0891B2` (cyan-blue) for professional trust
- Accent: `#FF7F66` (coral) for energy
- Category colors:
  - Analyst: `#A855F7` (purple)
  - Diplomat: `#10B981` (green)
  - Sentinel: `#3B82F6` (blue)
  - Explorer: `#F59E0B` (orange)

### UI Components

Uses **Shadcn/ui** (Radix UI based) components from `src/components/ui/`.

## Type System

All TypeScript types are centralized in `src/types/`:

- `question.ts`: Question structure, dimensions, scoring rules
- `personality.ts`: MBTI types, profiles, results, careers
- `test.ts`: Test sessions, levels, progress

**Key Type**: `Question` interface includes:
- `scoring.direction`: 'positive' | 'negative' (critical for correct scoring)
- `scoring.weights`: number[] (must match options length)

## Data Files Structure

### Personality Profiles

Located in `src/data/personalities/`:
- `analysts.ts`: INTJ, INTP, ENTJ, ENTP
- `diplomats.ts`: INFJ, INFP, ENFJ, ENFP
- `sentinels.ts`: ISTJ, ISFJ, ESTJ, ESFJ
- `explorers.ts`: ISTP, ISFP, ESTP, ESFP

Each profile includes: name, nickname, description, traits, strengths, weaknesses, careers, relationship compatibility, growth advice, and famous people.

## Common Pitfalls

1. **Question Count Confusion**: Don't confuse question bank size (50/150/300) with actual test size (15/30/50). The `TEST_QUESTION_COUNTS` constant in `TestContext.tsx` defines actual test lengths.

2. **Session Management**: Always call `clearTestSession()` before starting a new test to avoid carrying over previous test data.

3. **Tailwind v4 Syntax**: Use `@import 'tailwindcss'` in CSS files, not `@tailwind` directives. PostCSS plugin must be `'@tailwindcss/postcss'`.

4. **Scoring Direction**: When adding questions, ensure `scoring.direction` matches the question intent. Positive direction means higher scores favor the first dimension letter.

5. **PDF Export**: Use the screenshot approach with html2canvas for Chinese text. Text-based jsPDF methods will produce garbled characters.

6. **Dimension Balance**: When modifying question selection, verify dimension distribution using `validateDistribution()` function.

## Path Alias

The `@/` alias maps to `src/` directory (configured in `vite.config.ts`).

Example: `import { Question } from '@/types/question'`
