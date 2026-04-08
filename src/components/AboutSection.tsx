import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import profileImg from "@/assets/profile.jpg";
import "./AboutSection.css";

const AboutSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="about" className="about">
      <div className="about__container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-heading">About Me</h2>
          <p className="about__subtitle">Get to know the developer behind the code</p>

          <div className="about__grid">
            <div className="about__img-wrap">
              <div className="about__img-container">
                <img src={profileImg} alt="Prem Kumar" loading="lazy" width={320} height={320} className="about__img" />
                <div className="about__img-overlay" />
              </div>
            </div>

            <div className="about__text">
              <p>
                I'm <span className="gradient-text">Prem Kumar</span>, a passionate web developer and final-year 
                Computer Science student with a strong focus on building modern, scalable, and user-friendly web applications.
              </p>
              <p>
                I specialize in front-end development with React.js, crafting responsive interfaces that deliver 
                exceptional user experiences. My toolkit also includes Node.js, TypeScript, and various modern web technologies.
              </p>
              <p>
                Currently in my final year of studies, I'm actively seeking opportunities in the tech industry 
                where I can leverage my skills in full-stack development and AI-powered solutions to build 
                products that make a meaningful impact.
              </p>
              <div className="about__stats">
                {[
                  { label: "Projects", value: "5+" },
                  { label: "Technologies", value: "6+" },
                  { label: "Experience", value: "Fresher" },
                  { label: "Certifications", value: "1+" },
                ].map((s) => (
                  <div key={s.label} className="about__stat-card">
                    <p className="about__stat-value">{s.value}</p>
                    <p className="about__stat-label">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
