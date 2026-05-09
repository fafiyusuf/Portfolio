import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "Masaf",
    description: "Empowering Youth, Expanding Opportunity, Building Resilient Communities.",
    logo: (
      <div className="w-24 h-24 rounded-full bg-red-50 border border-red-100 flex items-center justify-center">
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="26" cy="26" r="24" stroke="#dc2626" strokeWidth="2" fill="none" />
          <circle cx="26" cy="26" r="16" stroke="#dc2626" strokeWidth="1.5" fill="none" />
          <path d="M14 26 Q20 16 26 26 Q32 36 38 26" stroke="#dc2626" strokeWidth="1.5" fill="none" />
          <circle cx="26" cy="20" r="3" fill="#dc2626" />
          <text x="26" y="42" textAnchor="middle" fontSize="7" fill="#dc2626" fontWeight="bold" fontFamily="sans-serif">MASAF</text>
        </svg>
      </div>
    ),
  },
  {
    id: 2,
    name: "Flayease",
    description: "Exploring the World, One Dream at a Time!",
    logo: (
      <div className="flex items-center gap-1">
        <span className="text-2xl font-black text-red-600 tracking-tight">FLY</span>
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
          <path d="M2 7h14M12 2l6 5-6 5" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-2xl font-black text-red-600 tracking-tight">EASE</span>
      </div>
    ),
  },
  {
    id: 3,
    name: "Mahadho",
    description: "A Dynamic Platform Showcasing Somali Culture, Literature, and Baital Insignia.",
    logo: (
      <div className="flex flex-col items-center">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="16" width="40" height="32" rx="2" stroke="#374151" strokeWidth="2" fill="none" />
          <path d="M8 24h40" stroke="#374151" strokeWidth="1.5" />
          <path d="M30 16V10" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
          <path d="M22 10h16" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 32 Q30 28 36 32" stroke="#374151" strokeWidth="1.5" fill="none" />
          <path d="M24 38 Q30 34 36 38" stroke="#374151" strokeWidth="1.5" fill="none" />
          <path d="M27 10 Q30 6 33 10" stroke="#374151" strokeWidth="1.5" fill="none" />
        </svg>
        <span className="text-xs font-bold text-gray-600 mt-1">mahadho</span>
      </div>
    ),
  },
  {
    id: 4,
    name: "Somali Regional Government Urban Development and Construction Bureau",
    description: "License Registration Portal.",
    logo: (
      <div className="w-24 h-24 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white">
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
          <circle cx="26" cy="26" r="23" stroke="#374151" strokeWidth="1.5" fill="none" />
          <circle cx="26" cy="26" r="17" stroke="#374151" strokeWidth="1" fill="none" />
          <path d="M14 38 L20 26 L26 32 L32 22 L38 30" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="26" cy="18" r="4" fill="#3b82f6" opacity="0.7" />
          <text x="26" y="46" textAnchor="middle" fontSize="5" fill="#374151" fontFamily="sans-serif">BUREAU</text>
        </svg>
      </div>
    ),
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase mb-10">
          Projects
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow"
            >
              {/* Logo area */}
              <div className="h-36 flex items-center justify-center mb-6 bg-gray-50 rounded-md">
                {project.logo}
              </div>

              {/* Info */}
              <h3 className="text-base font-bold text-gray-900 mb-2">{project.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{project.description}</p>
              <Link
                href="#"
                className="text-sm text-[#5DBB18] font-medium hover:underline inline-flex items-center gap-1"
              >
                Learn More
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Browse All */}
        <div className="flex justify-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 text-sm px-6 py-2.5 rounded-md font-medium hover:border-gray-400 hover:text-gray-900 transition-colors"
          >
            Browse All Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
