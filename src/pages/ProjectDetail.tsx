import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ExternalLink, Github, Calendar, User, CheckCircle2, Target, TrendingUp } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { getProjectById } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Header */}
      <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link to="/projects">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-subtle">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              {project.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-muted/50 text-foreground px-3 py-1"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {project.link && (
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Live Demo
                </Button>
              )}
              {project.github && (
                <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                  <Github className="mr-2 h-5 w-5" />
                  View Code
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Overview Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Timeline</h3>
                  <p className="text-muted-foreground">{project.timeline}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <User className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Role</h3>
                  <p className="text-muted-foreground">{project.role}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Full Description */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              About This Project
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          <Separator className="bg-border/50" />

          {/* Key Features */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Key Features
              </h2>
            </div>
            
            <div className="grid gap-4">
              {project.features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-4 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">{feature}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Separator className="bg-border/50" />

          {/* Technical Challenges */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                Technical Challenges & Solutions
              </h2>
            </div>
            
            <div className="grid gap-4">
              {project.challenges.map((challenge, index) => (
                <Card
                  key={index}
                  className="p-4 bg-card/50 backdrop-blur-sm border-border/50"
                >
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">{challenge}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Separator className="bg-border/50" />

          {/* Outcomes */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Results & Impact
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {project.outcomes.map((outcome, index) => (
                <Card
                  key={index}
                  className="p-5 bg-gradient-subtle border-border/50 hover:shadow-card transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground font-medium">{outcome}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Card className="p-8 bg-gradient-subtle border-border/50 text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Interested in Similar Solutions?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'd love to discuss how I can help bring your project ideas to life with similar expertise and attention to detail.
            </p>
            <Link to="/">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
                Get In Touch
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
