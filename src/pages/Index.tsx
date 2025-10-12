import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, Code2, Sparkles, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import heroBg from "@/assets/hero-bg.jpg";
import { projects } from "@/data/projects";

const Index = () => {
  const featuredProjects = projects.slice(0, 4);

  const skills = [
    "Python", "JavaScript", "TypeScript", "React", "Node.js",
    "TensorFlow", "PyTorch", "Machine Learning", "Deep Learning",
    "Natural Language Processing", "Computer Vision", "Data Analytics",
    "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "AWS",
    "UI/UX Design", "Figma", "Web Development", "API Design"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-subtle" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary animate-glow" />
            <span className="text-sm text-muted-foreground">Available for new opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
            Software Engineer &<br />AI Specialist
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "100ms" }}>
            Crafting intelligent solutions with 6+ years of experience in software engineering, 
            UX design, and AI-powered applications.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                <Code2 className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </Link>
          </div>
          
          <div className="flex gap-6 justify-center mt-12 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1">
            <div className="w-1.5 h-3 bg-primary rounded-full mx-auto animate-glow" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a Master's degree in Data Analytics and a major in Software Engineering, 
                I specialize in building AI-powered applications that solve real-world problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans machine learning, full-stack development, and UX design, 
                allowing me to create solutions that are both technically robust and user-friendly.
              </p>
            </div>
            
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Experience</h3>
                    <p className="text-muted-foreground">6+ years in software engineering, UX design, and web development</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Sparkles className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <p className="text-muted-foreground">Master's in Data Analytics with major in Software Engineering</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Code2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Specialization</h3>
                    <p className="text-muted-foreground">AI/ML, Full-Stack Development, and User Experience Design</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of AI and software projects showcasing innovation and technical excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                {...project}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-xl text-muted-foreground">
              Expertise across the full stack and AI/ML ecosystem
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <SkillBadge
                key={skill}
                skill={skill}
                delay={index * 50}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
            <Mail className="mr-2 h-5 w-5" />
            Start a Conversation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground">
            © 2025 All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
