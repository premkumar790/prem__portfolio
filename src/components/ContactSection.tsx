import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Send, Linkedin, Github, Instagram } from "lucide-react";
import emailjs from "@emailjs/browser";
import "./ContactSection.css";

const ContactSection = () => {
  const { ref, isInView } = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  const formData = new FormData(formRef.current);
  formData.forEach((value, key) => console.log(key, value));

    emailjs
      .sendForm(
        "service_xe5wuy7",      // Service ID
        "template_56zzvuj",     // Template ID
        formRef.current,        // Form reference
        "KwRvcLzBsqkIvl8YJ"     // Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        () => {
          alert("Failed to send message. Try again!");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Get In Touch</h2>
          <p className="contact__subtitle">
            Have a project in mind? Let's work together!
          </p>

          <div className="contact__grid">
            {/* Form */}
            <div className="contact__form-border">
              <form ref={formRef} onSubmit={handleSubmit} className="contact__form">
                <div>
                  <label className="contact__label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="contact__input"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="contact__label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="contact__input"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="contact__label">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="contact__textarea"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                <button type="submit" className="gradient-btn contact__submit">
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>

            {/* Social */}
            <div className="contact__social">
              <p className="contact__social-text">
                Feel free to reach out through the form or connect with me on
                social media. I'm always open to discussing new projects and
                opportunities.
              </p>
              <div className="contact__social-icons">
                {[
                  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { Icon: Github, href: "https://github.com", label: "GitHub" },
                  {
                    Icon: Instagram,
                    href: "https://instagram.com",
                    label: "Instagram",
                  },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-link"
                    aria-label={label}
                  >
                    <Icon size={28} />
                  </a>
                ))}
              </div>
              <div className="contact__info">
                <p className="contact__info-text">prembermo244@gmail.com</p>
                <p className="contact__info-text">+91 7903351535</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;