import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! I will get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-effect p-6 rounded-3xl floating-card">
              <h3 className="text-2xl font-bold text-[var(--indigo)] mb-6">Let's Connect</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center">
                        <IconComponent className={info.color} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        {info.href === "#" ? (
                          <p className="text-white">{info.value}</p>
                        ) : (
                          <a 
                            href={info.href} 
                            className={`text-white hover:${info.color} transition-colors`}
                          >
                            {info.value}
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h4 className="text-lg font-semibold text-gray-300 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-[var(--indigo)] transition-all duration-300 floating-card"
                        aria-label={social.label}
                      >
                        <IconComponent className="text-xl" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-3xl floating-card" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-[var(--indigo)] focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-[var(--indigo)] focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Project Discussion"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-[var(--indigo)] focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-[var(--indigo)] focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full glass-effect px-8 py-4 rounded-xl hover:bg-[var(--indigo)] transition-all duration-300 font-semibold floating-card animate-glow"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
