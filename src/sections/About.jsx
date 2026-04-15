import { Server, Database, Cpu, Code2 } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Cloud Infrastructure",
    description:
      "Provisioning heavy Linux server environments, managing Oracle Cloud instances, and secure CI/CD deployments.",
  },
  {
    icon: Cpu,
    title: "AI Agent Routing",
    description:
      "Deploying multi-agent reasoning frameworks (OpenClaw) and connecting raw enterprise data to LLMs.",
  },
  {
    icon: Database,
    title: "Backend Architecture",
    description: "Structuring robust Node.js APIs, zero-downtime routing, and complex NoSQL/SQL database schemas.",
  },
  {
    icon: Code2,
    title: "Frontend Execution",
    description:
      "Building lightning-fast, production-ready Next.js and React interfaces to consume complex server data.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                Jacob Tech Labs
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Stop building with boilerplate.
              <span className="font-serif italic font-normal text-white">
                {" "}
                Start designing with architecture.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm Victor, the Full-Stack Systems Architect behind Jacob Tech Labs. I don't just write React components; I build load-bearing web infrastructure designed to handle real traffic and complex AI routing.
              </p>
              <p>
                My stack is heavy. From deploying decentralized Multi-Agent systems on 24GB Oracle Cloud instances to orchestrating decoupled Node.js APIs and Next.js frontends, my focus is always on the metal beneath the code.
              </p>
              <p>
                Whether you are a founder trying to untangle a messy codebase, or an agency needing a reliable technical partner to offload heavy backend work, I ensure your platform is structurally sound before the first pixel is painted.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Architecture isn't about making it look pretty on a local machine. It's about keeping the servers breathing when the grid goes down and the real traffic hits."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};