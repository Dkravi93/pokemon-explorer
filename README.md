This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Tech Stack

Next.js, TypeScript, TailwindCSS for styling

## Functionality

Homepage: Displaying all the list of Pokemons fetched from PokeAPI. Implemented a search bar to filter Pokemons by name.
Detail Page: Clicking on a Pokemon will navigate to a new page with detailed information about the selected Pokemon.
Shows the details like image, abilities, type, stats, and moves.
Implement server-side rendering (SSR) and using generateStaticparam for getting the data at the time of build instead of on-demand at request time.

