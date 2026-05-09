import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight">
            Transforming
            <br />
            Institutions
            <br />
            Through{" "}
            <span className="text-[#5DBB18]">Digital</span>
            <br />
            <span className="text-[#5DBB18]">Innovation.</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-center text-gray-600 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
          Garaad Systems delivers e-government,{" "}
          <strong className="text-gray-900">digital engineering</strong>, and{" "}
          <strong className="text-gray-900">institutional modernization solutions</strong>{" "}
          that strengthen public and private sector institutions across Ethiopia
          and the Horn of Africa.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="#contact"
            className="bg-[#5DBB18] text-white text-sm px-6 py-2.5 rounded-md font-medium hover:bg-[#4da514] transition-colors"
          >
            Get in touch
          </Link>
          <Link
            href="#projects"
            className="flex items-center gap-1 text-sm text-gray-700 font-medium hover:text-gray-900 transition-colors"
          >
            See our Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Trusted By */}
        <div className="text-center">
          <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-6">
            Trusted By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {/* Gebeya */}
            <div className="flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-5 h-5 rounded-full bg-pink-500 flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">G</span>
              </div>
              <span className="text-sm font-bold text-gray-700">gebeya</span>
            </div>

            {/* Flyease */}
            <div className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-sm font-black text-red-600 tracking-tight">FLY</span>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M7 1L13 5L7 9M1 5h12" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-sm font-black text-red-600 tracking-tight">EASE</span>
            </div>

            {/* Mahadho */}
            <div className="flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="4" width="16" height="12" rx="1" stroke="#374151" strokeWidth="1.5" />
                <path d="M2 8h16" stroke="#374151" strokeWidth="1.5" />
                <path d="M10 4V2" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M7 2h6" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="text-xs font-bold text-gray-700">mahadho</span>
            </div>

            {/* Grand Space */}
            <div className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-5 h-5 rounded-full border-2 border-orange-500 flex items-center justify-center">
                <span className="text-orange-500 text-[7px] font-black">GS</span>
              </div>
              <span className="text-xs font-bold text-gray-700">Grand Space</span>
            </div>

            {/* Sabi */}
            <div className="flex items-center opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-sm font-black text-gray-800 tracking-wide">sabi</span>
            </div>
          </div>

          {/* Second row of logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-6">
            <div className="w-10 h-10 rounded-full border-2 border-blue-600 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-blue-600 text-[8px] font-black">ORG</span>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-green-600 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-green-600 text-[8px] font-black">ECO</span>
            </div>
            <div className="flex items-center opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-sm font-bold text-gray-700">Tabiye</span>
            </div>
            <div className="flex items-center opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-sm font-bold text-gray-700">SRC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
