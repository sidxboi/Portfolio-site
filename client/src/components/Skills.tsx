import { Code, Server, Brain } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "text-[var(--indigo)]",
      skills: [
        { name: "React", percentage: 90 },
        { name: "JavaScript", percentage: 85 },
        { name: "HTML/CSS", percentage: 95 },
      ],
      gradient: "from-[var(--indigo)] to-[var(--purple)]",
    },
    {
      title: "Backend",
      icon: Server,
      color: "text-[var(--emerald)]",
      skills: [
        { name: "Node.js", percentage: 80 },
        { name: "Python", percentage: 88 },
        { name: "MongoDB", percentage: 75 },
      ],
      gradient: "from-[var(--emerald)] to-[var(--indigo)]",
    },
    {
      title: "AI/ML",
      icon: Brain,
      color: "text-[var(--purple)]",
      skills: [
        { name: "TensorFlow", percentage: 70 },
        { name: "PyTorch", percentage: 65 },
        { name: "Pandas", percentage: 80 },
      ],
      gradient: "from-[var(--purple)] to-[var(--indigo)]",
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--emerald)] to-[var(--indigo)] bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title} 
                className="glass-effect p-6 rounded-3xl floating-card"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="text-center mb-6">
                  <IconComponent className={`text-4xl ${category.color} mb-4 mx-auto`} />
                  <h3 className={`text-xl font-bold ${category.color}`}>{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-400">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`skill-bar bg-gradient-to-r ${category.gradient} h-2 rounded-full`}
                          style={{ 
                            width: `${skill.percentage}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.2) + 0.5}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
