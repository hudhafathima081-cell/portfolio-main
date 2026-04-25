import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import emailjs from "@emailjs/browser";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "9633944714", href: "tel:9633944714" },
  {
    icon: Mail,
    label: "Email",
    value: "hudhafathima081@gmail.com",
    href: "mailto:hudhafathima081@gmail.com",
  },
  { icon: MapPin, label: "Address", value: "Kasaragod, Kerala" },
];

const socialLinks = [
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/919633944714",
    bg: "bg-green-500",
  },
  {
    name: "Instagram",
    icon: Instagram,
    link: "#",
    bg: "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500",
  },
  {
    name: "Facebook",
    icon: Facebook,
    link: "https://facebook.com/",
    bg: "bg-blue-600",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/hudha-fathima-a31a25405/",
    bg: "bg-blue-500",
  },
  {
    name: "GitHub",
    icon: Github,
    link: "https://github.com/hudhafathima081-cell",
    bg: "bg-black",
  },
];

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields ⚠️");
      return;
    }

    emailjs
      .send(
        "service_7j0m9cv",
        "template_oeklz2k",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        {
          publicKey: "z-hNHY449NjcPojjJ",
        }
      )
      .then(() => {
        alert("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message ❌");
      });
  };

  return (
    <section
  id="contact"
  className="min-h-screen py-20 
  bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] 
  transition-all duration-700"
>
      <div className="w-full px-6 md:px-12 lg:px-20">
        <SectionHeading title="Contact" subtitle="Let's get in touch" />

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

          {/* LEFT SIDE */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-center gap-4 bg-gradient-card rounded-xl p-5 shadow-card border border-border/50"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                    <info.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a href={info.href} className="text-sm hover:text-primary">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* 🔥 SOCIAL ICONS */}
            <div className="flex gap-5 pt-6 justify-center">
              {socialLinks.map((social, index) => (
                <div key={index} className="relative group">

                  {/* Tooltip */}
                  <span className="absolute -top-9 left-1/2 -translate-x-1/2 
                  bg-black text-white text-xs px-3 py-1 rounded-md 
                  opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 
                  transition-all duration-300 whitespace-nowrap">
                    {social.name}
                  </span>

                  {/* Icon Box */}
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 flex items-center justify-center rounded-2xl 
                    text-white shadow-lg transition-all duration-300 
                    hover:scale-110 hover:-translate-y-1 ${social.bg}`}
                  >
                    {social.icon === "whatsapp" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="white"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.52 3.48A11.8 11.8 0 0012.01 0C5.37 0 .02 5.36.02 12c0 2.11.55 4.16 1.6 5.97L0 24l6.23-1.63A11.94 11.94 0 0012 24c6.64 0 12-5.36 12-12 0-3.2-1.25-6.21-3.48-8.52z"/>
                      </svg>
                    ) : (
                      <social.icon size={24} />
                    )}
                  </a>
                </div>
              ))}
            </div>

          </AnimatedSection>

          {/* RIGHT SIDE FORM */}
          <AnimatedSection delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-card rounded-xl p-8 shadow-card border border-border/50 space-y-5"
            >
              <input
                required
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                
  className="w-full px-4 py-3 rounded-xl 
bg-white/5 backdrop-blur-md 
border border-white/10 
text-white placeholder:text-gray-400 
focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <input
                required
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
               className="w-full px-4 py-3 rounded-xl 
bg-white/5 backdrop-blur-md 
border border-white/10 
text-white placeholder:text-gray-400 
focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <textarea
                required
                rows={4}
                placeholder="Your message..."
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl 
bg-white/5 backdrop-blur-md 
border border-white/10 
text-white placeholder:text-gray-400 
resize-none
focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <button className="w-full flex items-center justify-center gap-2 
px-6 py-3 rounded-xl 
bg-gradient-to-r from-yellow-400 to-yellow-500 
text-black font-semibold 
hover:scale-105 transition-all duration-300">
                <Send size={16} /> Send Message
              </button>
            </form>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;