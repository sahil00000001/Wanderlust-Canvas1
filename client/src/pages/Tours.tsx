import { motion } from "framer-motion";
import { FEATURED_PACKAGES } from "@/lib/mock-data";
import { PackageCard } from "@/components/home/PackageCard";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";

export default function Tours() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/20 text-primary">
              Curated Experiences
            </Badge>
            <h1 className="text-4xl md:text-7xl font-extrabold font-display mb-6 tracking-tight">
              Adventure <span className="text-gradient">Tours</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
              Expertly crafted itineraries designed to show you the heart of every destination.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[...FEATURED_PACKAGES, ...FEATURED_PACKAGES].map((pkg, index) => (
              <motion.div
                key={`${pkg.id}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <PackageCard data={pkg} />
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
