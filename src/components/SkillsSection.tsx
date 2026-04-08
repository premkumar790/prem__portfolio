import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Code2, FileJson, Palette, Globe, Server, GitBranch,
  Database, Terminal, Figma, Smartphone, Cpu, Layers,
} from "lucide-react";
import "./SkillsSection.css";

const skills = [
  { name: "HTML5", icon: Globe, color: "skills__icon--primary" },
  { name: "CSS3", icon: Palette, color: "skills__icon--secondary" },
  { name: "JavaScript", icon: FileJson, color: "skills__icon--primary" },
  { name: "React.js", icon: Code2, color: "skills__icon--secondary" },
  { name: "TypeScript", icon: Layers, color: "skills__icon--primary" },
  { name: "Node.js", icon: Server, color: "skills__icon--secondary" },
  { name: "Git & GitHub", icon: GitBranch, color: "skills__icon--primary" },
  // { name: "MongoDB", icon: Database, color: "skills__icon--secondary" },
  { name: "Tailwind CSS", icon: Terminal, color: "skills__icon--primary" },
  // { name: "Figma", icon: Figma, color: "skills__icon--secondary" },
  // { name: "React Native", icon: Smartphone, color: "skills__icon--primary" },
  { name: "Python", icon: Cpu, color: "skills__icon--secondary" },
];

const SkillsSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-heading">Skills</h2>
          <p className="skills__subtitle">Technologies & tools I work with</p>

          <div className="skills__grid">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="skills__card"
              >
                <skill.icon size={32} className={skill.color} />
                <span className="skills__name">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
