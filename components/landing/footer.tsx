export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-wrap flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">FluxKit</p>
          <p className="mt-1 text-sm text-white/46">Production-ready React Native SaaS starter</p>
        </div>
        <div className="flex items-center gap-5 text-sm text-white/50">
          <a href="#pricing" className="transition hover:text-white">
            Pricing
          </a>
          <a href="#faq" className="transition hover:text-white">
            FAQ
          </a>
          <a href="#demo" className="transition hover:text-white">
            Demo
          </a>
          <a href="#top" className="transition hover:text-white">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
