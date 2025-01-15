import React from "react";
import "../styles/skills.css";

const Skills: React.FC = () => {
  const skills = ["Python","Git",'C/Cpp',"HTML", "CSS","React", "TypeScript", "Node.js"];

  return (
    <section id="skills" className="skills-section" data-aos="fade-up">
      <h2>My Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
