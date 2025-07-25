import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Splitwise Clone",
      description: "Full-featured expense-sharing app with real-time collaboration using WebSockets, user authentication, and cloud deployment.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "MongoDB"],
      techColors: ["bg-[var(--indigo)]", "bg-[var(--emerald)]", "bg-[var(--purple)]"],
      githubUrl: "https://github.com/sidxboi/splitpe-version-1",
      liveUrl: "#",
      titleColor: "text-[var(--indigo)]",
    },
    {
      title: "AlgoMine",
      description: "Interactive web tool to visualize data structures and algorithms, enhancing conceptual understanding for students.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["JavaScript", "D3.js", "HTML/CSS"],
      techColors: ["bg-[var(--amber)]", "bg-[var(--indigo)]", "bg-[var(--emerald)]"],
      githubUrl: "https://github.com/sidxboi/AlgoMinev1",
      liveUrl: "#",
      titleColor: "text-[var(--emerald)]",
    },
    {
      title: "MyFinTrackr",
      description: "Full-stack personal finance tracker with income/expense tracking, budgeting, and visual summaries.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Express", "MongoDB"],
      techColors: ["bg-[var(--indigo)]", "bg-[var(--emerald)]", "bg-[var(--purple)]"],
      githubUrl: "https://github.com/sidxboi/MyFinTrackr",
      liveUrl: "#",
      titleColor: "text-[var(--purple)]",
    },
    {
      title: "Recurring Date Picker",
      description: "Modern, customizable recurring date picker component with calendar preview and state management using Zustand.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Next.js", "Tailwind", "Zustand"],
      techColors: ["bg-[var(--indigo)]", "bg-[var(--emerald)]", "bg-[var(--purple)]"],
      githubUrl: "https://github.com/sidxboi/recurring-date-picker",
      liveUrl: "#",
      titleColor: "text-[var(--indigo)]",
    },
    {
      title: "GAN Image Translation",
      description: "CycleGAN and DualGAN models for day-to-night image translation focusing on unpaired image-to-image conversion.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["PyTorch", "TensorFlow", "Python"],
      techColors: ["bg-[var(--purple)]", "bg-[var(--amber)]", "bg-[var(--emerald)]"],
      githubUrl: "https://github.com/sidxboi/Day_to_night_image_translation",
      liveUrl: "#",
      titleColor: "text-[var(--amber)]",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--purple)] to-[var(--emerald)] bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--purple)] to-[var(--emerald)] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {projects.map((project, index) => (
            <div key={project.title} className="project-card glass-effect p-6 rounded-3xl">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              <div className="space-y-4">
                <h3 className={`text-xl font-bold ${project.titleColor}`}>{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={tech}
                      className={`px-3 py-1 ${project.techColors[techIndex]} rounded-full text-xs`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 pt-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[var(--indigo)] hover:text-indigo-300 transition-colors"
                  >
                    <Github className="text-xl" />
                  </a>
                  <a 
                    href={project.liveUrl}
                    className="text-[var(--emerald)] hover:text-emerald-300 transition-colors"
                  >
                    <ExternalLink className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          ))}
          
          {/* View All Projects Card */}
          <div className="project-card glass-effect p-6 rounded-3xl flex items-center justify-center">
            <div className="text-center">
              <Github className="text-4xl text-[var(--indigo)] mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-[var(--indigo)] mb-4">View All Projects</h3>
              <p className="text-gray-300 text-sm mb-6">Explore my complete portfolio on GitHub</p>
              <a 
                href="https://github.com/sidxboi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-effect px-6 py-3 rounded-full hover:bg-[var(--indigo)] transition-all duration-300 font-semibold"
              >
                Visit GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
