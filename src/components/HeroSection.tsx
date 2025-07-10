import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, Download, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20" />
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Animated Flutter Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 animate-bounce">
                <span className="text-3xl text-white font-bold">F</span>
              </div>
              <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
            </div>
          </div>

          {/* Animated Name & Title */}
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-gradient bg-300%">
              Shubham Sharma
            </h1>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
              <span className="text-sm text-green-600 dark:text-green-400 font-medium">Available for hire</span>
            </div>
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium mb-6">
              🚀 Flutter & Android Developer
            </h2>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 mb-8 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <MapPin className="w-5 h-5 text-blue-500" />
            <span className="text-gray-600 dark:text-gray-400">Mohali, Punjab, India 🇮🇳</span>
          </div>

          {/* Enhanced Tagline */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 mb-6 font-light">
              Crafting mobile experiences with Flutter & passion 💙
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
          </div>

          {/* Enhanced Intro */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating seamless, scalable, and user-focused mobile applications. 
              Specializing in Flutter development with expertise in clean architecture, 
              state management, and modern development practices. 📱✨
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            <Button 
              size="lg" 
              onClick={handleContactClick}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group px-8 py-3"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-blue-200 dark:border-blue-800 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 group px-8 py-3"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download CV
            </Button>
            
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 group"
                asChild
              >
                <a href="https://linkedin.com/in/shubham-sharma" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-200 dark:border-gray-700 hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 group"
                asChild
              >
                <a href="https://github.com/shubham-sharma" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400/60 rounded-full animate-bounce shadow-lg shadow-blue-400/50" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400/60 rounded-full animate-bounce shadow-lg shadow-purple-400/50" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-20 w-5 h-5 bg-pink-400/60 rounded-full animate-bounce shadow-lg shadow-pink-400/50" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 right-10 w-2 h-2 bg-green-400/60 rounded-full animate-bounce shadow-lg shadow-green-400/50" style={{ animationDelay: '3s' }}></div>
    </section>
  );
};

export default HeroSection;