# Copilot Instructions for Chaos Coordinator

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview

Chaos Coordinator is a static website portfolio showcasing:

- Company work and brand (strangebasis)
- Web embeddable games and coding art projects
- Streaming and video creation content
- Game design portfolio

## Tech Stack

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- ESLint & Prettier
- Static site generation for hosting on Contentful or similar

## Code Style Guidelines

- Use TypeScript for all components and utilities
- Follow Next.js App Router conventions
- Use Tailwind CSS for styling
- Prefer functional components with hooks
- Use semantic HTML for accessibility
- Implement responsive design patterns
- Follow the project's ESLint and Prettier configurations

## Component Organization

- Components should be in `src/components/`
- Pages use the App Router in `src/app/`
- Utilities in `src/lib/`
- Types in `src/types/`
- Assets in `public/`

## Special Considerations

- Optimize for static site generation
- Ensure components are accessible
- Consider loading performance for games and media
- Support embedding of interactive content
- Mobile-first responsive design
- SEO optimization for portfolio visibility

## Content Areas to Focus On

- Hero/landing section
- Portfolio gallery with filtering
- Game embedding capabilities
- Video/streaming content showcase
- Company/brand information
- Contact and social links
