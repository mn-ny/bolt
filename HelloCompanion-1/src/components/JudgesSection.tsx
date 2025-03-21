import { motion } from "framer-motion";

export default function JudgesSection() {
  const judges = [
    {
      name: "Pieter Levels",
      role: "@levelsio",
      company: "Founder of Nomad List",
      image: "https://pbs.twimg.com/profile_images/1589756412078555136/YlXMBzhp_400x400.jpg"
    },
    {
      name: "Logan Kilpatrick",
      role: "@OfficialLoganK",
      company: "OpenAI",
      image: "https://pbs.twimg.com/profile_images/1379817647139737600/YHL9uBk0_400x400.jpg"
    },
    {
      name: "Sara Du",
      role: "@saranormous",
      company: "CEO of Alloy",
      image: "https://pbs.twimg.com/profile_images/1689443134919327744/geqEJeF8_400x400.jpg"
    },
    {
      name: "Theo Browne",
      role: "@theo",
      company: "Founder of Ping Labs",
      image: "https://pbs.twimg.com/profile_images/1799982162831396865/Fnol01I1_400x400.jpg"
    },
    {
      name: "Evan You",
      role: "@youyuxi",
      company: "Creator of Vue.js",
      image: "https://pbs.twimg.com/profile_images/1856284397072478208/hSEXLkPN_400x400.jpg"
    },
    {
      name: "Krishna Panyam",
      role: "@thisiskp_",
      company: "Co-founder of Multiply.ai",
      image: "https://pbs.twimg.com/profile_images/1288449070344937473/fKlvccnM_400x400.jpg"
    },
    {
      name: "Alex Albert",
      role: "@alexalbert__",
      company: "Co-founder of StackBlitz",
      image: "https://pbs.twimg.com/profile_images/1856486626072915968/JEQpB9CW_400x400.jpg"
    },
    {
      name: "Ben Tossell",
      role: "@bentossell",
      company: "Founder of Makerpad",
      image: "https://pbs.twimg.com/profile_images/1878086921726943233/vOx1kjeP_400x400.jpg"
    },
    {
      name: "Ricardo Cabello",
      role: "@mrdoob",
      company: "Creator of Three.js",
      image: "https://pbs.twimg.com/profile_images/1619147369999917056/5jd5MK9C_400x400.jpg"
    },
    {
      name: "Andrej Karpathy",
      role: "@karpathy",
      company: "AI Researcher",
      image: "https://pbs.twimg.com/profile_images/1296667294148382721/9Pr6XrPB_400x400.jpg"
    },
    {
      name: "Tim Soret",
      role: "@timsoret",
      company: "Creator of The Last Night",
      image: "https://pbs.twimg.com/profile_images/1882867567099809793/qTScdAu-_400x400.jpg"
    }
  ];

  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Layered Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-hackathon-dark/95 to-hackathon-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-hackathon-blue/10 via-transparent to-transparent opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />

      <div className="relative container mx-auto px-6 z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl md:text-7xl font-display text-white italic font-light mb-6 relative">
              Judges
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl -z-10" />
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {judges.map((judge, index) => (
            <motion.div
              key={judge.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-hackathon-blue/10 to-transparent rounded-xl blur-xl group-hover:opacity-70 transition-opacity duration-300 opacity-0" />
              <div className="relative rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm hover:border-white/20 transition-colors duration-300 p-4 flex items-center">
                <div className="shrink-0 mr-4">
                  <img 
                    src={judge.image} 
                    alt={judge.name}
                    className="w-16 h-16 rounded-full object-cover border border-white/10"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-base sm:text-lg font-display text-white">{judge.name}</h3>
                  <p className="text-white/70 text-xs sm:text-sm mb-1">{judge.role}</p>
                  <p className="text-white/50 text-xs sm:text-sm">{judge.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}