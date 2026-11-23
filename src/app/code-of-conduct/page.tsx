export default function CodeOfConductPage() {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Code of Conduct
      </h1>
      <p className="mt-6 text-zinc-700 dark:text-zinc-300">
        Mongol OS is committed to a welcoming, inclusive, and harassment-free
        community for everyone, regardless of background, identity, or
        experience level.
      </p>
      <h2 className="mt-10 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Expected behavior
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
        <li>Be respectful, constructive, and collaborative.</li>
        <li>Assume good intent and focus on technical outcomes.</li>
        <li>Use clear language and provide actionable feedback.</li>
      </ul>
      <h2 className="mt-10 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Unacceptable behavior
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
        <li>Harassment, hate speech, or personal attacks.</li>
        <li>Publishing private information without permission.</li>
        <li>Disruptive behavior that derails collaboration.</li>
      </ul>
      <h2 className="mt-10 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Reporting
      </h2>
      <p className="mt-4 text-zinc-700 dark:text-zinc-300">
        If you witness or experience a violation, report it to the Mongol OS
        maintainers. Reports are reviewed promptly and handled with care.
      </p>
    </main>
  );
}
