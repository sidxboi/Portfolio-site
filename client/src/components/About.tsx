import { Trophy, Users, Medal, TrendingUp } from "lucide-react";

export default function About() {
  const achievements = [
    {
      icon: Trophy,
      text: "Enhanced web application performance by 30%",
      color: "text-[var(--amber)]",
    },
    {
      icon: Users,
      text: "President of Basic Science Club & VP of Debate Club",
      color: "text-[var(--purple)]",
    },
    {
      icon: Medal,
      text: "District-level silver medal in All-Assam Swimming Championship",
      color: "text-[var(--emerald)]",
    },
    {
      icon: TrendingUp,
      text: "Increased program enrolments by 35% as Youth Influencer",
      color: "text-[var(--indigo)]",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--indigo)] to-[var(--purple)] bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--indigo)] to-[var(--purple)] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-effect p-8 rounded-3xl floating-card">
            <h3 className="text-2xl font-bold mb-6 text-[var(--indigo)]">Background</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Computer Science and Engineering student at Assam Don Bosco University with hands-on experience in web development, digital marketing, and software projects. Through internships at Nexus Media and Unschool, I've built strong skills in frontend development, machine learning, and algorithm visualization.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With a solid grasp of modern technologies and programming languages, I strive to develop impactful and innovative solutions in the tech space. I've successfully completed 10+ freelance projects with a 95% customer satisfaction rate.
            </p>
          </div>
          
          <div className="glass-effect p-8 rounded-3xl floating-card" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-6 text-[var(--emerald)]">Key Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <IconComponent className={`${achievement.color} text-xl`} />
                    <span className="text-gray-300">{achievement.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
