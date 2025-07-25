import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
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
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          © 2024 Sidhant Ranjan Medhi. Built with passion and modern web technologies.
        </p>
        <div className="flex justify-center space-x-6 mt-6">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[var(--indigo)] transition-colors"
                aria-label={social.label}
              >
                <IconComponent className="text-xl" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
