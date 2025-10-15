import React from "react";
import Page from "../Page";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <>
      <Page
        requireDarkRoom={true}
        panelContent={{
          title: "ABOUT ME",
          quote: "Software Engineer in the Making | CS & BBA at Wilfrid Laurier University",
          content: [
            "My journey into technology began at a very young age. I was born in India and immigrated to Canada, where I was always fascinated by how things worked and intrigued by technology. Throughout elementary and middle school, I found myself curious about computers and coding, but never had the right opportunities to fully explore this passion.",
            
            "It wasn't until high school that I discovered my path. I enrolled in computer science classes and joined the computer science club, where I quickly realized that coding wasn't just a hobby, it was something I wanted to dedicate myself to. My passion, dedication, and hard work eventually led me to become the president of the computer science club during Grade 11, a role that allowed me to lead projects, mentor peers, and deepen my understanding of software development.",
            
            "Choosing to pursue Computer Science and Business Administration at Wilfrid Laurier University felt like the perfect fit. The program aligned with my interests in technology and problem-solving, while also giving me the opportunity to develop critical business skills. Since joining Laurier, I have worked on multiple projects including a Sudoku solver, a weather application, a miniature Crossy Road portfolio park gallery, and a Connect 4 bot, each project helping me sharpen my coding and analytical skills.",
            
            "Beyond coding, I enjoy exploring other creative and active pursuits. I play the guitar and ukulele, paint various sceneries, and stay active through swimming, jogging, gym workouts, and recreational sports like badminton, table tennis, tennis, and soccer. These hobbies help me maintain balance, spark creativity, and continuously push myself both mentally and physically.",
            
            "I am driven by a lifelong curiosity, a love for problem solving, and a desire to create solutions that can have a meaningful impact. My goal is to continue growing as a software engineer, contributing to innovative projects, and sharing knowledge with others along the way."
        ],
        }}
        imageSrc={"/images/about.webp"}
      />
    </>
  );
};

export default AboutPage;
