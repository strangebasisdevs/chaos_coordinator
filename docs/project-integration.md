# Game/Art Project Integration

This document explains how interactive projects (like p5.js sketches) are integrated into the Chaos Coordinator website.

## Git Submodules Approach

We use git submodules to include external projects while maintaining their independence.

### Current Submodules

- `public/submodules/time_decomposes` - Mushroom growth simulator using L-systems and cellular automata
- `public/submodules/strange_waves` - Interactive audio visualization with dynamic wave patterns
- `public/submodules/strange_elements` - Physics-based elemental particle simulation

### Manual Updates

To update all submodules manually:

```bash
npm run update-projects
```

Or update a specific submodule:

```bash
cd public/submodules/time_decomposes
git pull origin main
cd ../../..
git add public/submodules/time_decomposes
git commit -m "🔄 Update time_decomposes submodule"
```

### Updating Through Pull Requests

Submodule updates are made locally (`npm run update-submodules`) and land through a pull request; no workflow pushes to `main`. Dependabot's `gitsubmodule` entry (`.github/dependabot.yml`) opens those pull requests weekly.

### Adding New Projects

To add a new p5.js or game project as a submodule:

```bash
git submodule add https://github.com/your-username/your-project.git public/projects/your-project
```

Then update:
- Projects page (`src/app/projects/page.tsx`)
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
  submodules/
    time_decomposes/     # Git submodule
      index.html
      sketch.js
      style.css
      libraries/
    strange_waves/       # Git submodule
      index.html
      src/
    strange_elements/    # Git submodule
      index.html
      sketch.js
      elements.js
      style.css
```

The projects are accessible at `/projects/project-name` in the built site, with their source files hosted at `/submodules/project-name/`.
