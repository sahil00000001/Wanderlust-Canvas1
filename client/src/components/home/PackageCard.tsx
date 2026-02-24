import { MapPin, Clock, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PackageCardProps {
  data: {
    id: string;
    title: string;
    location: string;
    duration: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviews: number;
    image: string;
    tags: string[];
  }
}

export function PackageCard({ data }: PackageCardProps) {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-[var(--shadow-soft)] hover:border-border transition-all duration-300 flex flex-col h-full">
      
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={data.image} 
          alt={data.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        
        {/* Tags */}
        <div className="absolute top-4 left-4 flex gap-2">
          {data.tags.slice(0, 2).map(tag => (
            <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-foreground shadow-sm">
              {tag}
            </span>
          ))}
        </div>

        {/* Favorite Button */}
        <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white transition-colors group/fav">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white group-hover/fav:text-destructive group-hover/fav:fill-destructive transition-all">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm font-medium">
            <MapPin className="w-4 h-4 text-primary" />
            {data.location}
          </div>
          <div className="flex items-center gap-1 text-sm font-semibold">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            {data.rating} <span className="text-muted-foreground font-normal">({data.reviews})</span>
          </div>
        </div>

        <h3 className="text-xl font-bold font-display text-foreground mb-2 group-hover:text-primary transition-colors">
          {data.title}
        </h3>

        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
          <Clock className="w-4 h-4" />
          {data.duration}
        </div>

        {/* Footer/Price area pushes to bottom */}
        <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
          <div>
            <span className="text-xs text-muted-foreground block mb-0.5">Starting from</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold font-display text-foreground">${data.price}</span>
              {data.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">${data.originalPrice}</span>
              )}
            </div>
          </div>
          
          <Button 
            className="rounded-xl px-5 bg-secondary hover:bg-secondary/90 text-white group-hover:translate-x-1 transition-all"
            onClick={() => {}}
          >
            Details <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
