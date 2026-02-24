import { motion } from "framer-motion";
import { FEATURED_PACKAGES } from "@/lib/mock-data";
import { PackageCard } from "./PackageCard";
import { Button } from "@/components/ui/button";

export function FeaturedPackages() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h4 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Top Trending</h4>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground">
              Featured Packages
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Hand-picked exclusive deals for the perfect getaway. Unmatched luxury at unbeatable prices.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" className="rounded-full border-border hover:border-primary hover:text-primary transition-colors">
              View All Packages
            </Button>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <PackageCard data={pkg} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
