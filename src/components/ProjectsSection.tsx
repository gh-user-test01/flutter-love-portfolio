import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Smartphone, Heart, Shield, ShoppingBag, Video } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      name: "Own Your Health",
      description: "Comprehensive health management app with personalized wellness tracking and AI-driven insights.",
      icon: Heart,
      tech: ["Flutter", "Firebase", "AI/ML APIs"],
      color: "text-red-500",
      bgColor: "bg-red-500/10"
    },
    {
      name: "AgeProof",
      description: "Anti-aging and wellness platform with advanced health metrics and lifestyle recommendations.",
      icon: Shield,
      tech: ["Flutter", "AWS", "Health APIs"],
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      name: "Hit2Open",
      description: "Smart door access system with real-time monitoring and secure authentication protocols.",
      icon: Smartphone,
      tech: ["Flutter", "IoT", "Socket.IO"],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      name: "VMV Telehealth",
      description: "Telemedicine platform enabling remote consultations with video calling and health records management.",
      icon: Video,
      tech: ["Flutter", "Agora", "AWS Chime"],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      name: "MOSC Ecommerce",
      description: "Full-featured e-commerce platform with seamless shopping experience and payment integration.",
      icon: ShoppingBag,
      tech: ["Flutter", "Payment APIs", "Firebase"],
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real apps that solve real problems, published and loved by users 🚀
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mt-6"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.name}
                className="border-primary/10 hover:border-primary/20 hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <CardHeader className="relative">
                  <div className={`w-12 h-12 ${project.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className={`w-6 h-6 ${project.color}`} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/20 hover:border-primary hover:bg-primary/5 group"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                    View on Play Store
                  </Button>
                </CardContent>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </Card>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-12">
            <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary-glow/5 inline-block">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Want to see more? Check out my complete portfolio of 20+ published apps.
                </p>
                <Button className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300">
                  View All Projects
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;