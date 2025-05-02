
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding max-w-6xl mx-auto">
      <h2 className="heading text-2xl md:text-3xl mb-12 numbered-heading">
        <span>01.</span> About Me
      </h2>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <div className="space-y-4 text-lg">
            <p>
              Hello! My name is John and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2012 when I decided to try 
              editing custom Tumblr themes — turns out hacking together a custom reblog 
              button taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at 
              <a href="#" className="text-aqua"> an advertising agency</a>,
              <a href="#" className="text-aqua"> a start-up</a>,
              <a href="#" className="text-aqua"> a huge corporation</a>, and
              <a href="#" className="text-aqua"> a student-led design studio</a>. 
              My main focus these days is building accessible, inclusive products and 
              digital experiences at <a href="#" className="text-aqua">Upstatement</a> for 
              a variety of clients.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-1 mt-4">
              {["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS"].map((tech) => (
                <li key={tech} className="flex items-center mb-2">
                  <span className="text-aqua mr-2">▹</span> {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative mx-auto md:mx-0">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-aqua rounded-md opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
            <div className="relative bg-navy-light p-1 rounded-md">
              <div className="relative overflow-hidden rounded-md bg-aqua/10 h-72 w-72">
                <img 
                  src="/avatar.png" 
                  alt="Developer portrait" 
                  className="mix-blend-normal opacity-80 hover:opacity-100 transition-opacity duration-300"
                  width="300"
                  height="300"
                />
                <div className="absolute inset-0 bg-aqua/20 hover:bg-transparent rounded-md transition-colors duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
