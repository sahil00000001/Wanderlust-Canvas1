import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const POSTS = [
  {
    id: 1,
    title: "10 Hidden Gems in Indonesia You Must Visit",
    excerpt: "Beyond Bali, Indonesia offers thousands of islands with breathtaking landscapes and unique cultures...",
    author: "Sarah Jenkins",
    date: "Feb 24, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
    category: "Travel Tips"
  },
  {
    id: 2,
    title: "How to Travel Europe on a Budget",
    excerpt: "Traveling Europe doesn't have to break the bank. Here's our comprehensive guide to saving money...",
    author: "Michael Chen",
    date: "Feb 20, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800",
    category: "Guides"
  },
  {
    id: 3,
    title: "The Ultimate Swiss Alps Hiking Guide",
    excerpt: "Prepare for the adventure of a lifetime with our expert tips for hiking the majestic Swiss Alps...",
    author: "Emma Watson",
    date: "Feb 15, 2026",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800",
    category: "Adventure"
  }
];

export default function Blog() {
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
              Travel Stories
            </Badge>
            <h1 className="text-4xl md:text-7xl font-extrabold font-display mb-6 tracking-tight">
              Lumiere <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
              Tips, guides, and inspiration for your next world-class journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {POSTS.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="group overflow-hidden border-none shadow-2xl hover-elevate transition-all duration-500 rounded-[2.5rem] bg-card h-full flex flex-col">
                  <div className="h-72 relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-white/95 backdrop-blur-md text-primary border-none shadow-xl px-4 py-1.5 font-bold">
                        {post.category}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <CardContent className="p-10 flex-1 flex flex-col">
                    <div className="flex items-center gap-6 text-xs text-muted-foreground mb-6 font-semibold uppercase tracking-widest">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold font-display mb-6 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-base mb-8 line-clamp-3 flex-1 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/50">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10 border-2 border-primary/10">
                          <AvatarFallback className="bg-primary/5 text-primary font-bold">{post.author[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-bold tracking-tight">{post.author}</span>
                      </div>
                      <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/5 group/btn rounded-xl">
                        Read More <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
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
