import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [activeTab, setActiveTab] = useState("flights");

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-32 overflow-hidden">
      {/* Background Image with Dark Wash */}
      <div className="absolute inset-0 z-0">
        {/* Unsplash beautiful water villa sunset */}
        <img 
          src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=2000" 
          alt="Beautiful coastal travel destination" 
          className="w-full h-full object-cover scale-105 transform animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        
        {/* Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="inline-block py-1.5 px-4 rounded-full glass-dark text-white text-sm font-medium mb-6 backdrop-blur-md">
            ✨ Discover the extraordinary
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-white mb-6 leading-tight drop-shadow-lg">
            Travel the World at <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-teal-300 to-emerald-200">
              Unbeatable Prices
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium drop-shadow-md">
            Curated luxury experiences, breathtaking destinations, and memories that last a lifetime—all tailored perfectly for you.
          </p>
        </motion.div>

        {/* Search Widget Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-4xl"
        >
          {/* Tabs */}
          <div className="flex items-center gap-1 mb-2 px-4">
            {['flights', 'hotels', 'cars', 'tours'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-t-xl font-medium text-sm transition-all ${
                  activeTab === tab 
                    ? 'bg-white text-foreground' 
                    : 'bg-black/30 backdrop-blur-md text-white hover:bg-black/50'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Search Form (Glassmorphism) */}
          <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-2xl flex flex-col md:flex-row gap-3 items-center w-full">
            
            {/* Location Input */}
            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-muted/50 rounded-xl w-full border border-transparent hover:border-border transition-colors group">
              <MapPin className="text-primary w-5 h-5 group-hover:scale-110 transition-transform" />
              <div className="flex flex-col w-full">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Location</span>
                <input 
                  type="text" 
                  placeholder="Where are you going?" 
                  className="bg-transparent border-none p-0 focus:ring-0 text-sm md:text-base text-foreground placeholder:text-foreground/40 font-medium outline-none"
                />
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-border/60"></div>

            {/* Date Input */}
            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-muted/50 rounded-xl w-full border border-transparent hover:border-border transition-colors group">
              <Calendar className="text-primary w-5 h-5 group-hover:scale-110 transition-transform" />
              <div className="flex flex-col w-full">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Dates</span>
                <input 
                  type="text" 
                  placeholder="Add dates" 
                  className="bg-transparent border-none p-0 focus:ring-0 text-sm md:text-base text-foreground placeholder:text-foreground/40 font-medium outline-none cursor-pointer"
                  readOnly
                />
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-border/60"></div>

            {/* Guests Input */}
            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-muted/50 rounded-xl w-full border border-transparent hover:border-border transition-colors group">
              <Users className="text-primary w-5 h-5 group-hover:scale-110 transition-transform" />
              <div className="flex flex-col w-full">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Guests</span>
                <input 
                  type="text" 
                  placeholder="Add guests" 
                  className="bg-transparent border-none p-0 focus:ring-0 text-sm md:text-base text-foreground placeholder:text-foreground/40 font-medium outline-none cursor-pointer"
                  readOnly
                />
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              size="lg" 
              className="w-full md:w-auto h-full min-h-[60px] px-8 rounded-xl bg-accent hover:bg-accent/90 text-white font-bold text-base shadow-lg shadow-accent/25 hover:-translate-y-0.5 transition-all flex gap-2 group"
            >
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Search
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient overlay at bottom to blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}
