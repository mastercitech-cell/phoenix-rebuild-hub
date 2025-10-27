import portraitImage from "@/assets/portrait.png";

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-muted-foreground text-lg">Hello, I'm vi5hnu 235p4n,</p>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            CyberSec
            <br />
            Folk
          </h1>
          <a 
            href="#contact" 
            className="inline-block text-lg font-semibold text-foreground border-b-2 border-foreground hover:text-primary hover:border-primary transition-colors pb-1"
          >
            Contact Me
          </a>
        </div>
        
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 rounded-3xl overflow-hidden bg-primary/30">
              <img 
                src={portraitImage} 
                alt="vi5hnu 235p4n - CyberSec Folk" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
