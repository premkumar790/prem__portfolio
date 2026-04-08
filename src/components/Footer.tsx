import { Linkedin, Github, Instagram, Heart } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <span className="footer__logo">{"<PK />"}</span>

          <div className="footer__socials">
            {[
              { Icon: Linkedin, href: "https://linkedin.com" },
              { Icon: Github, href: "https://github.com" },
              { Icon: Instagram, href: "https://instagram.com" },
            ].map(({ Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <p className="footer__copyright">
            ©Built with 2025 Prem Kumar. 
          </p>
        </div>
        <div className="footer__divider" />
      </div>
    </footer>
  );
};

export default Footer;
