import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, Github } from "lucide-react";
import "./ProjectsSection.css";

const projects = [
  // {
  //   title: "AI Chat Application",
  //   description: "Real-time AI-powered chat app with natural language processing, built with React and OpenAI API integration.",
  //   tech: ["React", "Node.js", "OpenAI", "Socket.io"],
  //   github: "#",
  //   live: "#",
  // },
  // {
  //   title: "E-Commerce Dashboard",
  //   description: "Full-featured admin dashboard with analytics, inventory management, and real-time sales tracking.",
  //   tech: ["React", "TypeScript", "Tailwind", "Recharts"],
  //   github: "#",
  //   live: "#",
  // },
  {
    title: "Portfolio Generator",
    description: "Dynamic portfolio builder that creates stunning developer portfolios from JSON configuration files.",
    tech: ["Next.js", "MDX", "Framer Motion"],
    github: "#",
    live: "#",
  },
  // {
  //   title: "Task Management App",
  //   description: "Kanban-style project management tool with drag-and-drop, real-time collaboration, and sprint planning.",
  //   tech: ["React", "Firebase", "DnD Kit"],
  //   github: "#",
  //   live: "#",
  // },
  {
    title: "Weather Forecast App",
    description: "Beautiful weather application with 7-day forecasts, interactive maps, and location-based alerts.",
    tech: ["React", "OpenWeather API", "Mapbox"],
    github: "#",
    live: "#",
  },
  {
    title: "Blog Platform",
    description: "Full-stack blog platform with markdown support, comments, user authentication, and SEO optimization.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="projects" className="projects">
      <div className="projects__blob projects__blob--top" />
      <div className="projects__blob projects__blob--bottom" />

      <div className="projects__container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-heading">Projects</h2>
          <p className="projects__subtitle">Showcasing my recent work and side projects</p>

          <div className="projects__grid">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="projects__card"
              >
                <div className="projects__thumbnail">
                  <span className="projects__thumbnail-text">
                    {p.title.split(" ").map(w => w[0]).join("")}
                  </span>
                </div>
                <h3 className="projects__title">{p.title}</h3>
                <p className="projects__description">{p.description}</p>
                <div className="projects__tags">
                  {p.tech.map((t) => (
                    <span key={t} className="projects__tag">{t}</span>
                  ))}
                </div>
                <div className="projects__links">
                  <a href={p.github} className="projects__link">
                    <Github size={16} /> Code
                  </a>
                  <a href={p.live} className="projects__link">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
