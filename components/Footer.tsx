import Link from "next/link";

function GaraadLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="6" fill="#5DBB18" />
      <rect x="7" y="20" width="5" height="10" rx="1" fill="white" />
      <rect x="15.5" y="13" width="5" height="17" rx="1" fill="white" />
      <rect x="24" y="7" width="5" height="23" rx="1" fill="white" />
    </svg>
  );
}

const companyLinks = ["About Us", "Leadership", "Careers", "Contact"];
const serviceLinks = [
  "E-Government Solutions",
  "Digital Engineering",
  "Institutional Modernization",
  "Advisory & Strategy",
];
const insightsLinks = ["Blog", "Reports", "News"];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-6 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <GaraadLogo />
              <span className="font-bold text-gray-900 text-xs leading-tight">
                Garaad
                <br />
                Systems
              </span>
            </Link>

            {/* Address */}
            <div className="space-y-2 mb-6">
              <div className="flex items-start gap-2 text-xs text-gray-500">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 shrink-0">
                  <path
                    d="M7 1.5C5.07 1.5 3.5 3.07 3.5 5c0 3.5 3.5 7 3.5 7s3.5-3.5 3.5-7c0-1.93-1.57-3.5-3.5-3.5z"
                    stroke="#9CA3AF"
                    strokeWidth="1"
                    fill="none"
                  />
                  <circle cx="7" cy="5" r="1.5" stroke="#9CA3AF" strokeWidth="1" fill="none" />
                </svg>
                <span>Bay/Haven Mall, G2, Jigjiga, Somali Region, Ethiopia.</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                  <path
                    d="M2.5 2.5h2l1 2.5-1.5 1a8 8 0 003 3l1-1.5 2.5 1v2c0 .5-.5 1-1 1C5 12.5 1.5 9 1.5 5c0-.5.5-1 1-1z"
                    stroke="#9CA3AF"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
                <span>+251931648275</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                  <rect x="1.5" y="3" width="11" height="8" rx="1" stroke="#9CA3AF" strokeWidth="1" fill="none" />
                  <path d="M1.5 4.5l5.5 3.5 5.5-3.5" stroke="#9CA3AF" strokeWidth="1" />
                </svg>
                <span>info@garaadsystems.com</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-gray-700 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter/X" className="text-gray-400 hover:text-gray-700 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Insights */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Insights</h4>
            <ul className="space-y-2.5">
              {insightsLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            © Copyright 2025 Garaad Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Background watermark text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none overflow-hidden w-full text-center">
        <span className="text-[80px] md:text-[120px] font-black text-gray-100 whitespace-nowrap leading-none">
          Garaad Systems
        </span>
      </div>
    </footer>
  );
}
