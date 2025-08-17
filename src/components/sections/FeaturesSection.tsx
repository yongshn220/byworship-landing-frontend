"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, List, Users, Megaphone, ArrowRight, Check } from "lucide-react";

const features = [
  {
    icon: Music,
    title: "Songs Management",
    subtitle: "Centralized Music Library",
    description: "Organize all your worship songs in one comprehensive database",
    features: [
      "Centralized song database",
      "Multiple key versions",
      "Smart tagging system",
      "Usage analytics"
    ],
    color: "bg-primary/5 border-primary/20",
    iconColor: "text-primary",
    accent: "bg-primary"
  },
  {
    icon: List,
    title: "Set Lists",
    subtitle: "Effortless Planning",
    description: "Create and share setlists with intuitive drag-and-drop functionality",
    features: [
      "Intuitive drag-and-drop",
      "Auto-generated covers",
      "Team-specific lists",
      "Service history"
    ],
    color: "bg-primary/5 border-primary/20",
    iconColor: "text-primary",
    accent: "bg-primary"
  },
  {
    icon: Users,
    title: "Team Management",
    subtitle: "Seamless Collaboration",
    description: "Manage multiple worship teams and foster effective collaboration",
    features: [
      "Multi-team support",
      "Role-based permissions",
      "Member profiles",
      "Schedule tracking"
    ],
    color: "bg-primary/5 border-primary/20",
    iconColor: "text-primary",
    accent: "bg-primary"
  },
  {
    icon: Megaphone,
    title: "Announcements",
    subtitle: "Enhanced Communication",
    description: "Keep your team informed with organized announcements and notifications",
    features: [
      "Real-time notifications",
      "Category organization",
      "Priority announcements",
      "Team communication"
    ],
    color: "bg-primary/5 border-primary/20",
    iconColor: "text-primary",
    accent: "bg-primary"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Four Essential Features
            <br />
            <span className="text-primary">for Worship Teams</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Streamline your worship preparation and strengthen team collaboration with our comprehensive tools
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className={`h-full hover:shadow-xl transition-all duration-300 border ${feature.color} group cursor-pointer`}>
                <CardContent className="p-6 text-center">
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${feature.color} group-hover:scale-110 transition-transform mx-auto mb-4`}>
                      <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium mb-3">
                      {feature.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="space-y-2 mb-6">
                    {feature.features.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-center space-x-2">
                        <div className={`w-4 h-4 rounded-full ${feature.accent} flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-2.5 h-2.5 text-white" />
                        </div>
                        <span className="text-sm text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Everything works together seamlessly
            </h3>
            <p className="text-muted-foreground mb-6">
              All features are integrated to provide a comprehensive worship team management experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                View Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}