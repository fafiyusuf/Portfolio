import type { ReactNode } from "react";

export type Project = {
  slug: string;
  category: string;
  name: string;
  client: string;
  description: string;
  detail: string;
  featured?: boolean;
  outcomes: string[];
  approach: string;
  deliverables: string[];
  tags: string[];
  logo: ReactNode;
};

export const projects: Project[] = [
  {
    slug: "construction-licence-registration",
    category: "E-Government",
    name: "Construction Licence Registration System",
    client: "Somali Regional Government — Urban Development & Construction Bureau",
    featured: true,
    description:
      "A comprehensive upgrade of the digital platform managing construction licence registration for the Somali Regional Government.",
    detail:
      "The Urban Development and Construction Bureau was operating a legacy registration system that could no longer handle the volume or complexity of incoming applications. Processing times were long, status visibility was minimal, and paper-based components of the workflow created bottlenecks with no technical resolution within the existing architecture. We were engaged to design and deliver a complete system upgrade — rebuilding the workflow engine, user interfaces, and integration layer while preserving the bureau's historical data and ensuring zero disruption to applications already in progress.",
    outcomes: [
      "Eliminated paper-based application and approval bottlenecks across the full licence lifecycle",
      "Delivered real-time application status visibility for both staff and applicants",
      "Built reporting dashboards giving bureau management pipeline-wide operational insight",
      "Deployed in full compliance with all contractual and technical requirements",
      "Reduced average processing time for standard construction licence applications",
      "Established audit logging for every user action across the full workflow",
    ],
    approach:
      "We began with a four-week discovery phase — interviewing staff at every level of the workflow, mapping the full application lifecycle from submission through final issuance, and identifying where digital and paper workflows intersected. The architecture preserved the existing data model while rebuilding the workflow engine and interfaces from scratch. An integration layer made historical records accessible to the new system without requiring a full data migration. Deployment was phased: new applications entered the new system while in-progress applications completed in the legacy system.",
    deliverables: [
      "Digital application submission portal (public-facing)",
      "Multi-stage workflow engine with role-based routing and notifications",
      "Administrative dashboard with real-time queue and pipeline visibility",
      "Reporting module for processing time and volume analytics",
      "Role-based access control mapped to bureau staff hierarchy",
      "Full audit trail for all user actions and approval decisions",
      "Staff training and operational documentation",
    ],
    tags: ["E-Government", "Workflow Automation", "Portal", "Dashboard", "Somali Region", "Ethiopia"],
    logo: (
      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
        <svg width="28" height="28" viewBox="0 0 52 52" fill="none">
          <circle cx="26" cy="26" r="22" stroke="#374151" strokeWidth="1.5" fill="none" />
          <path
            d="M14 38 L20 26 L26 32 L32 22 L38 30"
            stroke="#3b82f6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="26" cy="18" r="4" fill="#3b82f6" opacity="0.7" />
        </svg>
      </div>
    ),
  },
  {
    slug: "masaf",
    category: "Youth Empowerment",
    name: "Masaf",
    client: "Masaf — Somali Region Youth Programme",
    description:
      "A digital platform empowering youth through employment programs and community resilience initiatives across the Somali Region.",
    detail:
      "Masaf connects young people with employment opportunities, training programs, and community-led initiatives across the Somali Region. The platform provides the regional program with real-time data on participant enrollment, engagement, and outcomes — giving program managers the visibility they need to allocate resources and measure impact.",
    outcomes: [
      "Centralized participant registration and program enrollment across multiple districts",
      "Built dashboards giving program managers real-time enrollment and outcome data",
      "Enabled data-driven resource allocation across the youth program portfolio",
      "Reduced manual reporting burden for field coordinators significantly",
    ],
    approach:
      "The engagement began with fieldwork alongside program coordinators to understand how participants were being tracked and what data was actually being used for decisions. The platform was designed around those real data needs — not around what seemed useful in theory. A mobile-responsive interface was critical given the connectivity environment in which field coordinators work.",
    deliverables: [
      "Participant registration and program enrollment system",
      "Field coordinator mobile-responsive interface",
      "Program management dashboard with enrollment and outcome analytics",
      "District-level reporting with geographic breakdown",
      "Admin panel for program and cohort management",
    ],
    tags: ["Web Platform", "Civic Tech", "Data & Reporting", "Ethiopia"],
    logo: (
      <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
        <svg width="28" height="28" viewBox="0 0 52 52" fill="none">
          <circle cx="26" cy="26" r="22" stroke="#dc2626" strokeWidth="2" fill="none" />
          <circle cx="26" cy="26" r="14" stroke="#dc2626" strokeWidth="1.5" fill="none" />
          <path d="M14 26 Q20 16 26 26 Q32 36 38 26" stroke="#dc2626" strokeWidth="1.5" fill="none" />
          <circle cx="26" cy="20" r="3" fill="#dc2626" />
        </svg>
      </div>
    ),
  },
  {
    slug: "flyease",
    category: "Travel & Tourism",
    name: "FlyEase",
    client: "FlyEase — East Africa Travel Platform",
    description:
      "A modern travel discovery platform connecting users to destinations and curated experiences across East Africa.",
    detail:
      "FlyEase is a travel discovery and booking platform built for East African travelers and tourism operators. The platform provides curated itineraries, destination guides, and partner integrations — delivered through a mobile-first interface designed for the connectivity environments common in the region. The system connects travelers with verified local operators and handles booking coordination through a structured partner management backend.",
    outcomes: [
      "Launched a full-featured travel discovery experience for East African users",
      "Integrated partner operator management with booking coordination",
      "Built a mobile-first interface optimized for variable connectivity conditions",
      "Delivered a scalable architecture capable of supporting catalog growth",
    ],
    approach:
      "The platform was designed mobile-first from day one, with performance optimization for lower-bandwidth conditions. Partner operator onboarding was a key workflow — the backend was designed to make it straightforward for travel operators to list and manage their offerings without requiring technical expertise.",
    deliverables: [
      "Public-facing travel discovery and itinerary platform",
      "Partner operator portal for listing and booking management",
      "Mobile-optimized responsive interface",
      "Search and filtering system for destinations and experiences",
      "Administrative dashboard for platform management",
    ],
    tags: ["Web App", "Marketplace", "Mobile-First", "Travel", "East Africa"],
    logo: (
      <div className="h-12 flex items-center gap-1 shrink-0">
        <span className="text-lg font-black text-red-600 tracking-tight">FLY</span>
        <svg width="14" height="10" viewBox="0 0 20 14" fill="none">
          <path d="M2 7h14M12 2l6 5-6 5" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-lg font-black text-red-600 tracking-tight">EASE</span>
      </div>
    ),
  },
  {
    slug: "mahadho",
    category: "Culture & Heritage",
    name: "Mahadho",
    client: "Mahadho — Somali Cultural Archive",
    description:
      "A dynamic digital platform preserving and showcasing Somali culture, literature, and heritage for global audiences.",
    detail:
      "Mahadho serves as a living digital archive of Somali cultural heritage — enabling scholars, communities, and diaspora audiences to discover, contribute to, and engage with literature, oral traditions, poetry, and historical records. The platform's content model was designed to handle the specific structural characteristics of Somali oral and literary traditions, including attribution, dialect, and regional provenance.",
    outcomes: [
      "Created a structured digital archive for Somali cultural and literary heritage",
      "Built contribution workflows enabling scholars and community members to add content",
      "Delivered multilingual content support for Somali and English interfaces",
      "Designed a content model capturing the provenance and attribution of traditional works",
    ],
    approach:
      "The content architecture was the defining challenge — Somali oral traditions have attribution structures that differ significantly from Western literary conventions. We worked closely with cultural advisors to design a data model that captured these distinctions accurately. The contribution workflow was designed to be accessible to community contributors who are not technical users.",
    deliverables: [
      "Digital archive with structured content model for Somali heritage",
      "Public discovery and browsing interface",
      "Contributor portal for community submissions",
      "Editorial review workflow for submitted content",
      "Multilingual support (Somali / English)",
      "Search with filtering by genre, region, period, and attribution",
    ],
    tags: ["Content Platform", "Culture", "Digital Archive", "Multilingual"],
    logo: (
      <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
        <svg width="30" height="30" viewBox="0 0 60 60" fill="none">
          <rect x="8" y="16" width="40" height="32" rx="2" stroke="#374151" strokeWidth="2" fill="none" />
          <path d="M8 24h40" stroke="#374151" strokeWidth="1.5" />
          <path d="M30 16V10" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
          <path d="M22 10h16" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    ),
  },
];
