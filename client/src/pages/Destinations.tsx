import { motion } from "framer-motion";
import { POPULAR_DESTINATIONS } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const DESTINATIONS_EXTENDED = [
  ...POPULAR_DESTINATIONS,
  {
    id: "dest-6",
    name: "Kyoto",
    properties: 45,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
    size: "small"
  },
  {
    id: "dest-7",
    name: "New York",
    properties: 112,
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800",
    size: "medium"
  },
  {
    id: "dest-8",
    name: "Cape Town",
    properties: 28,
    image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&q=80&w=800",
    size: "large"
  }
];

export default function Destinations() {
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
              Explore the World
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
              Our <span className="text-gradient">Destinations</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From tropical paradises to vibrant metropolitan cities, discover the perfect place for your next adventure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESTINATIONS_EXTENDED.map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group overflow-hidden border-none shadow-soft hover-elevate transition-all duration-500 rounded-3xl h-[400px]">
                  <CardContent className="p-0 h-full relative">
                    <img 
                      src={dest.image} 
                      alt={dest.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-2xl font-bold text-white mb-2 font-display">{dest.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-white/80">{dest.properties} Packages</span>
                        <Badge className="bg-white/20 backdrop-blur-md text-white border-white/30">
                          Explore
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
