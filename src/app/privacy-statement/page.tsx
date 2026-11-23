export default function PrivacyStatementPage() {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Privacy Statement
      </h1>
      <p className="mt-6 text-zinc-700 dark:text-zinc-300">
        Mongol OS respects your privacy. This website aims to collect only the
        minimum information required to operate and improve the project.
      </p>
      <h2 className="mt-10 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Data we may collect
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
        <li>Basic technical logs for uptime, security, and troubleshooting.</li>
        <li>Optional information you submit through contact forms or issues.</li>
      </ul>
      <h2 className="mt-10 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        How data is used
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
        <li>Operating and securing project infrastructure.</li>
        <li>Responding to contributor and community requests.</li>
        <li>Improving documentation and user experience.</li>
      </ul>
      <h2 className="mt-10 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Data sharing
      </h2>
      <p className="mt-4 text-zinc-700 dark:text-zinc-300">
        Mongol OS does not sell personal data. Information is shared only when
        required for service operation, legal obligations, or security response.
      </p>
    </main>
  );
}
