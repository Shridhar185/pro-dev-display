
import React from "react";
import "../styles/educationSection.css";

const EducationSection = () => {
  const educations = [
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Technology University",
      year: "2017 - 2021",
      description: "Graduated with distinction with a focus on software development and artificial intelligence. Participated in multiple hackathons and coding competitions.",
      grade: "CGPA: 8.9/10"
    },
    {
      degree: "Higher Secondary Education (12th)",
      school: "St. Mary's Higher Secondary School",
      year: "2015 - 2017",
      description: "Focused on Physics, Chemistry, and Mathematics with Computer Science as an elective subject.",
      grade: "Percentage: 92%"
    },
    {
      degree: "Secondary Education (10th)",
      school: "St. Mary's Secondary School",
      year: "2013 - 2015",
      description: "Built a strong foundation in science and mathematics. Participated actively in science exhibitions and programming contests.",
      grade: "Percentage: 94%"
    }
  ];

  return (
    <section id="education" className="section-padding education-section">
      <h2 className="numbered-heading">
        <span>02.</span> Education
      </h2>
      <div className="education-timeline">
        {educations.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-content">
              <h3>{edu.degree}</h3>
              <div className="education-details">
                <h4>{edu.school}</h4>
                <p className="education-year">{edu.year}</p>
              </div>
              <p className="education-description">{edu.description}</p>
              <p className="education-grade">{edu.grade}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
