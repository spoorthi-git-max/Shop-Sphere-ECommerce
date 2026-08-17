# ShopSphere — E-commerce Product Catalog

A production-oriented React + TypeScript + Vite e-commerce capstone with a modular frontend, Express API, client-side routing, filtering/sorting, persistent cart, accessibility, testing, and deployment-ready configuration.

## Features

- Responsive storefront
- Product search, category and price filtering
- Sorting by price, rating and name
- Product detail pages
- Persistent shopping cart
- Loading, empty and error states
- React Router navigation
- Express REST API
- TypeScript strict mode
- Vitest + React Testing Library
- Lazy-loaded routes
- SEO metadata and semantic HTML
- Deployment configuration for Vercel

## Run locally

```bash
npm install
npm run dev
```

Frontend: http://localhost:5173  
API: http://localhost:4000

For the frontend, `VITE_API_URL` defaults to `http://localhost:4000/api`.

## Production

```bash
npm run lint
npm run test
npm run build
```

The Vercel configuration serves the SPA and API through the included deployment configuration.

## Architecture

- `frontend/src/components`: reusable UI
- `frontend/src/pages`: route-level screens
- `frontend/src/context`: cart state
- `frontend/src/services`: API access
- `frontend/src/utils`: filtering and cart helpers
- `backend/src`: Express API and product data

## Notes

The catalog uses local demo data so the project is immediately runnable without third-party API credentials. Replace the sample data with a database or commerce backend when extending the project.
