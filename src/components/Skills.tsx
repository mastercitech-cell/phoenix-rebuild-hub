const Skills = () => {
  const skills = [
    {
      title: "Front-End",
      experience: "80+ Hours Experience"
    },
    {
      title: "Python",
      experience: "4 Years Experience"
    },
    {
      title: "Machine Learning",
      experience: "120+ Hours Experience"
    }
  ];

  return (
    <section id="work" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">{skill.title}</h3>
              <p className="text-sm text-muted-foreground border-b border-border pb-2 inline-block">
                {skill.experience}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
