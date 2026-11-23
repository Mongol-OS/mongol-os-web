export default function CodeOfConductPage() {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Code of Conduct
      </h1>
      <p className="mt-6 text-zinc-700 dark:text-zinc-300">
        Mongol OS is committed to a welcoming, inclusive, and harassment-free
        community for everyone, regardless of background, identity, or
        experience level. We value contributions from across Mongolia and the
        wider community.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Expected behavior
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
        <li>Be respectful, considerate, and collaborative.</li>
        <li>Assume good intent while listening to the impact of your words.</li>
        <li>Focus feedback on ideas and work, and make it constructive.</li>
        <li>Use clear language and welcome questions from all experience levels.</li>
        <li>Respect others' time, boundaries, privacy, and contributions.</li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Unacceptable behavior
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
        <li>Harassment, discrimination, hate speech, or personal attacks.</li>
        <li>Unwanted sexual attention or demeaning comments about identity or background.</li>
        <li>Publishing private information without permission.</li>
        <li>Threatening, intimidating, or deliberately disruptive behavior.</li>
        <li>Retaliating against someone who raises a concern or helps review a report.</li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Scope
      </h2>
      <p className="mt-4 text-zinc-700 dark:text-zinc-300">
        This Code applies in Mongol OS project spaces, including repositories,
        issue trackers, review discussions, communication channels, and
        community events. It also applies when someone represents the project
        in public.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Reporting
      </h2>
      <p className="mt-4 text-zinc-700 dark:text-zinc-300">
        If you witness or experience a violation, report it privately to the
        Mongol OS maintainers using the reporting channel listed in the
        repository or on the official website. Include relevant details and
        links, and avoid sharing sensitive reports publicly. Reports are
        reviewed promptly and handled with care. Maintainers may respond with a
        reminder, warning, temporary restriction, or removal from project
        spaces, depending on the behavior and its impact.
      </p>
    </main>
  );
}
