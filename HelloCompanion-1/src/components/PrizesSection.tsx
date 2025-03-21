import { motion } from "framer-motion";

export default function PrizesSection() {
  const prizes = [
    {
      name: "Grand Prize",
      amount: "$100k",
      description: "For the most innovative overall solution"
    },
    {
      name: "AI Innovation",
      amount: "$500k",
      description: "For exceptional AI implementation"
    },
    {
      name: "Social Impact",
      amount: "$400k",
      description: "For solutions with significant social impact"
    }
  ];

  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Solid background color as requested */}
      <div className="absolute inset-0 bg-[#0A0A0F]" />

      <div className="relative container mx-auto px-6 z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl md:text-7xl font-display text-white mb-6 relative">
              $1,000,000+ <span className="font-display italic font-light">Prizes</span>
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl -z-10" />
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-hackathon-blue/20 to-transparent rounded-xl blur-xl group-hover:opacity-100 transition-opacity duration-300 opacity-0" />
              <div className="relative p-8 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm hover:border-white/20 transition-colors duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                <h3 className="text-2xl font-display text-white mb-2">{prize.name}</h3>
                <div className="text-6xl font-display text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">{prize.amount}</div>
                <p className="text-white/70">{prize.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-14 text-center">
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-[#0A0A0F] bg-white hover:bg-white/90 rounded-full transition-colors duration-300 shadow-lg hover:shadow-white/20"
          >
            View All Prizes
          </a>
        </div>
      </div>
    </section>
  );
}