import { motion } from "framer-motion";
import { POPULAR_DESTINATIONS } from "@/lib/mock-data";

export function Destinations() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h4 className="text-accent font-bold tracking-wider uppercase text-sm mb-3">Explore the World</h4>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground">
            Popular Destinations
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Discover breathtaking locations loved by millions of travelers worldwide.
          </p>
        </motion.div>

        {/* CSS Grid Masonry-like layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[800px] md:h-[600px]">
          {POPULAR_DESTINATIONS.map((dest, index) => {
            // Compute grid classes based on predefined sizes for a visually appealing layout
            let gridClass = "";
            if (index === 0) gridClass = "md:col-span-2 md:row-span-2"; // Large left
            else if (index === 3 || index === 4) gridClass = "md:col-span-2"; // Wide right
            else gridClass = "md:col-span-1"; // Small right

            return (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer ${gridClass}`}
              >
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-2 transform group-hover:-translate-y-1 transition-transform">
                    {dest.name}
                  </h3>
                  <div className="flex items-center justify-between opacity-90 group-hover:opacity-100 transition-opacity">
                    <p className="text-white/80 font-medium">{dest.properties} Properties</p>
                    <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round" className="text-white"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
