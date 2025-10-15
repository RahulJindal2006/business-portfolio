import React from "react";
import Page from "../Page";
import "./DevWorkPage.scss";

const linkStyle = {
  color: "#4fc3f7",           
  textDecoration: "underline",
  transition: "color 0.2s ease-in-out",
};

const hoverColor = "#81d4fa";  

const DevWorkPage = () => {
  return (
    <>
      <Page
        requireDarkRoom={true}
        panelContent={{
          title: "RJ's Digital Playground",
          quote:
            "Building concepts into ideas and turning them into projects, one line at a time.",
          content: [
            <span>
              <a
                href="https://project-park-gallery.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseOver={(e) => (e.target.style.color = hoverColor)}
                onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
              >
                Project Park Gallery
              </a>
              : Project Park Gallery is an interactive 3D portfolio set in a park environment. I designed the scenery and character using Blender, while dynamic features such as jumping mechanics, portfolio showcases, and a custom title screen were programmed in VS Code using JavaScript, HTML, and CSS.
            </span>,

            <span>
              <a
                href="https://www.loom.com/share/e4930b225e004dba9310b4b42389fb06?sid=25c13203-c936-491a-9532-9f8aeefc1d05"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseOver={(e) => (e.target.style.color = hoverColor)}
                onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
              >
                Pocket Weather App Prototype
              </a>
              : My first project, this pocket-sized weather app was built with React, Java, HTML, CSS, and some Python. While it provides a simplified weather dashboard, it delivers essential weather information on the go and laid the foundation for my development journey.
            </span>,

            <span>
              <a
                href="https://www.loom.com/share/71a8b83c281448f8899eb5560a5a7b21?sid=711f46d4-d3db-4edb-ba88-a5f1274db810"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseOver={(e) => (e.target.style.color = hoverColor)}
                onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
              >
                React Weather Dashboard
              </a>
              : This weather application delivers real-time weather data for any location by integrating an API. It provides detailed information including current conditions, air quality ratings (poor, fair, good), and a 5-day forecast. Built with React and Vite using JavaScript, HTML, and CSS, the app features a responsive dashboard and demonstrates CRUD operations with MongoDB to save and manage weather records.
            </span>,

            <span>
              <a
                href="https://github.com/RahulJindal2006/SudokuSolver"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseOver={(e) => (e.target.style.color = hoverColor)}
                onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
              >
                Sudoku Solver
              </a>
              : A series of Sudoku solvers implemented to test efficiency and performance. bt_sudoku_solver uses a simple backtracking algorithm with no optimizations. ac3_sudoku_solver utilizes the AC3 algorithm to improve solving speed by up to 50%. To test the AC3 solver, input your numbers into the provided blank template and call testBoard on the board with the test name and number of iterations. Zeros represent empty spaces.
            </span>,

            <span>
              <a
                href="https://github.com/RahulJindal2006/Connect4"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseOver={(e) => (e.target.style.color = hoverColor)}
                onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
              >
                Connect 4
              </a>
              : This project uses a depth-limited minimax algorithm to determine optimal moves. The algorithm generates a search tree for all possible moves up to a depth of 5, then evaluates the best move before playing. This Connect 4 project combines algorithmic thinking with front-end design to create a playable, visually engaging game that demonstrates both strategy and interactivity.
            </span>,

            "Beyond my computer science projects, I have actively participated in numerous business case competitions to develop valuable skills, including the PC Health Live Case Competition (Semi-Finals), LazICC x TD (Finals), and the BDO Future Leaders Challenge Case Competition",

            <span>
              Certifications Completed:{" "}
              <a
                href="https://www.credly.com/badges/973ff185-e11c-47fc-93fd-4c5fca07b613"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseOver={(e) => (e.target.style.color = hoverColor)}
                onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
              >
                Amazon Web Services Cloud Practitioner (CLF-C02)
              </a>{" "}
              &amp;{" "}
              <a
                href="https://learn.microsoft.com/en-us/users/rahuljindal-1939/credentials/7dfa3a33684ddab5?ref=https%3A%2F%2Fwww.linkedin.com%2F"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseOver={(e) => (e.target.style.color = hoverColor)}
                onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
              >
                Microsoft Certified: Azure Fundamentals (AZ-900)
              </a>
            </span>,
          ],
        }}
        imageSrc={"/images/dev.webp"}
      />
    </>
  );
};

export default DevWorkPage;
