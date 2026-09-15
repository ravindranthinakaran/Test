# BusGo

Next.js (App Router) app with TypeScript, Tailwind CSS, and a minimal Prisma setup for PostgreSQL.

## Getting started

```bash
npm install
cp .env.example .env
```

Set `DATABASE_URL` in `.env` to your Postgres connection string, then:

```bash
npx prisma migrate dev --name init
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js dev server |
| `npm run build` | Production build |
| `npm run db:generate` | Generate Prisma Client |
| `npm run db:migrate` | Create and apply migrations |
| `npm run db:studio` | Open Prisma Studio |
