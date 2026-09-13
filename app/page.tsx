export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 font-sans dark:bg-black">
      <main className="flex w-full max-w-xl flex-col items-center gap-6 rounded-2xl bg-white p-10 text-center shadow-sm dark:bg-zinc-950 sm:items-start sm:text-left">
        <p className="text-sm font-medium tracking-wide text-zinc-500 uppercase">
          Next.js · Tailwind · Prisma
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
          BusGo
        </h1>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          App Router scaffold is ready. Point{" "}
          <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
            DATABASE_URL
          </code>{" "}
          at Postgres, then run{" "}
          <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
            npx prisma migrate dev
          </code>
          .
        </p>
      </main>
    </div>
  );
}
