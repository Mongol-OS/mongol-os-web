import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-6 py-20 dark:bg-black">
      <main className="w-full max-w-3xl rounded-2xl border border-zinc-200 bg-white p-10 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto mb-8 w-24 sm:w-28 md:w-32">
          <Image
            src="/mongol-os-logo.png"
            alt="Mongol OS logo"
            width={200}
            height={200}
            className="h-auto w-full"
            priority
          />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          mongol-os.org
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Mongol OS
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          Mongol OS is a Debian-based Linux distribution focused on stability,
          localization, and a practical desktop experience for Mongolian users
          and contributors worldwide.
        </p>
      </main>
    </div>
  );
}
