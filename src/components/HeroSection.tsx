
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center pt-20 pb-10 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl">
        <h1 className="text-aqua font-normal mb-5 text-lg md:text-xl">Hi, my name is</h1>
        <h2 className="text-slate-lightest text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          John Developer.
        </h2>
        <h3 className="text-slate text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
          I build things for the web.
        </h3>
        <p className="text-slate max-w-xl text-lg mb-12">
          I'm a software engineer specializing in building exceptional digital experiences. 
          Currently, I'm focused on creating accessible, human-centered products.
        </p>
        <Button asChild className="bg-transparent hover:bg-aqua/10 text-aqua border border-aqua px-7 py-5 text-lg group">
          <a href="#projects">
            Check out my work
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
