
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
    // Here you would handle the form submission, like sending an email
  };

  return (
    <section id="contact" className="section-padding max-w-6xl mx-auto">
      <h2 className="heading text-2xl md:text-3xl mb-4 numbered-heading">
        <span>04.</span> Get In Touch
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="text-slate-lightest block mb-2">Name</label>
                <Input 
                  id="name" 
                  type="text" 
                  required 
                  placeholder="John Doe"
                  className="bg-navy-light text-slate-lightest border-navy-lightest focus:border-aqua"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-slate-lightest block mb-2">Email</label>
                <Input 
                  id="email" 
                  type="email" 
                  required 
                  placeholder="john@example.com"
                  className="bg-navy-light text-slate-lightest border-navy-lightest focus:border-aqua"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="text-slate-lightest block mb-2">Subject</label>
              <Input 
                id="subject" 
                type="text" 
                required 
                placeholder="Hello there!"
                className="bg-navy-light text-slate-lightest border-navy-lightest focus:border-aqua"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-slate-lightest block mb-2">Message</label>
              <Textarea 
                id="message" 
                required 
                placeholder="Your message here..."
                className="bg-navy-light min-h-[150px] text-slate-lightest border-navy-lightest focus:border-aqua"
              />
            </div>
            <Button type="submit" className="bg-transparent hover:bg-aqua/10 text-aqua border border-aqua">
              Send Message
            </Button>
          </form>
        </div>
        
        <div className="flex flex-col justify-center">
          <div className="bg-navy-light p-8 rounded-lg border border-navy-lightest">
            <h3 className="text-slate-lightest text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-aqua mr-4 mt-1" size={20} />
                <div>
                  <p className="text-slate-lightest">Email</p>
                  <a href="mailto:john.developer@example.com" className="text-aqua hover:underline">
                    john.developer@example.com
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-slate-lightest mb-4">Social Profiles</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-navy text-slate-light hover:text-aqua transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-navy text-slate-light hover:text-aqua transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-navy text-slate-light hover:text-aqua transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
