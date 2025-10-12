import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  delay?: number;
}

const ProjectCard = ({ id, title, description, tags, link, github, delay = 0 }: ProjectCardProps) => {
  return (
    <Link to={`/projects/${id}`}>
      <Card 
        className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-fade-in cursor-pointer h-full"
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="flex gap-2">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors z-10"
                  aria-label="View on GitHub"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors z-10"
                  aria-label="View project"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
        </div>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-muted/50 text-foreground hover:bg-muted transition-colors"
            >
              {tag}
            </Badge>
          ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" />
      </Card>
    </Link>
  );
};

export default ProjectCard;
