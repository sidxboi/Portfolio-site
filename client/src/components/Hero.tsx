export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative hero-bg">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="perspective-1000">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-up floating-card">
            <span className="bg-gradient-to-r from-[var(--indigo)] via-[var(--purple)] to-[var(--emerald)] bg-clip-text text-transparent">
              Sidhant Ranjan Medhi
            </span>
          </h1>
        </div>
        
        <div className="perspective-1000">
          <h2 className="text-2xl md:text-4xl font-light mb-8 text-gray-300 animate-slide-up floating-card" style={{ animationDelay: "0.2s" }}>
            Computer Science & Engineering Student
          </h2>
        </div>
        
        <div className="perspective-1000">
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-gray-400 animate-slide-up floating-card" style={{ animationDelay: "0.4s" }}>
            Building innovative solutions with modern web technologies, machine learning, and creative problem-solving
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <button
            onClick={scrollToProjects}
            className="glass-effect px-8 py-4 rounded-full hover:bg-[var(--indigo)] transition-all duration-300 font-semibold floating-card animate-glow"
          >
            View My Work
          </button>
          <button
            onClick={scrollToContact}
            className="border border-gray-600 px-8 py-4 rounded-full hover:border-[var(--indigo)] hover:text-[var(--indigo)] transition-all duration-300 font-semibold floating-card"
          >
            Get In Touch
          </button>
        </div>
      </div>
      
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 glass-effect rounded-3xl animate-float opacity-30" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 glass-effect rounded-2xl animate-float opacity-40" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-60 right-40 w-16 h-16 glass-effect rounded-xl animate-float opacity-20" style={{ animationDelay: "2s" }}></div>
      </div>
    </section>
  );
}
