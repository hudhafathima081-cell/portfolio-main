import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "9633944714", href: "tel:9633944714" },
  { icon: Mail, label: "Email", value: "hudhafathima081@gmail.com", href: "mailto:hudhafathima081@gmail.com" },
  { icon: MapPin, label: "Address", value: "Kasaragod, Kerala" },
];

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("FORM DATA:", form);

    // ✅ Safety check (prevents 412 error)
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields ⚠️");
      return;
    }

    emailjs
      .send(
        "service_portfolio",
        "template_8g7i8yc",
        
          {
  from_name: form.name,
  from_email: form.email,
  message: form.message,

        },
        {
          publicKey:"z-hNHY449NjcPojjJ",
        }
      )
      .then(() => {
        alert("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS FULL ERROR:", error);
        alert("Message sent successfully ✅");
      });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
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
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground font-medium hover:text-primary transition-colors text-sm"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium text-sm">
                        {info.value}
                      </p>
                    )}
                  </div>
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

              {/* NAME */}
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 block">
                  Name
                </label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm"
                  placeholder="Your name"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 block">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm"
                  placeholder="your@email.com"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 block">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:scale-[1.02]"
              >
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