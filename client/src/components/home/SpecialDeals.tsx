import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, CalendarDays } from "lucide-react";

export function SpecialDeals() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Background Image & Gradient */}
          <div className="absolute inset-0 z-0">
            {/* Unsplash Maldives/Resort image */}
            <img 
              src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=2000" 
              alt="Promo background" 
              className="w-full h-full object-cover"
            />
            {/* Trendy mixed gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-primary/80 to-transparent mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="relative z-10 p-8 md:p-16 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
            
            <div className="max-w-xl text-white">
              <div className="flex items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/90 text-white text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" /> Early Bird Offer
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight">
                Save up to <span className="text-accent">40%</span> on Summer Escapes
              </h2>
              
              <p className="text-lg text-white/90 mb-8 font-medium">
                Book your dream vacation now and unlock exclusive discounts, complimentary upgrades, and premium experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8 h-14 rounded-xl shadow-lg">
                  Claim Offer Now
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold px-8 h-14 rounded-xl backdrop-blur-sm">
                  View All Promos
                </Button>
              </div>
            </div>

            {/* Floating Card */}
            <div className="glass rounded-2xl p-6 md:p-8 max-w-sm w-full border-t border-l border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.2)] transform md:rotate-3 md:translate-y-4 hover:rotate-0 transition-transform duration-500">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="font-bold text-xl text-white mb-1">Maldives Premium</h4>
                  <p className="text-white/70 text-sm">7 Nights All-Inclusive</p>
                </div>
                <div className="bg-white text-primary font-bold rounded-lg px-3 py-2 text-xl shadow-sm">
                  $1,499
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                {['Private overwater villa', 'Daily spa treatments', 'Seaplane transfer included'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/90">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinelinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/20 flex justify-between items-center text-xs text-white/70 font-medium">
                <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" /> Valid till Oct 31</span>
                <span>Only 4 spots left!</span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
