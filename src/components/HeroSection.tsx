import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/5" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Flutter Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-2xl text-primary-foreground font-bold">F</span>
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-primary-glow bg-clip-text text-transparent">
            Shubham Sharma
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
              Flutter & Android Developer
            </h2>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Mohali, Punjab</span>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-foreground mb-8 font-light">
            Crafting mobile experiences with Flutter & love 💙
          </p>

          {/* Intro */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            5+ years of building clean, scalable, and user-focused mobile apps. 
            Passionate about creating seamless experiences that users love. 📱✨
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300 group"
            >
              <Mail className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              Get In Touch
            </Button>
            
            <div className="flex gap-3">
              <Button variant="outline" size="lg" className="border-primary/20 hover:border-primary hover:bg-primary/5">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/20 hover:border-primary hover:bg-primary/5">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-primary-glow/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-20 w-4 h-4 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;