import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10">
      <div className="text-center space-y-6 max-w-md">
        <div className="text-8xl font-bold mono gradient-text">404</div>
        <div className="space-y-2">
          <h1 className="text-xl font-bold mono text-gray-200">
            SYSTEM_ERROR: PAGE_NOT_FOUND
          </h1>
          <p className="text-sm text-gray-500 mono">
            The requested module does not exist in the AryanOS filesystem.
          </p>
        </div>
        <div className="glass-panel p-4 text-left space-y-1">
          <p className="text-[11px] mono text-gray-500">
            <span className="text-[#f472b6]">$</span> locate requested_page
          </p>
          <p className="text-[11px] mono text-[#f87171]">
            Error: No matching entries found in /sys/pages/
          </p>
          <p className="text-[11px] mono text-gray-500">
            <span className="text-[#f472b6]">$</span> suggest --fix
          </p>
          <p className="text-[11px] mono text-[#34d399]">
            Redirecting to home directory...
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 border border-[#818cf8]/40 hover:border-[#818cf8] rounded-lg text-[#818cf8] hover:bg-[#818cf8]/10 transition-all duration-300 mono text-sm"
        >
          [ RETURN_TO_HOME ]
        </Link>
      </div>
    </div>
  );
}
