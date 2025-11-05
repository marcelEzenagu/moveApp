import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";

interface NavbarProps {
  onGetStartedClick: () => void;
}

export const Navbar = ({ onGetStartedClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-soft z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-primary">MoveAbroad</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Destinations
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Contact
            </a>
            <Button
              onClick={onGetStartedClick}
              className="bg-secondary hover:bg-secondary/90 text-white shadow-soft transition-smooth"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                Home
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                Destinations
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                Services
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                Contact
              </a>
              <Button
                onClick={onGetStartedClick}
                className="bg-secondary hover:bg-secondary/90 text-white w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
