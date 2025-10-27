import { Calendar, Tag } from "lucide-react";

interface WorkCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  tags: string[];
}

const WorkCard = ({ title, description, image, date, tags }: WorkCardProps) => {
  return (
    <article className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
      <div className="aspect-video overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors cursor-pointer">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <Tag className="w-4 h-4" />
            {tags.join(", ")}
          </span>
        </div>
      </div>
    </article>
  );
};

export default WorkCard;
