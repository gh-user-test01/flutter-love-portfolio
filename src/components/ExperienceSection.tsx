import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Flutter Developer",
      company: "Devherds Solution LLP",
      duration: "Jul 2023 – Present",
      location: "Remote",
      type: "Full-time",
      achievements: [
        "🚀 Led development of 5+ Flutter applications from concept to App Store publication",
        "⚡ Improved app performance by 40% through code optimization and efficient state management",
        "🔧 Integrated complex APIs including payment gateways, real-time chat, and video calling",
        "👥 Mentored junior developers and established Flutter development best practices",
        "📱 Specialized in creating pixel-perfect UIs that match design specifications exactly"
      ],
      tech: ["Flutter", "Dart", "Firebase", "REST APIs", "State Management", "CI/CD"]
    },
    {
      role: "Flutter + Android Developer",
      company: "Snake Script Solution LLP",
      duration: "Jan 2019 – Mar 2023",
      location: "Mohali, Punjab",
      type: "Full-time",
      achievements: [
        "🏗️ Built and maintained 15+ Android applications using Java and XML",
        "🎯 Successfully migrated 8 legacy Android apps to Flutter, reducing codebase by 60%",
        "🔄 Implemented real-time features using Socket.IO and WebRTC for live communication",
        "📊 Integrated analytics and crash reporting tools improving app stability by 75%",
        "🎨 Collaborated with UI/UX designers to create intuitive and accessible user interfaces",
        "⚙️ Set up automated testing and deployment pipelines reducing release time by 50%"
      ],
      tech: ["Flutter", "Android", "Java", "XML", "Socket.IO", "Google Maps API", "Firebase"]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My journey in mobile development, building apps that make a difference 💼
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mt-6"></div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="border-primary/10 hover:border-primary/20 hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <CardHeader className="relative">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Briefcase className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors duration-300">
                            {exp.role}
                          </CardTitle>
                          <p className="text-lg text-primary font-medium">{exp.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-4 text-foreground">Key Achievements:</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li 
                          key={achievementIndex}
                          className="text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-200"
                        >
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="outline"
                          className="border-primary/20 text-primary hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;