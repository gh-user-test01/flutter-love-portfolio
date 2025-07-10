import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Product Manager",
      company: "HealthTech Solutions",
      content: "Shubham delivered an exceptional Flutter app that exceeded our expectations. His attention to detail and ability to translate complex requirements into intuitive user experiences is remarkable. The app performance is stellar!",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "ECommerce Innovations",
      content: "Working with Shubham was a pleasure. He not only built a robust e-commerce platform but also provided valuable insights that improved our user engagement by 300%. His Flutter expertise is top-notch.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Startup Founder",
      company: "TeleHealth Plus",
      content: "Shubham's work on our telemedicine app was phenomenal. He seamlessly integrated video calling features and created a smooth, professional interface that our doctors and patients love using daily.",
      rating: 5,
      avatar: "MR"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              What People Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Feedback from clients and collaborators who've experienced the magic firsthand ✨
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mt-6"></div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="border-primary/10 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="w-8 h-8 text-primary" />
                </div>

                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 fill-yellow-400 text-yellow-400" 
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} • {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary-glow/5 inline-block">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-2">
                  Want to share your experience working with me?
                </p>
                <p className="text-sm text-primary font-medium">
                  I'd love to hear your feedback! 💬
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;