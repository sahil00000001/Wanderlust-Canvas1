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
            <h1 className="text-4xl md:text-7xl font-extrabold font-display mb-6 tracking-tight">
              Special <span className="text-gradient-accent">Deals</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
              Grab these incredible offers before they're gone. Unbeatable prices for premium experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-16">
            {DEALS.map((deal, index) => (
              <motion.div
                key={deal.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-none shadow-2xl rounded-[3rem] bg-card/40 backdrop-blur-xl group hover:shadow-primary/5 transition-all duration-500">
                  <div className="flex flex-col lg:flex-row min-h-[450px]">
                    <div className="lg:w-3/5 h-[350px] lg:h-auto relative overflow-hidden">
                      <img 
                        src={deal.image} 
                        alt={deal.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                      <div className="absolute top-8 left-8">
                        <div className="bg-accent text-white px-6 py-3 text-xl font-black rounded-2xl shadow-2xl shadow-accent/40 animate-bounce">
                          {deal.discount}
                        </div>
                      </div>
                    </div>
                    <CardContent className="lg:w-2/5 p-10 lg:p-14 flex flex-col justify-center bg-gradient-to-br from-card/80 to-background/50">
                      <div className="flex items-center gap-3 text-accent mb-6 font-bold tracking-widest uppercase text-sm">
                        <Zap className="w-5 h-5 fill-accent" />
                        <span>Flash Deal of the Day</span>
                      </div>
                      <h2 className="text-4xl font-extrabold font-display mb-6 group-hover:text-primary transition-colors leading-tight">
                        {deal.title}
                      </h2>
                      <div className="flex items-center gap-10 mb-10">
                        <div>
                          <p className="text-sm text-muted-foreground line-through mb-1 font-medium">${deal.originalPrice}</p>
                          <p className="text-5xl font-black text-foreground tracking-tighter">${deal.price}</p>
                        </div>
                        <div className="h-16 w-px bg-border/50" />
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-3 font-bold">Offer Expires In</p>
                          <div className="flex items-center gap-3 text-primary font-mono font-black text-2xl bg-primary/5 px-4 py-2 rounded-xl border border-primary/10">
                            <Clock className="w-6 h-6" />
                            <span>{deal.expiresIn}</span>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full py-8 text-xl font-bold rounded-2xl bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/30 group-hover:scale-[1.02] transition-transform">
                        Secure This Experience
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
