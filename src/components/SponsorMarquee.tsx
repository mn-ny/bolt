
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface SponsorProps {
  name: string;
  logo: string;
}

const sponsors: SponsorProps[] = [
  {
    name: "Algorand",
    logo: "https://raw.githubusercontent.com/mn-ny/static/refs/heads/main/algorand.png"
  },
  {
    name: "Anthropic",
    logo: "https://raw.githubusercontent.com/mn-ny/static/refs/heads/main/anthropic.png"
  },
  {
    name: "Cloudflare",
    logo: "https://raw.githubusercontent.com/mn-ny/static/refs/heads/main/cloudflare.png"
  },
  {
    name: "Exa",
    logo: "https://raw.githubusercontent.com/mn-ny/static/refs/heads/main/exa.png"
  },
  {
    name: "HSR",
    logo: "https://raw.githubusercontent.com/mn-ny/static/refs/heads/main/hsr.png"
  },
  {
    name: "Loops",
    logo: "https://raw.githubusercontent.com/mn-ny/static/refs/heads/main/loops.png"
  },
  {
    name: "Netlify",
    logo: "https://raw.githubusercontent.com/mn-ny/static/refs/heads/main/netlify.png"
  },
  {
    name: "Sentry",
    logo: "https://raw.githubusercontent.com/mn-ny/static/refs/heads/main/sentry.png"
  },
  {
    name: "Supabase",
    logo: "https://raw.githubusercontent.com/mn-ny/static/refs/heads/main/supabase.png"
  }
];

export default function SponsorMarquee() {
  const [width, setWidth] = useState(0);
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (marqueeRef.current) {
      setWidth(marqueeRef.current.scrollWidth - marqueeRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="relative py-16 overflow-hidden bg-hackathon-dark">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-hackathon-dark via-hackathon-blue/5 to-hackathon-dark z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Our Sponsors
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Leading companies supporting innovation and creativity
          </p>
        </motion.div>
        
        <div className="relative overflow-hidden py-4">
          <motion.div
            ref={marqueeRef}
            className="flex space-x-16"
            animate={{
              x: [-width/2, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-transparent px-8 py-4 flex items-center justify-center min-w-[180px]"
              >
                <img 
                  src={sponsor.logo} 
                  alt={`${sponsor.name} logo`} 
                  className="h-10 object-contain filter invert brightness-0"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
