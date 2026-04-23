import { Linkedin, Github, Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-10 border-t border-border bg-secondary/20">
    <div className="container mx-auto px-6 text-center space-y-4">
      <div className="flex justify-center gap-4">
        <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200">
          <Linkedin size={18} />
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200">
          <Github size={18} />
        </a>
      </div>
      <p className="text-muted-foreground text-sm">
        Built with <Heart className="inline text-primary" size={14} /> by Huda
      </p>
      <p className="text-muted-foreground/60 text-xs">© 2026 Huda Fathima. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
