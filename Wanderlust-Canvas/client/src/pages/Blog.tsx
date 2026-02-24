import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, Clock, ArrowRight } from "lucide-react";

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
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
              Lumiere <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tips, guides, and inspiration for your next world-class journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group overflow-hidden border-none shadow-soft hover-elevate transition-all duration-300 rounded-3xl bg-card h-full flex flex-col">
                  <div className="h-64 relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 backdrop-blur-sm text-primary border-none shadow-sm">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold font-display mb-4 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8 border border-border">
                          <AvatarFallback>{post.author[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">{post.author}</span>
                      </div>
                      <button className="text-primary group-hover:translate-x-1 transition-transform">
                        <ArrowRight className="w-5 h-5" />
                      </button>
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
