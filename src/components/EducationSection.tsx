import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-lg text-muted-foreground">
              Building the foundation for a career in technology 🎓
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mt-6"></div>
          </div>

          {/* Education Card */}
          <Card className="border-primary/10 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl md:text-3xl group-hover:text-primary transition-colors duration-300">
                Bachelor of Computer Applications
              </CardTitle>
              <p className="text-xl text-primary font-medium">BCA</p>
            </CardHeader>

            <CardContent className="text-center">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Award className="w-4 h-4" />
                    <span className="font-medium">Institution</span>
                  </div>
                  <p className="text-foreground font-medium">Shivalik College</p>
                  <p className="text-sm text-muted-foreground">Punjab University</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">Duration</span>
                  </div>
                  <p className="text-foreground font-medium">2014 – 2017</p>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    3 Years
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">Location</span>
                  </div>
                  <p className="text-foreground font-medium">Punjab, India</p>
                </div>
              </div>

              {/* Key Subjects */}
              <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-4">Key Subjects & Skills Developed:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <ul className="space-y-2 text-left">
                    <li>• Programming Fundamentals (C, C++, Java)</li>
                    <li>• Database Management Systems</li>
                    <li>• Data Structures & Algorithms</li>
                    <li>• Software Engineering Principles</li>
                  </ul>
                  <ul className="space-y-2 text-left">
                    <li>• Web Technologies (HTML, CSS, JavaScript)</li>
                    <li>• Object-Oriented Programming</li>
                    <li>• Computer Networks</li>
                    <li>• System Analysis & Design</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                <p className="text-muted-foreground italic">
                  "This degree provided me with a strong foundation in computer science fundamentals, 
                  which became invaluable when I transitioned into mobile app development."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;