import { motion } from "framer-motion";
import { POPULAR_DESTINATIONS } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

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
            <h1 className="text-4xl md:text-7xl font-extrabold font-display mb-6 tracking-tight">
              Our <span className="text-gradient">Destinations</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
              From tropical paradises to vibrant metropolitan cities, discover the perfect place for your next adventure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {DESTINATIONS_EXTENDED.map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="group overflow-hidden border-none shadow-2xl hover-elevate transition-all duration-700 rounded-[2.5rem] h-[500px]">
                  <CardContent className="p-0 h-full relative">
                    <img 
                      src={dest.image} 
                      alt={dest.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <Badge className="bg-primary/20 backdrop-blur-md text-white border-white/20 mb-4 px-3 py-1">
                        {dest.properties} Packages
                      </Badge>
                      <h3 className="text-4xl font-bold text-white mb-4 font-display">{dest.name}</h3>
                      <Button className="bg-white/10 hover:bg-white text-white hover:text-primary backdrop-blur-md border-white/20 rounded-2xl px-6 py-2 transition-all duration-300">
                        Explore Now
                      </Button>
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
