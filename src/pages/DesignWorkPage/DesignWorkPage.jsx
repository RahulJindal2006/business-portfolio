import React from "react";
import Page from "../Page";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const DesignWorkPage = () => {
  // Inline style objects
  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "white",
    transition: "transform 0.2s, boxShadow 0.2s",
    cursor: "pointer",
  };

  const linkedinStyle = {
    ...buttonStyle,
    backgroundColor: "#0077b5",
    marginRight: "1rem",
  };

  const githubStyle = {
    ...buttonStyle,
    backgroundColor: "#24292f",
  };

  const hoverEffect = (e) => {
    e.currentTarget.style.transform = "translateY(-3px)";
    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
  };

  const removeHover = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <>
      <Page
        requireDarkRoom={false}
        panelContent={{
          title: "WORK EXPERIENCE | GET IN TOUCH",
          quote: (
            <span style={{ color: "#3b3332" }}>
              My journey so far and an open door to collaborate.
            </span>
          ),
          content: [
            <p>
              May 2025 - Aug 2025<br />
              <strong>X-Axis Solutions - Product Manager & Software Engineer Intern:</strong> Developed responsive, user-friendly websites using React.js, HTML, and CSS, improving user engagement and functionality for client platforms. Integrated 3 external APIs and collaborated with a 4-member cross-functional team to deliver 3 user-focused software features in a 6-week sprint, while troubleshooting bugs to ensure seamless functionality for 100+ users.
            </p>,

            <p>
              May 2024 - Aug 2024<br />
              <strong>AK Web Solutions - Web Developer:</strong> Built and maintained dynamic web pages using React.js and Vite, delivering responsive, high-performance client websites. Improved website functionality and user experience while ensuring maintainable, scalable code.
            </p>,

            <p>
              Feb 2022 - Aug 2025<br />
              <strong>Jindal Immigration Inc - Entry Level Developer & Business Assistant:</strong> Resolved 15 front-end bugs and enhanced website design, increasing code quality by 18%. Optimized navigation and business workflows, resulting in a 14% boost in user engagement and a 10% improvement in conversion rates, while implementing scalable technical solutions aligned with business objectives.
            </p>,

            <p>
              Sep 2022 - May 2024<br />
              <strong>Coding Association - President:</strong> Led club operations and mentored 30+ members in coding projects, enhancing their technical skills and confidence. Collaborated with executives to improve operational efficiency by 25% and secured partnerships with administration and sponsors, increasing club visibility and support for major events.
            </p>,

            <div
              style={{
                display: "flex",
                marginTop: "1.5rem",
              }}
            >
              <a
                href="https://www.linkedin.com/in/rahuljindal-cs/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkedinStyle}
                onMouseEnter={hoverEffect}
                onMouseLeave={removeHover}
              >
                <FaLinkedin size={24} style={{ marginRight: "0.5rem" }} />
                LinkedIn
              </a>

              <a
                href="https://github.com/RahulJindal2006"
                target="_blank"
                rel="noopener noreferrer"
                style={githubStyle}
                onMouseEnter={hoverEffect}
                onMouseLeave={removeHover}
              >
                <FaGithub size={24} style={{ marginRight: "0.5rem" }} />
                GitHub
              </a>
            </div>,
          ],
        }}
        imageSrc={"/images/design.webp"}
      />
    </>
  );
};

export default DesignWorkPage;
