import WorkCard from "./WorkCard";

const Work = () => {
  const projects = [
    {
      title: "DCSync Attack Detection with Wazuh - MITRE ATT&CK T1003.006",
      description: "Comprehensive guide to DCSync attack (MITRE ATT&CK T1003.006). Learn how attackers abuse Active Directory replication to extract credentials and how to detect it using Wazuh SIEM.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=450&fit=crop",
      date: "Jul 24, 2025",
      tags: ["Purple Team", "Active Directory"]
    },
    {
      title: "AS-REP Roasting Detection with Wazuh - MITRE ATT&CK T1558.004",
      description: "Comprehensive guide to AS-REP Roasting attack (MITRE ATT&CK T1558.004). Learn how attackers exploit Kerberos pre-authentication and detect it with Wazuh.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=450&fit=crop",
      date: "Apr 27, 2025",
      tags: ["Purple Team", "Active Directory"]
    },
    {
      title: "Threat Hunting with Elasticsearch & Kibana",
      description: "Advanced threat hunting techniques using Elasticsearch and Kibana. Building detection rules and hunting queries for SOC operations.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=450&fit=crop",
      date: "Mar 15, 2025",
      tags: ["Threat Hunting", "SOC"]
    }
  ];

  return (
    <section className="space-y-8">
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <WorkCard key={index} {...project} />
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 pt-4">
        <button className="px-4 py-2 rounded bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
          ‹
        </button>
        <button className="px-4 py-2 rounded bg-primary text-primary-foreground">
          1
        </button>
        <button className="px-4 py-2 rounded bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
          2
        </button>
        <button className="px-4 py-2 rounded bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
          ›
        </button>
      </div>
    </section>
  );
};

export default Work;
