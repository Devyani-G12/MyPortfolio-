import {
  Mail,
  ArrowUp,
  BookOpen,
} from "lucide-react";

// GitHub Icon
const GithubIcon = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// LinkedIn Icon
const LinkedinIcon = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

       

        {/* Social */}

        <div className="footer-right">

          <h3>Connect</h3>

          <a href="mailto:gorakshadevyani@gmail.com">
            <Mail size={18} />
            Email
          </a>
 
          <a
            href="https://github.com/Devyani-G12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon size={18} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR-LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon size={18} />
            LinkedIn
          </a>

          <a
            href="https://medium.com/@YOUR_MEDIUM_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BookOpen size={18} />
            Medium
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Devyani Goraksha. All Rights Reserved.
        </p>

        <p>
          Designed & Developed with React and Framer Motion.
        </p>

      </div>

      <a
        href="#home"
        className="scroll-top"
        aria-label="Back to Top"
      >
        <ArrowUp size={20} />
      </a>

    </footer>
  );
}

export default Footer;