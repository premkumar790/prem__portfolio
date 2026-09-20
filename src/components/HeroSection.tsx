import { motion } from "framer-motion";
import { Download, FolderOpen } from "lucide-react";
import TypeWriter from "./TypeWriter";
import profileImg from "@/assets/ProfileImage.jpeg";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      {/* Particle-like background elements */}
      <div className="hero__bg">
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
        <div className="hero__blob hero__blob--3" />
      </div>

      <div className="hero__container">
        <div className="hero__grid">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero__content"
          >
            <p className="hero__greeting">Hello, it's me 👋</p>
            <h1 className="hero__name">Prem Kumar</h1>
            <div className="hero__typewriter-wrap">
              <TypeWriter
                texts={[
                  "Aspiring Data Analyst",
                  "Python & SQL Enthusiast",
                  "Power BI Developer",
                  "Data Analytics Enthusiast",
                ]}
              />
            </div>
            <p className="hero__description">
              Aspiring Data Analyst passionate about turning raw data into meaningful insights.
Skilled in Python, SQL, Excel, and Power BI, with a focus on data cleaning, visualization,
and building interactive dashboards that support data-driven decisions.

            </p>
            <div className="hero__buttons">
              <a href="Prem-Resume.pdf" download="Prem_Kumar_CV.pdf">
              <button className="gradient-btn">
                <Download size={18} /> Download CV
              </button>
                              </a>

              <button
                className="neon-outline-btn"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                <FolderOpen size={18} /> View Projects
              </button>

               {/* <button
    className="gradient-btn"
    onClick={() => window.open("https://api.vapi.ai/call/YOUR_AGENT_ID", "_blank")}
  >
    🤖 Call My AI Agent
  </button> */}
            </div>
          </motion.div>

          {/* Right - Profile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero__profile-wrap"
          >
            <div className="hero__profile-outer">
              <div className="hero__glow-border">
                <img
                  src={profileImg}
                  alt="Prem Kumar"
                  width={320}
                  height={320}
                  className="hero__profile-img"
                />
              </div>
              <div className="hero__float-ring" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
