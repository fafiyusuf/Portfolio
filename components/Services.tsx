const services = [
  {
    number: "01",
    title: "E-Government Solutions",
    tagline: "Efficient, accessible, and transparent public services.",
    description:
      "We design and implement digital government platforms that enhance public service delivery, transparency, and civic engagement. Our e-government ecosystem ensures enable institutions to transition from manual and fragmented processes to integrated, user-centered digital services.",
  },
  {
    number: "02",
    title: "Digital Engineering",
    tagline: "Robust digital infrastructure that supports institutional operations and growth.",
    description:
      "We build secure, scalable, and reliable digital systems tailored to institutional needs. Our engineering approach combines modern technology architecture with practical implementation to ensure long-term performance and adaptability.",
  },
  {
    number: "03",
    title: "Institutional Modernization",
    tagline: "Modern, agile, and digitally enabled institutions.",
    description:
      "We help organizations transform their structures, processes, and capabilities to operate effectively in a digital environment. Our institutional modernization services align technology, governance, and operations for sustainable transformation.",
  },
  {
    number: "04",
    title: "Advisory & Strategy",
    tagline: "Clear direction and successful digital transformation programs.",
    description:
      "We provide strategic guidance to help leaders plan, prioritize, and implement digital transformation initiatives with clarity and confidence. Our advisory services bridge policy, technology and institutional realities.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase">
            Our Services
          </h2>
        </div>
        <p className="text-center text-sm text-gray-500 max-w-2xl mx-auto mb-20 leading-relaxed">
          Garaad Systems provides integrated digital transformation and institutional modernization
          services that enable governments and organizations to operate efficiently, deliver better
          services, and thrive in the digital era. Our work spans strategy, system design,
          implementation, and capacity development, ensuring sustainable and measurable impact
          across Ethiopia and the Horn of Africa.
        </p>

        {/* Services List */}
        <div className="divide-y divide-gray-100">
          {services.map((service) => (
            <div key={service.number} className="grid grid-cols-12 gap-6 py-12">
              {/* Number */}
              <div className="col-span-1 hidden md:flex items-start justify-start">
                <span className="text-xs text-gray-300 font-medium mt-1">{service.number}</span>
              </div>

              {/* Content */}
              <div className="col-span-12 md:col-span-11">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left: Title + Tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{service.tagline}</p>
                  </div>
                  {/* Right: Description */}
                  <div>
                    <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
