import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, MapPin, Phone, Send, Heart } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shubham.sharma@email.com",
      href: "mailto:shubham.sharma@email.com",
      color: "text-blue-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shubham-sharma",
      href: "https://linkedin.com/in/shubham-sharma",
      color: "text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/shubham-sharma",
      href: "https://github.com/shubham-sharma",
      color: "text-gray-700"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mohali, Punjab, India",
      href: null,
      color: "text-green-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Let's Build Something Great Together!
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Looking for a Flutter expert? Or just want to say hi? 
              I'd love to hear from you! 🚀
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-primary/10 hover:border-primary/20 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                      <Heart className="w-4 h-4 text-white" />
                    </div>
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                        <contact.icon className={`w-5 h-5 ${contact.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        {contact.href ? (
                          <a 
                            href={contact.href}
                            className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                            target={contact.href.startsWith('http') ? '_blank' : '_self'}
                            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-primary/10 bg-gradient-to-r from-primary/5 to-primary-glow/5">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Quick Connect</h3>
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300 flex-1"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email Me
                    </Button>
                    <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary hover:bg-primary/5">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary hover:bg-primary/5">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Availability Status */}
              <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <p className="font-medium text-green-800 dark:text-green-200">Available for new projects!</p>
                      <p className="text-sm text-green-600 dark:text-green-400">
                        Currently accepting Flutter development projects for 2024
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-primary/10 hover:border-primary/20 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you within 24 hours!
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="Your full name" className="border-primary/20 focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="border-primary/20 focus:border-primary" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input 
                    placeholder="What's this about?" 
                    className="border-primary/20 focus:border-primary" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project, timeline, budget, or just say hello! 👋"
                    className="border-primary/20 focus:border-primary min-h-[120px] resize-none"
                  />
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300 group"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  I typically respond within 24 hours. For urgent inquiries, feel free to email me directly!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Footer Message */}
          <div className="text-center mt-16">
            <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary-glow/5 inline-block">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Ready to Start?</h3>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Whether you need a new Flutter app, want to migrate an existing project, 
                  or just need some technical guidance, I'm here to help turn your ideas into reality.
                </p>
                <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground">
                  <span>Let's create something amazing together</span>
                  <Heart className="w-4 h-4 text-red-500" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;