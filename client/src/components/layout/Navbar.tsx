import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Plane, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Destinations", href: "/destinations" },
    { label: "Tours", href: "/tours" },
    { label: "Special Deals", href: "/deals" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-border/50 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-xl transition-colors ${isScrolled ? 'bg-primary/10 text-primary' : 'bg-white/20 text-white backdrop-blur-sm'}`}>
              <Plane className="w-6 h-6 transform group-hover:rotate-12 transition-transform" />
            </div>
            <span className={`text-2xl font-bold font-display tracking-tight ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              Lumiere<span className={isScrolled ? 'text-primary' : 'text-white/80'}>Travel</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href}
                className={`text-sm font-semibold tracking-wide hover:-translate-y-0.5 transition-all duration-300 relative group/link ${
                  isScrolled ? 'text-foreground/80 hover:text-primary' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover/link:w-full ${isScrolled ? 'bg-primary' : 'bg-white'}`} />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className={`text-sm font-medium transition-colors ${isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'}`}>
              Log In
            </button>
            <Button 
              className={isScrolled ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20" : "bg-white text-primary hover:bg-white/90"}
              onClick={() => {}}
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-xl md:hidden"
          >
            <div className="p-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.label} 
                  href={link.href}
                  className="block p-3 rounded-lg hover:bg-muted font-medium text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-border" />
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">Log In</Button>
                <Button className="w-full">Sign Up</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
