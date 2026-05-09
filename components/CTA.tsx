import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="py-24 px-6 bg-white text-center border-t border-gray-100">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-6">
          Building Smarter, Digital
          <br />
          Institutions
        </h2>
        <Link
          href="mailto:info@garaadsystems.com"
          className="inline-block bg-[#5DBB18] text-white text-sm px-6 py-2.5 rounded-md font-medium hover:bg-[#4da514] transition-colors"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
