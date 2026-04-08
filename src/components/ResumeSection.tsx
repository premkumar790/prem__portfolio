import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Download, FileText } from "lucide-react";
import "./ResumeSection.css";

const ResumeSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="resume">
      <div className="resume__container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="resume__border"
        >
          <div className="resume__card">
            <div className="resume__bg-overlay" />
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
              <div className="resume__icon-wrap">
                <FileText size={40} className="resume__icon" />
              </div>
            </motion.div>
            <h2 className="resume__title">Download My Resume</h2>
            <p className="resume__description">
              Get a detailed overview of my skills, experience, and projects in a beautifully formatted PDF.
            </p>
            <button className="gradient-btn resume__btn">
              <a href="Prem-Resume.pdf" download="Prem-CV.pdf">
              <Download size={20} /> Download Resume
              </a>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
