export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; attribution?: string };

export type Article = {
  slug: string;
  category: string;
  readTime: string;
  date: string;
  title: string;
  excerpt: string;
  topics: string[];
  featured?: boolean;
  content: ContentBlock[];
};

export const articles: Article[] = [
  {
    slug: "case-for-egovernment-horn-of-africa",
    category: "Perspective",
    readTime: "7 min read",
    date: "April 2025",
    featured: true,
    title: "The Case for E-Government in the Horn of Africa",
    excerpt:
      "Across Ethiopia, Djibouti, and Somalia, governments are recognizing that paper-based service delivery is no longer sustainable. But building digital government is harder than buying software. We explore what it actually takes.",
    topics: ["Digital Government", "East Africa", "Public Policy"],
    content: [
      {
        type: "paragraph",
        text: "The gap between what governments promise and what citizens experience is, in most of East Africa, fundamentally a digital gap. It is not a gap in willingness or intent — regional governments have made significant commitments to service delivery improvement. It is a gap in infrastructure: the software, systems, and processes that determine whether a citizen can complete a transaction with the state in minutes or in weeks.",
      },
      {
        type: "paragraph",
        text: "The Horn of Africa presents a particular set of challenges. Connectivity is uneven, institutional capacity varies enormously, and the pace of urbanization is outrunning the administrative infrastructure designed to manage it. In the Somali Region of Ethiopia alone, the volume of construction, property, and business registrations has grown significantly in recent years, placing acute pressure on manual, paper-based systems that were never designed for this load.",
      },
      {
        type: "heading",
        text: "Why Buying Software Isn't the Answer",
      },
      {
        type: "paragraph",
        text: "The instinctive response to this challenge is to procure software — to select a platform, acquire a license, and configure it for local needs. In practice, this approach fails more often than it succeeds. Off-the-shelf systems are designed for different regulatory contexts, different languages, different administrative hierarchies. Configuring them for Horn of Africa institutions typically costs more than building bespoke, and the result is a system that no one fully understands and no one can fully maintain.",
      },
      {
        type: "quote",
        text: "Good e-government design is, first and foremost, an organizational design problem. The technology follows from understanding the institution.",
      },
      {
        type: "paragraph",
        text: "What actually works is building with institutional context from the start. This means beginning not with a technology decision but with a deep understanding of how the institution actually operates — who approves what, where bottlenecks occur, what paper records exist and must be preserved, and who among the staff will use the system daily. The software is designed around that reality, not the other way around.",
      },
      {
        type: "heading",
        text: "The Technical Requirements of Government-Grade Systems",
      },
      {
        type: "paragraph",
        text: "The technology follows from that understanding. API-driven architectures allow institutions to build incrementally — replacing one process at a time rather than attempting a complete digital transition that creates chaos. Role-based access control maps to actual institutional hierarchies. Audit logging satisfies both internal accountability requirements and external inspection mandates. These are not abstract technical principles — they are the practical requirements of a government system that must work, every day, without failure.",
      },
      {
        type: "list",
        items: [
          "Role-based access that maps to real organizational hierarchies, not generic user types",
          "Full audit logging for every action — who did what, on which record, at what time",
          "Workflow engines that enforce formal approval processes digitally",
          "Integration layers that connect to existing records without requiring full migration",
          "Interfaces designed for staff with varying levels of digital literacy",
        ],
      },
      {
        type: "paragraph",
        text: "The case for e-government in the Horn of Africa is not primarily an economic argument, though the efficiency gains are real. It is a service delivery argument: citizens who spend days completing transactions that should take minutes are being failed by their institutions. Every hour saved in a licensing queue, every application that can be submitted without traveling to a government office, every approval notification received by phone — these are the tangible outputs of well-designed digital government. That is what we are here to build.",
      },
    ],
  },
  {
    slug: "upgrading-construction-licence-system",
    category: "Case Study",
    readTime: "8 min read",
    date: "March 2025",
    title: "How We Upgraded the Construction Licence Registration System",
    excerpt:
      "A detailed look at the end-to-end process of modernizing the Somali Regional Government's construction licence workflow — from discovery and architecture design through to deployment and staff training.",
    topics: ["E-Government", "Case Study", "Ethiopia"],
    content: [
      {
        type: "paragraph",
        text: "When the Somali Regional Government's Urban Development and Construction Bureau approached us to upgrade their Construction Licence Registration System, the system they were running had served its original purpose — but the volume and complexity of applications had grown well beyond what it could handle effectively. Processing times were long, status visibility was minimal, and the paper-based components of the workflow created bottlenecks that had no technical solution within the existing architecture.",
      },
      {
        type: "heading",
        text: "Discovery: Understanding the Real Workflow",
      },
      {
        type: "paragraph",
        text: "Our engagement began with a four-week discovery phase. We interviewed bureau staff at every level of the workflow — intake clerks, technical reviewers, final approvers, and administrative managers. We mapped the full lifecycle of a construction licence application from initial submission through inspection scheduling, technical review, fee calculation, and final issuance. We identified where digital and paper workflows intersected, where data was being re-entered manually, and where approvals were blocked waiting for sign-offs from colleagues in different offices.",
      },
      {
        type: "quote",
        text: "The formal process — what the written procedure said — and the actual process — what staff actually did — had diverged significantly. Mapping both was essential before we could design anything.",
      },
      {
        type: "heading",
        text: "Architecture: Preserve Data, Rebuild Everything Else",
      },
      {
        type: "paragraph",
        text: "The architecture decision was to preserve the core data model while rebuilding the workflow engine and user interfaces from scratch. The existing database contained valuable historical records that could not be migrated without risk of loss; our integration layer made them accessible to the new system without requiring a full data migration. The new workflow engine was designed to enforce the bureau's formal approval hierarchy digitally — routing applications to the correct reviewer at each stage, sending notifications on status changes, and escalating to supervisors when approvals were delayed beyond threshold times.",
      },
      {
        type: "heading",
        text: "Security: Non-Negotiable From Day One",
      },
      {
        type: "paragraph",
        text: "Security was non-negotiable. The system handles applications from contractors and property developers — parties with significant financial interests in the outcome of licensing decisions. Every action taken by every user is logged with a timestamp and user identifier. Role definitions are precise: a technical reviewer can approve their specific stage but cannot access other stages or administrative functions. The system's access controls were reviewed against the bureau's formal staff hierarchy before deployment.",
      },
      {
        type: "heading",
        text: "Deployment and Training",
      },
      {
        type: "paragraph",
        text: "Training was delivered in two phases: an initial session covering the full system with bureau management and senior staff, followed by role-specific sessions with each user group. We prepared comprehensive operational documentation that the bureau's IT coordinator could use for future onboarding. The deployment was phased — new applications entered the new system while existing in-progress applications completed in the legacy system, eliminating disruption to active cases.",
      },
      {
        type: "list",
        items: [
          "Processing times for straightforward applications decreased substantially",
          "Staff reported significantly reduced manual data entry burden",
          "Real-time pipeline visibility became available to bureau management for the first time",
          "All contractual and technical requirements were met in full, on schedule",
        ],
      },
    ],
  },
  {
    slug: "designing-secure-portals-public-institutions",
    category: "Technical",
    readTime: "5 min read",
    date: "February 2025",
    title: "Designing Secure Portals for Public Institutions",
    excerpt:
      "Government systems handle data that is both sensitive and difficult to secure. We break down the security principles that guide our architecture decisions — from access control to audit logging.",
    topics: ["Security", "Architecture", "Government"],
    content: [
      {
        type: "paragraph",
        text: "Security in government systems is not a feature you add before launch. It is an architectural commitment that shapes every decision from the first day of design. This is especially true for portals that handle sensitive administrative data — construction permits, business registrations, personnel records — where the consequences of a breach extend beyond financial loss to institutional credibility and, in some cases, public safety.",
      },
      {
        type: "heading",
        text: "The Most Common Failure: Inadequate Access Control",
      },
      {
        type: "paragraph",
        text: "The most common failure mode we observe in institutional systems is not a sophisticated attack — it is inadequate access control. Systems that give every staff member access to every record, or that rely on manual processes to enforce approvals, create environments where data leakage and unauthorized actions are difficult to detect and even harder to audit. Our approach starts with defining access precisely: who can see which data, who can modify it, who can approve actions at each stage, and who can generate reports.",
      },
      {
        type: "quote",
        text: "Role-based access control, implemented properly, maps software permissions to organizational reality — not to generic user types that exist only in the system.",
      },
      {
        type: "heading",
        text: "Defining Roles Before Writing Code",
      },
      {
        type: "paragraph",
        text: "In a government bureau, a junior intake clerk needs to create new applications and view their own queue — nothing else. A technical reviewer needs access to applications assigned to their stage. A senior approver needs visibility across all active applications plus the ability to reassign and escalate. An administrative manager needs reporting access but not the ability to modify records. Defining these roles precisely, before writing any code, is one of the most important decisions in the design process.",
      },
      {
        type: "heading",
        text: "Audit Logging as a Security Control",
      },
      {
        type: "paragraph",
        text: "Every action taken in a government system should be auditable. Our systems log the full audit trail: who performed what action, on which record, at what time. This is not primarily about catching bad actors — it is about providing the institutional accountability that government operations require. When a decision is questioned, the audit log provides a clear record. Transparency is itself a security control, because actors know their actions are permanently recorded.",
      },
      {
        type: "list",
        items: [
          "Define access roles before designing any interface",
          "Every sensitive action must be logged with user identity and timestamp",
          "Session management must account for shared workstation environments",
          "Documentation must include access revocation procedures for departing staff",
          "Security is a practice, not a one-time pre-launch checklist",
        ],
      },
    ],
  },
  {
    slug: "api-first-architecture-government-systems",
    category: "Technical",
    readTime: "6 min read",
    date: "January 2025",
    title: "API-First Architecture: Why Government Systems Need It",
    excerpt:
      "Legacy government systems are siloed, brittle, and expensive to maintain. API-first design changes that. Here's how we apply this principle to every platform we build.",
    topics: ["API Design", "Architecture", "Government Systems"],
    content: [
      {
        type: "paragraph",
        text: "The legacy government systems we encounter most often share a common architectural problem: they were built as monoliths. A single application handles everything — the user interface, the business logic, the data storage, the reporting. This made sense when the system was first built, but it creates compounding problems as institutions grow and their digital needs evolve. Adding a new workflow requires modifying the core system. Connecting a new reporting tool requires direct database access. Integrating with another department's system requires expensive custom development that breaks the next time anyone upgrades anything.",
      },
      {
        type: "heading",
        text: "What API-First Actually Means",
      },
      {
        type: "paragraph",
        text: "API-first architecture is the pattern that solves this. The principle is straightforward: every function the system performs — creating a record, retrieving an application status, triggering a workflow stage, generating a report — is exposed through a well-defined API endpoint. Every interface, whether a staff portal or a public-facing application form, communicates with the system exclusively through these APIs. The APIs are the system's public contract, and everything else is an implementation detail.",
      },
      {
        type: "quote",
        text: "An institution with an API-first system is positioned to participate in Ethiopia's evolving digital government ecosystem. An institution with a monolithic system faces expensive, fragile integration work every time a connection is required.",
      },
      {
        type: "heading",
        text: "Practical Consequences for Government Institutions",
      },
      {
        type: "paragraph",
        text: "For government institutions, this has immediate practical consequences. When the bureau needs a mobile-accessible version of a staff tool, it does not require rebuilding the system — it requires building a new interface that communicates with the same APIs. When a second department needs to retrieve application status data for their own workflow, they access the API rather than requesting direct database access. When an auditor needs data for analysis, there is a documented, access-controlled API endpoint for that purpose.",
      },
      {
        type: "heading",
        text: "Documentation Is Inseparable From the Architecture",
      },
      {
        type: "paragraph",
        text: "Documentation is inseparable from API-first design. Every endpoint must be documented: what it accepts, what it returns, what errors it can produce, what authentication it requires. This documentation is not just for external consumers — it is the primary tool by which future developers understand and maintain the system. We invest significant effort in API documentation because we have seen the consequences of systems that only their original developers understand.",
      },
      {
        type: "list",
        items: [
          "Design the API contract before building any interface",
          "Every function the system performs must be accessible through a documented endpoint",
          "Access control applies to API endpoints, not just UI elements",
          "Documentation is a deliverable, not an afterthought",
          "Build for integration from day one — not as a future enhancement",
        ],
      },
    ],
  },
  {
    slug: "hybrid-teams-garaad-model",
    category: "Company",
    readTime: "4 min read",
    date: "December 2024",
    title: "Hybrid Teams: The Garaad Model for Scalable Delivery",
    excerpt:
      "Most consulting firms either over-staff and overprice, or under-resource and under-deliver. We built a hybrid model that provides senior expertise at every stage without the overhead. This is how it works.",
    topics: ["Team Structure", "Delivery Model", "Consulting"],
    content: [
      {
        type: "paragraph",
        text: "The standard consulting model — a fixed team of generalists deployed across clients — has a structural problem for the kind of work we do. Government systems require specialized expertise: information security knowledge, workflow systems experience, government regulatory context, and the kind of senior architectural judgment that comes from having built and maintained complex institutional software before. Assembling all of these capabilities in a permanent team is expensive, and it forces a choice between staying small and turning away large projects, or growing quickly and diluting quality.",
      },
      {
        type: "heading",
        text: "Two Functions, One Model",
      },
      {
        type: "paragraph",
        text: "The hybrid model we operate separates two distinct functions: architectural oversight and delivery capacity. Our permanent in-house team — small, senior, and deeply specialized — owns every engagement's design decisions, security architecture, and quality standards. Project-based specialists, drawn from a vetted pool of engineers with relevant experience, provide the delivery capacity for larger or more technically diverse engagements.",
      },
      {
        type: "quote",
        text: "There is no account manager insulating the senior team from client conversations. The architect who designs the system is the same person who reviews every major pull request.",
      },
      {
        type: "heading",
        text: "How We Vet Specialists",
      },
      {
        type: "paragraph",
        text: "Vetting project-based specialists is the operational challenge this model creates, and it is one we take seriously. The pool of developers we work with has been built over years of repeated engagements and referrals. We do not use generalist freelance platforms. When we bring a specialist into an engagement, they have typically worked with us before, or they come with a personal reference from someone who has. The first engagement with any new specialist is always on a project where we have sufficient internal capacity to absorb underperformance without client impact.",
      },
      {
        type: "heading",
        text: "The Model's Honest Limitation",
      },
      {
        type: "paragraph",
        text: "The model's limitation is scale ceiling — there are projects too large for our current network to absorb without quality risk, and we are honest about that. We do not take projects we cannot deliver well. This constraint, which some clients initially find frustrating, is itself a quality signal: we are not telling you what you want to hear. In a sector where over-promise and under-deliver is common, that honesty is the thing we are most proud of.",
      },
    ],
  },
  {
    slug: "paper-to-portal-workflow-automation",
    category: "Digital Transformation",
    readTime: "6 min read",
    date: "November 2024",
    title: "From Paper to Portal: Automating Government Workflows",
    excerpt:
      "Workflow automation is not about replacing people — it is about removing the friction that slows them down. We look at how digital workflow tools change the daily reality of government operations.",
    topics: ["Workflow Automation", "Government", "Process Design"],
    content: [
      {
        type: "paragraph",
        text: "Paper-based government workflows fail in predictable ways. An application arrives at an intake counter, is logged in a register, stamped, and passed to a reviewer. The reviewer adds it to a pile. When they get to it — days or weeks later — they process it, annotate it, and pass it to the next stage. At each transition, there is an opportunity for documents to be lost, misrouted, or delayed without anyone knowing where they are or why. The applicant, waiting for a decision, has no visibility into any of this.",
      },
      {
        type: "heading",
        text: "The Failure Is Architectural, Not Human",
      },
      {
        type: "paragraph",
        text: "The failure is not primarily human — the individual staff members processing these applications are often working as efficiently as the system allows. The failure is architectural: paper workflows have no inherent routing logic, no automatic notification mechanism, no queue visibility, no escalation path when something stalls. These are properties that must be designed in, and paper does not support them.",
      },
      {
        type: "heading",
        text: "What Automation Actually Means",
      },
      {
        type: "paragraph",
        text: "Workflow automation does not mean replacing people with software. It means giving people better tools for the work they were already doing. A digital intake system does not eliminate intake staff — it gives them a structured interface that routes each application to the correct queue automatically, validates that required documents are present before the application enters the review process, and generates an acknowledgment for the applicant immediately. The intake staff member does less manual routing and more actual case work.",
      },
      {
        type: "quote",
        text: "The design of a digital workflow begins with mapping the existing process in detail — and that mapping almost always reveals that the formal process and the actual process have diverged.",
      },
      {
        type: "heading",
        text: "Visibility and Notification: The Core Gains",
      },
      {
        type: "paragraph",
        text: "Notification and visibility are the two capabilities that digital workflows deliver most clearly. When an application moves to a new stage, the responsible staff member is notified. When an application has been waiting beyond a threshold time, a supervisor is alerted. When an applicant requests a status update, the system provides a precise answer — at which stage, since when, who is responsible — rather than a promise to follow up.",
      },
      {
        type: "list",
        items: [
          "Map both the formal process and the actual process before designing anything",
          "Routing logic must reflect real institutional hierarchies and approval authorities",
          "Notification design should match how staff actually communicate, not an idealized version",
          "Status visibility for applicants reduces inbound inquiry volume significantly",
          "Escalation rules must be agreed with management before they are encoded in software",
        ],
      },
      {
        type: "paragraph",
        text: "The measure of a successful workflow automation is not the technology delivered — it is the operational change it enables. Processing time is the most direct indicator. Staff burden is the second: if intake clerks are spending less time on manual logging and more time on substantive case review, the system is adding value where it matters. We track both, for every system we deploy, because the only thing that matters is whether the institution now works better.",
      },
    ],
  },
];
