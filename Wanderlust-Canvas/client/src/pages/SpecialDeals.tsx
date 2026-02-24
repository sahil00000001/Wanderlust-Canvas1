import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag, Clock, Zap } from "lucide-react";

const DEALS = [
  {
    id: 1,
    title: "Flash Sale: Maldives Overwater Villa",
    discount: "40% OFF",
    price: 899,
    originalPrice: 1499,
    expiresIn: "12:45:00",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Last Minute: Paris Romance Tour",
    discount: "25% OFF",
    price: 650,
    originalPrice: 870,
    expiresIn: "05:20:15",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Early Bird: Japan Sakura 2026",
    discount: "Early Access",
    price: 1800,
    originalPrice: 2200,
    expiresIn: "24:00:00",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800"
  }
];

export default function SpecialDeals() {
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
            <Badge className="mb-4 px-4 py-1 bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
              Limited Time Offers
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
              Special <span className="text-gradient-accent">Deals</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Grab these incredible offers before they're gone. Unbeatable prices for premium experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12">
            {DEALS.map((deal, index) => (
              <motion.div
                key={deal.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-none shadow-xl rounded-[2rem] bg-card/50 backdrop-blur-sm group">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 h-[300px] lg:h-auto relative overflow-hidden">
                      <img 
                        src={deal.image} 
                        alt={deal.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-6 left-6">
                        <Badge className="bg-accent text-white px-4 py-2 text-lg font-bold shadow-lg shadow-accent/30 animate-pulse">
                          {deal.discount}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-accent mb-4 font-medium">
                        <Zap className="w-4 h-4" />
                        <span>Flash Deal</span>
                      </div>
                      <h2 className="text-3xl font-bold font-display mb-4 group-hover:text-primary transition-colors">
                        {deal.title}
                      </h2>
                      <div className="flex items-center gap-6 mb-8">
                        <div>
                          <p className="text-sm text-muted-foreground line-through">${deal.originalPrice}</p>
                          <p className="text-4xl font-bold text-foreground">${deal.price}</p>
                        </div>
                        <div className="h-12 w-px bg-border" />
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Ends In</p>
                          <div className="flex items-center gap-2 text-foreground font-mono font-bold text-xl">
                            <Clock className="w-5 h-5 text-primary" />
                            <span>{deal.expiresIn}</span>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full lg:w-max px-12 py-6 text-lg rounded-2xl bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                        Claim This Deal
                      </Button>
                    </CardContent>
                  </div>
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
