import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Solid background color with gradient top edge */}
      <div className="absolute inset-0 bg-[#0C0D15]" />
      
      {/* Subtle decorative gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-hackathon-blue/5 via-transparent to-transparent opacity-30" />
      
      <div className="relative container mx-auto px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <img 
              src="https://raw.githubusercontent.com/mn-ny/static/refs/heads/main/bolt.png"
              alt="Bolt Logo"
              className="h-8 w-auto"
            />
            <p className="text-white/50 text-sm">
              The world's largest AI hackathon, bringing together innovators to shape the future.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-white font-display text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">About</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Rules</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-white font-display text-lg">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Twitter</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Discord</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-white/50 text-sm">
            © {currentYear} Bolt Innovation Portal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}