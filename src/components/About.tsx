const About = () => {
  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-muted-foreground">about</h2>
          <div className="h-px bg-border mt-4"></div>
        </div>
        
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          Final-year Cybersecurity Master's student specializing in threat intelligence and SOC operations. Completed 50+ 
          CTF challenges and labs across threat hunting, network analysis, and incident response in under 2 months. Strong 
          technical and cross-functional communicator — delivered security findings to diverse audiences. 
          Expanding into AI/LLM security: prompt injection, OWASP LLM Top 10, garak framework.
        </p>
      </div>
    </section>
  );
};

export default About;
