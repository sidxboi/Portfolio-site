import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export default function Contact() {

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sidhantranjanmedhi@gmail.com",
      href: "mailto:sidhantranjanmedhi@gmail.com",
      color: "text-[var(--indigo)]",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9954697515",
      href: "tel:+919954697515",
      color: "text-[var(--emerald)]",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Guwahati, Assam, India",
      href: "#",
      color: "text-[var(--purple)]",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/sidxboi",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "http://www.linkedin.com/in/srm7515",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:sidhantranjanmedhi@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--indigo)] to-[var(--emerald)] bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--indigo)] to-[var(--emerald)] mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, innovative projects, or just having a great conversation about technology.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="glass-effect p-6 rounded-3xl floating-card text-center">
                  <div className="w-16 h-16 glass-effect rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className={`${info.color} text-2xl`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-300 mb-2">{info.label}</h3>
                  {info.href === "#" ? (
                    <p className="text-white break-words text-sm md:text-base">{info.value}</p>
                  ) : (
                    <a 
                      href={info.href} 
                      className={`text-white hover:${info.color} transition-colors break-words text-sm md:text-base block`}
                    >
                      {info.value}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Social Links Section */}
          <div className="glass-effect p-8 rounded-3xl floating-card text-center">
            <h3 className="text-2xl font-bold text-[var(--indigo)] mb-6">Connect With Me</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Feel free to reach out through any of these platforms. I'm always open to discussing new opportunities, 
              innovative projects, or just having a great conversation about technology.
            </p>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 glass-effect rounded-full flex items-center justify-center hover:bg-[var(--indigo)] transition-all duration-300 floating-card animate-glow"
                    aria-label={social.label}
                  >
                    <IconComponent className="text-2xl" />
                  </a>
                );
              })}
            </div>
            <div className="flex justify-center space-x-8 mt-6 text-sm text-gray-400">
              {socialLinks.map((social, index) => (
                <span key={index} className="font-medium">{social.label}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
