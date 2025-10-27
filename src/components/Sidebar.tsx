import { Home, FolderOpen, Tags, Archive, User, Github, Linkedin, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";
import portraitImage from "@/assets/portrait.png";

const Sidebar = () => {
  const navItems = [
    { name: "HOME", icon: Home, path: "/" },
    { name: "CATEGORIES", icon: FolderOpen, path: "/categories" },
    { name: "TAGS", icon: Tags, path: "/tags" },
    { name: "ARCHIVES", icon: Archive, path: "/archives" },
    { name: "ABOUT", icon: User, path: "/about" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border flex flex-col">
      {/* Profile Section */}
      <div className="p-8 text-center">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/30">
          <img 
            src={portraitImage} 
            alt="vi5hnu 235p4n" 
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">vi5hnu 235p4n</h2>
        <p className="text-sm text-muted-foreground italic">
          Cyber Attacks under Lenses<br />and defense engineering
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="p-6 flex items-center justify-center gap-4 border-t border-border">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:contact@example.com"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
