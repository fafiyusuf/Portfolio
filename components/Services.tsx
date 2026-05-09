const services = [
  {
    number: "01",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#0A1628" strokeWidth="1.5" />
        <path d="M8 21h8M12 17v4" stroke="#0A1628" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 10h.01M9 10h6M6 13h4" stroke="#0A1628" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "E-Government Solutions",
    tagline: "Efficient, accessible, and transparent public services.",
    description:
      "We design and implement digital government platforms that enhance public service delivery, transparency, and civic engagement. Our e-government ecosystem enables institutions to transition from manual and fragmented processes to integrated, user-centered digital services.",
  },
  {
    number: "02",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L2 7l10 5 10-5-10-5z"
          stroke="#0A1628"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M2 17l10 5 10-5M2 12l10 5 10-5"
          stroke="#0A1628"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Digital Engineering",
    tagline: "Robust digital infrastructure that scales with your institution.",
    description:
      "We build secure, scalable, and reliable digital systems tailored to institutional needs. Our engineering approach combines modern technology architecture with practical implementation to ensure long-term performance and adaptability.",
  },
  {
    number: "03",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          stroke="#0A1628"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M9 22V12h6v10" stroke="#0A1628" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Institutional Modernization",
    tagline: "Modern, agile, and digitally enabled institutions.",
    description:
      "We help organizations transform their structures, processes, and capabilities to operate effectively in a digital environment. Our institutional modernization services align technology, governance, and operations for sustainable transformation.",
  },
  {
    number: "04",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M2 20h20M6 20V10M12 20V4M18 20v-6"
          stroke="#0A1628"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 4l3 3M12 4l-3 3"
          stroke="#0A1628"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Advisory & Strategy",
    tagline: "Clear direction and confident digital transformation programs.",
    description:
      "We provide strategic guidance to help leaders plan, prioritize, and implement digital transformation initiatives with clarity and confidence. Our advisory services bridge policy, technology, and institutional realities.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-[#F7F8FA]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold text-[#0A1628] uppercase tracking-widest mb-3 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.1] mb-5">
            Full-Spectrum Digital
            <br />
            Transformation Services
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            From strategy through to deployment, we deliver integrated solutions that drive real
            institutional change across Ethiopia and the Horn of Africa.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service) => (
            <div
              key={service.number}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#0A1628]/25 hover:shadow-xl hover:shadow-[#0A1628]/[0.06] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-7">
                <div className="w-11 h-11 rounded-xl bg-[#0A1628]/10 flex items-center justify-center shrink-0">
                  {service.icon}
                </div>
                <span className="text-[40px] font-black text-gray-100 leading-none group-hover:text-[#0A1628]/15 transition-colors select-none">
                  {service.number}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1.5">{service.title}</h3>
              <p className="text-sm font-semibold text-[#0A1628] mb-4">{service.tagline}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
