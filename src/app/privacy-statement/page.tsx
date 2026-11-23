export default function PrivacyStatementPage() {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Privacy Statement
      </h1>
      <p className="mt-6 text-zinc-700 dark:text-zinc-300">
        This statement describes how the Mongol OS website may handle
        information when you visit the site or contact the project. Mongol OS
        is a Mongolian, Debian-based Linux operating system. The information
        processed depends on the website features you use and the services
        configured to operate the site.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Information the website may process
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
        <li>
          Basic technical information, such as your browser, device, IP address,
          and the pages or files requested, may be processed by the website
          host to deliver and protect the site.
        </li>
        <li>
          If you contact the project, the information you choose to provide,
          such as your name, email address, and message, may be used to respond
          to you.
        </li>
        <li>
          If analytics or other optional site features are enabled, those
          features may process additional information as described by the
          relevant service and any consent notice shown on the site.
        </li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        How information is used
      </h2>
      <p className="mt-4 text-zinc-700 dark:text-zinc-300">
        Information may be used to provide and secure the website, respond to
        messages, maintain project services, and understand or improve site
        performance where analytics are configured. The project should use
        information only for purposes relevant to the way it was collected and
        consistent with applicable law.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Cookies and similar technologies
      </h2>
      <p className="mt-4 text-zinc-700 dark:text-zinc-300">
        The site or its hosting and embedded services may use cookies or
        similar technologies for essential functions, security, or analytics.
        The technologies in use depend on the current site configuration. You
        can manage cookies through your browser settings; blocking some cookies
        may affect site features.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Service providers and external links
      </h2>
      <p className="mt-4 text-zinc-700 dark:text-zinc-300">
        Website hosting and enabled site features may be provided by third
        parties that process information to deliver those services. Their
        handling is governed by their own terms and privacy notices. The site
        may also link to external websites, including software download and
        community services; Mongol OS does not control their privacy practices.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Retention and security
      </h2>
      <p className="mt-4 text-zinc-700 dark:text-zinc-300">
        Information should be kept only for as long as needed for the purpose
        it was collected, or as required by law. Reasonable safeguards should
        be used to protect information from unauthorized access, loss, or
        misuse. No online service can guarantee absolute security.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Your choices and requests
      </h2>
      <p className="mt-4 text-zinc-700 dark:text-zinc-300">
        Depending on applicable law, you may be able to ask whether personal
        information about you is being processed, request access or correction,
        or ask for deletion. Contact the Mongol OS maintainers through the
        contact channel listed on the official website or in the project
        repository to make a privacy request. Please do not include sensitive
        personal information unless it is needed to handle your request.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Changes and contact
      </h2>
      <p className="mt-4 text-zinc-700 dark:text-zinc-300">
        This statement may be updated when the website or its services change.
        The current version will be published on this page. For questions or
        privacy requests, contact the Mongol OS maintainers using the contact
        channel listed on the official website or in the project repository.
      </p>
      <p className="mt-4 text-zinc-700 dark:text-zinc-300">
        For more information about Mongolia's personal data protection law,
        see the{' '}
        <a
          className="underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-50"
          href="https://legalinfo.mn/en/edtl/16532053734461"
          rel="noreferrer"
          target="_blank"
        >
          Law of Mongolia on Personal Data Protection
        </a>
        . The English translation is unofficial.
      </p>
    </main>
  );
}
