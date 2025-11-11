import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, GraduationCap, Plane } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

interface HeroProps {
  onGetStartedClick: () => void;
}

export const Hero = ({ onGetStartedClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-95" />

      {/* Hero image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 opacity-10">
        <Globe className="w-64 h-64 text-white" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10">
        <Plane className="w-48 h-48 text-white rotate-45" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-8 h-8 text-secondary" />
            <span className="text-white/90 font-semibold tracking-wide uppercase text-sm">
              Your Gateway to Global Education
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Study Abroad,
            <br />
            <span className=" bg-clip-text text-white">Transform Your Future</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            Expert guidance for your international education journey. From application to
            arrival, we make studying abroad simple, affordable, and achievable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={onGetStartedClick}
              className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6 shadow-card transition-smooth group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={onGetStartedClick}
              className="border-2 border-white text-secondary hover:bg-white hover:text-primary text-lg px-8 py-6 transition-smooth"
            >
              Explore Destinations
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80 text-sm">Partner Universities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-white/80 text-sm">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-white/80 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
