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
              My journey so far and an open invitation to drive meaningful business impact.
            </span>
          ),
          content: [
            <p>
              May 2025 - Aug 2025<br />
              <strong>X-Axis Solutions - Project Manager Intern:</strong> Managed and coordinated a 4-member cross-functional team to successfully deliver 3 client-focused software features within a 6-week timeslot. Improved project efficiency by setting up task tracking and monitoring progress, resolving workflow bottlenecks, and ensuring timely delivery for over 100+ customers. Worked closely with stakeholders to define requirements, prioritize tasks, and maintain clear communication throughout the project.
            </p>,

            <p>
              Feb 2022 - Aug 2025<br />
              <strong>Jindal Immigration Inc - Business Analyst Intern:</strong> During the internship, business process data was collected and analyzed to identify bottlenecks, reducing report preparation time significantly and improving workflow efficiency. Dashboards and reports were created to track key performance indicators, increasing the accuracy and timeliness of KPI reporting by 15%. Cross-functional teams were supported with actionable recommendations for process improvements, enabling faster decision-making and greater adoption of suggested solutions across multiple groups.
            </p>,

            <p>
              CS RELATED EXPERIENCE<br />
            </p>,

            <p>
              May 2024 - Aug 2024<br />
              <strong>AK Web Solutions - Web Developer:</strong> Built and maintained dynamic web pages using React.js and Vite, delivering responsive, high-performance client websites. Improved website functionality and user experience while ensuring maintainable, scalable code.
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
