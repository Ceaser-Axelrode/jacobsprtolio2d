import { ArrowUpRight, Github } from 'lucide-react';
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';
const projects = [
  {
    title: 'Swallowed Star (Enterprise Affiliate Platform)',
    description:
      'Architected a 50-page digital affiliate dashboard from the ground up using Next.js and Supabase. Engineered secure user verification, custom payment routing, and optimized database queries to maintain speed under heavy load.',
    image: '/Uprojects/project1.webp',
    tags: [
      'Next.js',
      'Supabase',
      'Tailwind',
      'inngest',
      'shadcn',
      'typescript',
    ],
    link: 'https://swallowed-star-rose.vercel.app/',
    github: 'https://github.com/JacobTechLabs/Swallowed_Star',
  },
  {
    title: 'OpenClaw Multi-Agent AI Framework',
    description:
      'Deployed a localized multi-agent reasoning system. Provisioned a 24GB Oracle Cloud Linux server to handle complex AI routing, bypassing strict networking constraints to keep autonomous agents communicating without dropping context.',
    image: '/Uprojects/project2.webp',
    tags: ['Node  .js', 'Oracle Cloud', 'Linux', 'typescript'],
    link: '#',
    github: '#',
  },
  {
    title: 'Full-Stack Fitness Ecosystem (Web App & API)',
    description:
      'Architected a decoupled fitness platform for local gym deployment. Built a responsive web frontend that consumes a custom, serverless RESTful API (Node.js/Express). Engineered to handle dynamic training logic and track user metrics, with a scalable architecture designed for a future React Native mobile port.',
    image: '/Uprojects/project3.webp',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    link: 'https://bodyz-gym.vercel.app/',
    github: 'https://github.com/JacobTechLabs/Bodyz-Gym.git',
  },
  {
    title: 'JacobTechLabs Fitness API',
    description:
      "A specialized RESTful API engineered to serve as a central intelligence hub for fitness applications.  It provides high-performance access to 5,000+ structured fitness exercises using a local data architecture for maximum speed, low latencyand deployed on custom oracle cloud infrastructure to ensure 99.9% uptime. It features a sophisticated exercise-logic engine that delivers structured workout data alongside a library of optimized instructional GIFs. Designed with a 'Headless' philosophy, allowing it to provide real-time data to web, iOS, Android, and wearable devices simultaneously.",
    image: '/Uprojects/project4.png',
    tags: [
      'Bun',
      'Hono',
      'TypeScript',
      'OpenAPI 3.1',
      'Scalar',
      'Fuse.js',
      'Oracle Cloud',
    ],
    link: 'https://api.jacobtechlabs.xyz/docs',
    github: 'https://github.com/JacobTechLabs/Jacobtechlabs-zeus.git',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {' '}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title} project`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            <a
              href="https://fubara-tech-hub.vercel.app/"
              target="_blank"
              className="text-sm md:text-base hover:underline"
            >
              View All Projects
            </a>
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
