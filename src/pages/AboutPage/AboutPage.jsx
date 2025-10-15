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
          quote: "Future Business Leader | BBA & CS at Wilfrid Laurier University",
          content: [
            "My journey into business began at a young age. I was born in India and immigrated to Canada, where I grew up watching my parents dedicate themselves to building their own business during the challenges of COVID 19. Seeing the hard work they put in to go from nothing to something, leaving their previous jobs to follow their vision, inspired me to explore the world of business and problem solving.",
            
            "It was not until high school that I found my path more clearly. I got involved in business related activities, including case competitions and leadership programs, and quickly realized that business strategy and critical thinking were not just academic exercises they were something I genuinely wanted to pursue. My dedication and hard work led me to excel in multiple competitions, including the PC Health Live Case Competition (Semi Finals), LazICC x TD (Finals 4th), BDO Future Leaders Challenge, Embrace The Case (3rd), and Jean Hackathon (Top 5). I also maintained academic excellence as Valedictorian, a four year Honors Roll student, and an Ontario Scholar Award recipient.",
            
            "Choosing to study Business Administration and Computer Science at Wilfrid Laurier University felt like the perfect fit. The program allows me to combine my passion for technology with my interest in business, developing both analytical and strategic skills. Since joining Laurier, I have applied my business knowledge through projects and competitions, sharpening my skills in research, strategy, problem solving, and teamwork.",
            
            "Outside of academics and competitions, I enjoy creative and active pursuits. I play the guitar and ukulele, paint different sceneries, and stay active through swimming, jogging, gym workouts, and recreational sports like badminton, table tennis, tennis, and soccer. These hobbies help me maintain balance, spark creativity, and strengthen my leadership and discipline.",
            
            "I am driven by a lifelong curiosity, a love for problem solving, and a desire to create solutions that can make a meaningful impact. My goal is to continue growing as a business leader, contributing to innovative projects, competing in case competitions, and learning from mentors along the way."
        ],
        }}
        imageSrc={"/images/about.webp"}
      />
    </>
  );
};

export default AboutPage;
