import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Briefcase } from "lucide-react";
import "./ExperienceSection.css";

const experiences = [
  {
    title: "Frontend Developer Intern",
    year: "2025 ",
    description: "Building responsive web applications using React and TypeScript. Collaborating with the design team to implement pixel-perfect UIs and optimize performance.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Git"],
  },
 {
  title: "Freelance Web Developer",
  company: "Self-Employed",
  year: "2024 - Present",
  description:
    "Designed and built modern, responsive websites for clients. Recently developed a full-featured News Website with dynamic categories, API integration, search, and trending sections. Focused on clean UI, performance optimization, and mobile-friendly layouts.",
  tech: ["React", "Tailwind", "API Integration", "JavaScript"],
},
  {
  title: "Open Source Contributor",
  company: "GitHub Community",
  year: "2023 - 2024",
  description:
    "Contributed to small open-source projects by fixing minor bugs, improving UI components, and helping beginners in discussions. Learned version control, workflow, and code quality practices.",
  tech: ["JavaScript", "Git", "Open Source"],
},
 {
  title: "Portfolio Website",
  year: "2024",
  description:
    "Designed and developed a fully responsive personal portfolio website to showcase projects, experience, and skills. Built with reusable components, animations, and modern UI/UX patterns. Includes smooth navigation, project showcases, and optimized loading for a better user experience.",
  tech: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
  link: "https://your-portfolio-link.com"
},
];

const ExperienceSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-heading">Experience</h2>
          <p className="experience__subtitle">My professional journey so far</p>

          <div className="experience__timeline">
            {/* Timeline line */}
            <div className="experience__line" />

            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`experience__item ${i % 2 !== 0 ? "experience__item--reverse" : ""}`}
              >
                {/* Dot */}
                <div className="experience__dot" />

                <div className="experience__card-wrap">
                  <div className="experience__card">
                    <div className="experience__header">
                      <Briefcase size={16} className="experience__icon" />
                      <span className="experience__year">{exp.year}</span>
                    </div>
                    <h3 className="experience__title">{exp.title}</h3>
                    <p className="experience__company">{exp.company}</p>
                    <p className="experience__description">{exp.description}</p>
                    <div className="experience__tags">
                      {exp.tech.map((t) => (
                        <span key={t} className="experience__tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
