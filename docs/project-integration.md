# Game/Art Project Integration

This document explains how interactive projects (like p5.js sketches) are integrated into the Chaos Coordinator portfolio.

## Git Submodules Approach

We use git submodules to include external projects while maintaining their independence.

### Current Submodules

- `public/games/time_decomposes` - Mushroom growth simulator using L-systems and cellular automata

### Manual Updates

To update all submodules manually:

```bash
npm run update-games
```

Or update a specific submodule:

```bash
cd public/games/time_decomposes
git pull origin main
cd ../../..
git add public/games/time_decomposes
git commit -m "🔄 Update time_decomposes submodule"
```

### Automatic Updates

The repository includes a GitHub Action (`.github/workflows/update-submodules.yml`) that:

1. Runs daily at 2 AM UTC
2. Can be manually triggered
3. Can be triggered via webhook when source repositories update

### Adding New Projects

To add a new p5.js or game project as a submodule:

```bash
git submodule add https://github.com/your-username/your-project.git public/games/your-project
```

Then update:
- Portfolio page (`src/app/portfolio/page.tsx`)
- Games page (`src/app/games/page.tsx`)
- This documentation

### Webhook Setup (Optional)

For automatic updates when you push to source repositories:

1. Add the webhook URL `https://your-domain.com/api/webhook/github` to your source repository
2. Set the webhook to trigger on "push" events
3. Optionally add a webhook secret for security

### Alternative Approaches Considered

1. **NPM Package**: Good for libraries, but overkill for art projects
2. **Direct Copy**: Simple but requires manual copying for updates
3. **Git Subtree**: More complex than submodules for this use case
4. **Monorepo**: Would require restructuring existing projects

## Project Structure

```
public/
  games/
    time_decomposes/     # Git submodule
      index.html
      sketch.js
      style.css
      libraries/
```

The games are accessible at `/games/project-name` in the built site.
