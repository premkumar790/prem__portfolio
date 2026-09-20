import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import profileImg from "@/assets/ProfileImage.jpeg";
import "./AboutSection.css";

const AboutSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="about" className="about">
      <div className="about__container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-heading">About Me</h2>
          <p className="about__subtitle">Get to know the Data Analyst turning data into meaningful insights</p>

          <div className="about__grid">
            <div className="about__img-wrap">
              <div className="about__img-container">
                <img src={profileImg} alt="Prem Kumar" loading="lazy" width={320} height={320} className="about__img" />
                <div className="about__img-overlay" />
              </div>
            </div>

            <div className="about__text">
              <p>
                I'm <span className="gradient-text">Prem Kumar</span>, A passionate Data Analyst and final-year BCA student with a strong focus on turning raw data into meaningful insights through data cleaning, analysis, visualization, and business-focused reporting.

              </p>
              <p>
                I specialize in data analysis using Python, Pandas, NumPy, SQL, Excel, and Power BI, working with raw datasets to clean, explore, analyze, and visualize data. I focus on finding meaningful patterns, generating actionable insights, and presenting data through clear and interactive dashboards.

              </p>
              <p>
               Currently in my final year of BCA, I’m actively seeking opportunities as a Data Analyst where I can apply my skills in Python, SQL, Excel, and Power BI to analyze data, uncover meaningful insights, and support data-driven business decisions. I’m eager to learn, grow, and contribute to real-world data projects.

              </p>
              <div className="about__stats">
                {[
                  { label: "Projects", value: "5+" },
                  { label: "Technologies", value: "6+" },
                  { label: "Experience", value: "Fresher" },
                  { label: "Certifications", value: "3+" },
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
