export default function SponsorsAndContributorsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Sponsors &amp; Contributors
      </h1>
      <p className="mt-6 text-zinc-700 dark:text-zinc-300">
        Mongol OS exists through community effort. We thank all sponsors,
        maintainers, translators, testers, and contributors helping build a
        Debian-based OS for Mongolian users.
      </p>
      <h2 className="mt-10 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Sponsors
      </h2>
      <p className="mt-4 text-zinc-700 dark:text-zinc-300">
        Sponsor names and organizations will be listed here. If you want to
        support infrastructure, development, or localization, please contact the
        maintainers.
      </p>
      <h2 className="mt-10 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Contributors
      </h2>
      <p className="mt-4 text-zinc-700 dark:text-zinc-300">
        Contributors include code authors, documentation writers, QA testers,
        package maintainers, and community members. Recognition will be updated
        as contributions are merged.
      </p>
      <h2 className="mt-10 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        How to contribute
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
        <li>Open issues for bugs, ideas, and feature requests.</li>
        <li>Submit pull requests with focused, reviewable changes.</li>
        <li>Help with translation, testing, documentation, and support.</li>
      </ul>
    </main>
  );
}
