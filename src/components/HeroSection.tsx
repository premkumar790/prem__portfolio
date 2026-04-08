import { motion } from "framer-motion";
import { Download, FolderOpen } from "lucide-react";
import TypeWriter from "./TypeWriter";
import profileImg from "@/assets/profile.jpg";
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
                  "Web Developer",
                  "Front-End Enthusiast",
                  "AI-Powered Builder",
                  "React Specialist",
                ]}
              />
            </div>
            <p className="hero__description">
              Passionate full-stack developer crafting elegant, high-performance web experiences. 
              Specializing in React, modern JavaScript, and AI-powered applications that push 
              the boundaries of what's possible on the web.
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
