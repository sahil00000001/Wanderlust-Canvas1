import { Link } from "wouter";
import { Plane, Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white/80 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 text-white group w-fit">
              <div className="p-2 rounded-xl bg-primary/20 text-primary">
                <Plane className="w-6 h-6 transform group-hover:rotate-12 transition-transform" />
              </div>
              <span className="text-2xl font-bold font-display tracking-tight text-white">
                Lumiere<span className="text-primary">Travel</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              Curating extraordinary journeys and unforgettable experiences for the modern traveler. Explore the world in luxury and comfort without breaking the bank.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-display">Discover</h4>
            <ul className="space-y-4">
              {['Popular Destinations', 'Luxury Packages', 'Family Tours', 'Honeymoon Deals', 'Last Minute Offers'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-display">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Travel Guides', 'Careers', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-display">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">123 Travel Avenue, Suite 400<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">hello@lumieretravel.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Lumiere Travel. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/50">
            <span>Designed for Luxury</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
