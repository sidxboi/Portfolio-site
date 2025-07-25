import { Code, Megaphone, GraduationCap } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Nexus Media",
      period: "Jun 2024 - Sep 2024",
      location: "Bangalore, India",
      icon: Code,
      iconColor: "text-[var(--indigo)]",
      description: [
        "Built and maintained responsive websites using HTML, CSS, and JavaScript",
        "Contributed to 5+ client projects with 90% satisfaction rate",
        "Designed and customized websites on Wix platform",
        "Reduced delivery time by 20% through efficient layout structuring",
      ],
      side: "left",
    },
    {
      title: "Youth Influencer",
      company: "Unschool",
      period: "Jun 2023 - Jul 2023",
      location: "Remote",
      icon: Megaphone,
      iconColor: "text-[var(--emerald)]",
      description: [
        "Promoted educational programs through social media and peer networks",
        "Applied digital marketing strategies and personalized messaging",
        "Increased enrolments by 35% within network",
        "Achieved 50+ program referrals, ranking in top 10% of influencers",
      ],
      side: "right",
    },
    {
      title: "B. Tech Computer Science",
      company: "Assam Don Bosco University",
      period: "Aug 2021 - Sep 2025",
      location: "Guwahati, Assam",
      icon: GraduationCap,
      iconColor: "text-[var(--purple)]",
      description: [
        "President of Basic Science Club",
        "Vice President of Debate Club",
        "Focus on software engineering and web development",
      ],
      side: "left",
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--amber)] to-[var(--indigo)] bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--amber)] to-[var(--indigo)] mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[var(--indigo)] to-[var(--emerald)] rounded-full"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div key={index} className="flex flex-col md:flex-row items-center">
                  {exp.side === "left" ? (
                    <>
                      <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                        <div className="glass-effect p-6 rounded-3xl floating-card text-right">
                          <h3 className={`text-2xl font-bold ${exp.iconColor} mb-2`}>{exp.title}</h3>
                          <h4 className="text-lg text-[var(--emerald)] mb-4">{exp.company}</h4>
                          <p className="text-gray-400 text-sm mb-4">{exp.period} • {exp.location}</p>
                          <ul className="text-gray-300 text-sm space-y-2">
                            {exp.description.map((item, i) => (
                              <li key={i}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="relative flex-shrink-0">
                        <div className="w-16 h-16 glass-effect rounded-full flex items-center justify-center floating-card">
                          <IconComponent className={`${exp.iconColor} text-xl`} />
                        </div>
                      </div>
                      <div className="md:w-1/2 md:pl-8"></div>
                    </>
                  ) : (
                    <>
                      <div className="md:w-1/2 md:pr-8"></div>
                      <div className="relative flex-shrink-0">
                        <div className="w-16 h-16 glass-effect rounded-full flex items-center justify-center floating-card">
                          <IconComponent className={`${exp.iconColor} text-xl`} />
                        </div>
                      </div>
                      <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
                        <div className="glass-effect p-6 rounded-3xl floating-card">
                          <h3 className={`text-2xl font-bold ${exp.iconColor} mb-2`}>{exp.title}</h3>
                          <h4 className="text-lg text-[var(--indigo)] mb-4">{exp.company}</h4>
                          <p className="text-gray-400 text-sm mb-4">{exp.period} • {exp.location}</p>
                          <ul className="text-gray-300 text-sm space-y-2">
                            {exp.description.map((item, i) => (
                              <li key={i}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
