import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap } from "lucide-react";
import "./EducationSection.css";

const education = [
  {
    degree: "BCA (Bachelor Of Computer Application)",
    institution: " Ranchi University ",
    year: "2023 - 2026",
    description: "Specializing in full-stack web development and artificial intelligence. Active member of the coding club and hackathon participant.",
    skills: ["Data Structures", "Algorithms", "Web Development",],
  },
 
];

const EducationSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="education" className="education">
      <div className="education__container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-heading">Education</h2>
          <p className="education__subtitle">Academic background & achievements</p>

          <div className="education__list">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="education__card"
              >
                <div className="education__row">
                  <div className="education__icon-wrap">
                    <GraduationCap size={24} className="education__icon" />
                  </div>
                  <div>
                    <h3 className="education__degree">{edu.degree}</h3>
                    <p className="education__institution">{edu.institution}</p>
                    <p className="education__year">{edu.year}</p>
                    <p className="education__description">{edu.description}</p>
                    <div className="education__tags">
                      {edu.skills.map((s) => (
                        <span key={s} className="education__tag">{s}</span>
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

export default EducationSection;
