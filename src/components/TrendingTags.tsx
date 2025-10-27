import { Badge } from "@/components/ui/badge";

const TrendingTags = () => {
  const tags = [
    "cybersecurity",
    "active directory",
    "penetration testing",
    "soc",
    "docker",
    "elasticsearch",
    "llm",
    "mcp",
    "mitre att&ck",
    "purple team"
  ];

  return (
    <aside className="sticky top-6">
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-xl font-bold text-foreground mb-4">Trending Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default TrendingTags;
