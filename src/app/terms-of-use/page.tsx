export default function TermsOfUsePage() {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Terms of Use
      </h1>
      <p className="mt-6 text-zinc-700 dark:text-zinc-300">
        By accessing this website, you agree to use it lawfully and in a way
        that supports the Mongol OS community and project goals.
      </p>
      <h2 className="mt-10 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Acceptable use
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
        <li>Use content for learning, contribution, and project collaboration.</li>
        <li>Do not attempt unauthorized access or disrupt infrastructure.</li>
        <li>Respect licenses, copyrights, and contributor rights.</li>
      </ul>
      <h2 className="mt-10 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Disclaimer
      </h2>
      <p className="mt-4 text-zinc-700 dark:text-zinc-300">
        Website content is provided on an &quot;as is&quot; basis without
        warranties. The maintainers may update or remove content at any time.
      </p>
      <h2 className="mt-10 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Changes
      </h2>
      <p className="mt-4 text-zinc-700 dark:text-zinc-300">
        These terms may be revised as the project evolves. Continued use of the
        site means you accept updated terms.
      </p>
    </main>
  );
}
