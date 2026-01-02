# Chaos Coordinator

testing github access

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This is a static web project to get the strangebasis co brand out there and start to place my vision and creative code into the world.

I welcome any contribution, but I will likely continue to make this specific for my needs as a game designer and content creator.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

- **Project Showcase**: Display web development projects, games, and digital art
- **Interactive Games**: Embeddable web games and coding art projects
- **Streaming Content**: Showcase streaming and video creation content
- **Company Branding**: Professional presentation of strangebasis brand
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Static Site Generation**: Optimized for hosting on Contentful or similar platforms

## Dependencies

This project relies on the following dependencies:

- [React](https://reactjs.org) - A JavaScript library for building user interfaces.
- [Next.js](https://nextjs.org) - The React framework for production.
- [TypeScript](https://www.typescriptlang.org) - A typed superset of JavaScript that compiles to plain JavaScript.
- [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework for rapid UI development.
- [ESLint](https://eslint.org) - A tool for identifying and fixing problems in JavaScript code.
- [Prettier](https://prettier.io) - An opinionated code formatter.
- [Commitizen](http://commitizen.github.io/cz-cli/) - Tool for conventional commit messages.

You can find the complete list of dependencies in the `package.json` file.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Available Scripts

- `npm run dev` - Starts the development server with Turbopack
- `npm run build` - Builds the application for production
- `npx serve@latest out` - Starts the production server (not `npm start` because this is a static build)
- `npm run lint` - Runs ESLint to check for code issues
- `npm run format` - Formats code using Prettier
- `npm run commit` - Uses Commitizen for conventional commits

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home page with hero and features
│   ├── projects/        # Projects showcase page
│   └── streaming/       # Content creation and streaming
└── types/              # TypeScript type definitions
```

## Content Areas

- **Home**: Landing page with company branding and navigation
- **Projects**: Filterable showcase of web projects, games, and tools
- **Streaming**: Video content, streaming schedule, and community links

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js (just like me), take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

For static hosting on platforms like Contentful, Netlify, or Vercel, run:

```bash
npm run build
```

This generates a static export that can be hosted on any static hosting platform.

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes using Commitizen (`npm run commit`)
5. Push to the branch (`git push origin feature-branch`)
6. Create a new Pull Request

## License

This project is licensed under the GNU AFFERO General Public License Version 3 (AGPL-3.0).

I encourage you to use, modify, and share this project! Under the terms of this license:

- You must disclose the source code when you share the software
- If you modify the code, those modifications must also be released under AGPL-3.0
- If you run a modified version on a server and allow users to interact with it remotely (e.g., through a web browser), you must also make your modified source code available to those users
- You must include the original copyright notice and license
- There is no warranty for the program

For the full license text, see the [LICENSE](LICENSE) file in this repository or visit [GNU AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.html).
