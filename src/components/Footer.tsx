import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-10 border-t border-border bg-secondary/20">
    <div className="container mx-auto px-6 text-center space-y-4">

      {/* ✅ REMOVED SOCIAL ICONS */}

      <p className="text-muted-foreground text-sm">
        Built with <Heart className="inline text-primary" size={14} /> by Huda
      </p>

      <p className="text-muted-foreground/60 text-xs">
        ©️ 2026 Huda Fathima. All rights reserved.
      </p>

    </div>
  </footer>
);

export default Footer;