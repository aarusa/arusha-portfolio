import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  skill: string;
  delay?: number;
}

const SkillBadge = ({ skill, delay = 0 }: SkillBadgeProps) => {
  return (
    <Badge
      variant="outline"
      className="px-4 py-2 text-sm bg-card/50 backdrop-blur-sm border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {skill}
    </Badge>
  );
};

export default SkillBadge;
