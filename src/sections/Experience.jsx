const experiences = [
  {
    period: "Jan 2025 - Present",
    role: "Full-Stack Web Architect",
    company: "Jacob Tech Labs",
    description:
      "Leading infrastructure development and full-stack engineering for commercial clients. Specializing in high-performance web applications, secure serverless deployments, and translating raw business requirements into load-bearing digital platforms.",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
    current: true,
    responsibilities: [
      "Lead full cycle development for complex web platforms, translating raw business logic into scalable Next.js and Node.js infrastructure.",
      "Architect database schemas using Supabase and MongoDB to ensure fast, reliable data retrieval under heavy load.",
      "Engineer custom API endpoints and secure routing for enterprise digital platforms (e.g., Swallowed Star affiliate dashboard)",
      "Deploy and maintain serverless backend architectures optimized for speed, security, and zero downtime scaling.",
    ],
  },
  {
    period: "Feb 2026 - Present",
    role: "AI Systems & Cloud Infrastructure",
    company: "Self-Hosted Server Environments",
    description:
      "Provisioning and managing self-hosted cloud environments for complex artificial intelligence workloads. Focused on deep Linux system administration, containerization, and multi-agent routing.",
    responsibilities: [
      "Manage and maintain a 24GB ARM instance on Oracle Cloud, orchestrating Docker containers for local enterprise deployments.",
      "Implement multi-agent frameworks (OpenClaw) and integrate sophisticated reasoning models for automated task execution.",
      "Configure strict Linux networking protocols and bypass constraints to maintain uninterrupted context between autonomous agents.",
      "Optimize build processes and containerized deployments to eliminate environment inconsistencies across staging and production.",
    ],
    technologies: ["React", "Redux", "Jest", "Cypress"],
    current: false,
  },
  {
    period: "Nov 2025 - Present",
    role: "Digital Architecture & Branding",
    company: "Consulting Projects (Astro Integrated Farms)",
    description:
      "Directing digital brand architecture and developing custom web solutions for commercial entities, ensuring technical superiority aligns seamlessly with high-end visual identity.",
    responsibilities: [
      "Develop full-stack web platforms and specialized portals (e.g., Canine Care Division) for commercial agricultural enterprises like Astro Integrated Farms.",
      "Direct high-definition asset generation and visual branding to ensure technical and aesthetic cohesion across all touchpoints.",
      "Modernize legacy digital footprints to improve client acquisition and establish professional industry authority.",
      "Bridge the gap between frontend user experience (UI/UX) and complex backend logic for non-technical stakeholders.",
    ],
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    current: false,
  },
  {
    period: "June 2024 - Present",
    role: "Freelance Developer",
    company: "Remote Jobs",
    description:
      "Delivered custom web solutions for small businesses and startups. Built 10+ websites and applications, handling everything from design to deployment.",
    responsibilities: [
      "Develop full-stack web platforms and specialized portals (e.g., Canine Care Division) for commercial agricultural enterprises like Astro Integrated Farms.",
      "Direct high-definition asset generation and visual branding to ensure technical and aesthetic cohesion across all touchpoints.",
      "Modernize legacy digital footprints to improve client acquisition and establish professional industry authority.",
      "Bridge the gap between frontend user experience (UI/UX) and complex backend logic for non-technical stakeholders.",
    ],
    technologies: ["JavaScript", "PHP", "WordPress", "MySQL"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <ul className="text-sm text-muted-foreground mt-4 space-y-2 list-disc list-inside md:list-outside pl-0 md:pl-4">
                      {exp.responsibilities.map((responsibility, respIdx) => (
                        <li key={respIdx} className="leading-relaxed">
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
