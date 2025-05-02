
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const skills = {
  frontend: [
    { name: "HTML5", level: 90 },
    { name: "CSS3/SASS", level: 85 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 90 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Redux", level: 75 },
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Express", level: 85 },
    { name: "Python", level: 70 },
    { name: "Django", level: 65 },
    { name: "GraphQL", level: 70 },
    { name: "REST API", level: 85 },
    { name: "PostgreSQL", level: 75 },
    { name: "MongoDB", level: 70 },
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "Docker", level: 70 },
    { name: "Jest", level: 75 },
    { name: "CI/CD", level: 65 },
    { name: "Webpack", level: 70 },
    { name: "Figma", level: 60 },
    { name: "AWS", level: 60 },
    { name: "Firebase", level: 75 },
  ],
};

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-slate-lightest">{name}</span>
        <span className="text-aqua">{level}%</span>
      </div>
      <div className="h-2 bg-navy-lightest rounded-full overflow-hidden">
        <div 
          className="h-full bg-aqua rounded-full transition-all duration-1000" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding max-w-6xl mx-auto">
      <h2 className="heading text-2xl md:text-3xl mb-12 numbered-heading">
        <span>03.</span> Skills & Technologies
      </h2>
      
      <Tabs defaultValue="frontend" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8 bg-navy-light">
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="backend">Backend</TabsTrigger>
          <TabsTrigger value="tools">Tools & Others</TabsTrigger>
        </TabsList>
        
        <TabsContent value="frontend" className="animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.frontend.map(skill => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="backend" className="animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.backend.map(skill => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="tools" className="animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.tools.map(skill => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-16">
        <h3 className="text-slate-lightest text-xl mb-6">Other technologies I've worked with:</h3>
        <div className="flex flex-wrap gap-2">
          {["Vue.js", "Angular", "Svelte", "Ruby on Rails", "Laravel", "Gatsby", "Storybook", "WebGL", "Three.js", "TensorFlow.js", "PHP", "jQuery", "Bootstrap"].map(tech => (
            <Badge key={tech} variant="outline" className="bg-navy-light text-slate border-navy-lightest">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
