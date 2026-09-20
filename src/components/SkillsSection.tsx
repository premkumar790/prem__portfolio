import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
   Code2,
  Database,
  Calculator,
  FileSpreadsheet,
  BarChart3,
  LineChart,
  Filter,
  PieChart,
  GitBranch,
} from "lucide-react";
import "./SkillsSection.css";


  const skills = [
{ name: "Python", icon: Code2, color: "skills__icon--primary" },
{ name: "Pandas", icon: Database, color: "skills__icon--secondary" },
{ name: "NumPy", icon: Calculator, color: "skills__icon--primary" },
{ name: "SQL", icon: Database, color: "skills__icon--secondary" },
{ name: "Excel", icon: FileSpreadsheet, color: "skills__icon--primary" },
{ name: "Power BI", icon: BarChart3, color: "skills__icon--secondary" },
{ name: "Matplotlib", icon: LineChart, color: "skills__icon--primary" },
{ name: "Data Cleaning", icon: Filter, color: "skills__icon--secondary" },
{ name: "Data Visualization", icon: PieChart, color: "skills__icon--primary" },
{ name: "Git & GitHub", icon: GitBranch, color: "skills__icon--secondary" },
];


const SkillsSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-heading">Skills</h2>
          <p className="skills__subtitle">Technologies and tools I use to analyze data and uncover meaningful insights
</p>

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
