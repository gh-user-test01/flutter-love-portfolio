import { Card, CardContent } from "@/components/ui/card";
import { Heart, Code, Smartphone } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Main About Text */}
            <div className="md:col-span-2">
              <Card className="border-primary/10 hover:border-primary/20 transition-colors duration-300">
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    I'm a passionate mobile developer who fell in love with Flutter the moment I discovered it. 
                    With over 5 years of experience in mobile development, I've been crafting apps that not only 
                    look beautiful but also deliver smooth, intuitive user experiences.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    My journey started with Android development using Java, and when Flutter came along, 
                    it felt like finding the perfect tool for the job. I love how it enables me to create 
                    pixel-perfect UIs while maintaining performance across platforms.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Beyond coding, I'm constantly exploring new technologies and best practices. Whether it's 
                    integrating complex APIs, optimizing app performance, or designing user-centric interfaces, 
                    I approach every project with curiosity and attention to detail.
                  </p>

                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span>Always exploring, always building.</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Side Stats */}
            <div className="space-y-6">
              <Card className="border-primary/10 hover:border-primary/20 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <Code className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-primary mb-2">5+</h3>
                  <p className="text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>

              <Card className="border-primary/10 hover:border-primary/20 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <Smartphone className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-primary mb-2">20+</h3>
                  <p className="text-muted-foreground">Apps Published</p>
                </CardContent>
              </Card>

              <Card className="border-primary/10 hover:border-primary/20 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <Heart className="w-8 h-8 text-red-500 mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-primary mb-2">100%</h3>
                  <p className="text-muted-foreground">Passion Driven</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;