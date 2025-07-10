import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Wrench, Cloud, Lightbulb } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Dart", "Java", "XML", "JavaScript"],
      color: "bg-blue-500/10 text-blue-700 border-blue-200"
    },
    {
      title: "Frameworks & Tools",
      icon: Wrench,
      skills: ["Flutter", "Android", "Firebase", "GitHub", "Bitbucket"],
      color: "bg-green-500/10 text-green-700 border-green-200"
    },
    {
      title: "APIs & Services",
      icon: Cloud,
      skills: ["Google Maps", "AWS Chime", "Agora", "Socket.IO"],
      color: "bg-purple-500/10 text-purple-700 border-purple-200"
    },
    {
      title: "Exploring",
      icon: Lightbulb,
      skills: ["Node.js", "React.js", "GraphQL"],
      color: "bg-orange-500/10 text-orange-700 border-orange-200"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The tools and technologies I use to bring ideas to life 🛠️
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mt-6"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className="border-primary/10 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className={`${category.color} hover:scale-105 transition-transform duration-200 cursor-default`}
                        style={{ animationDelay: `${index * 100 + skillIndex * 50}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Specialty Callout */}
          <div className="mt-16">
            <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary-glow/5">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-primary">Flutter Specialist</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  With deep expertise in Flutter development, I specialize in creating cross-platform applications 
                  that deliver native performance and beautiful user experiences. From state management to custom 
                  animations, I love pushing the boundaries of what's possible with Flutter.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;