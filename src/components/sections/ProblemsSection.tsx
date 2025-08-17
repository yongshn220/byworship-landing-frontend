"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Clock, FileX, Users, MessageCircleX } from "lucide-react";

const problems = [
  {
    icon: FileX,
    title: "Song Management Complexity",
    description: "Multiple versions of sheet music scattered across different platforms and formats",
    solution: "Centralized song database with version control"
  },
  {
    icon: Clock,
    title: "Manual Setlist Creation",
    description: "Time-consuming process of creating and sharing setlists with team members",
    solution: "Automated setlist generation and sharing"
  },
  {
    icon: Users,
    title: "Team Communication Gaps",
    description: "Difficulty coordinating schedules and sharing updates across team members",
    solution: "Real-time team collaboration tools"
  },
  {
    icon: MessageCircleX,
    title: "Inconsistent Workflow",
    description: "Lack of standardized processes for worship preparation and team management",
    solution: "Streamlined workflow management"
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

export default function ProblemsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Common Challenges
            <br />
            <span className="text-primary">Worship Teams Face</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            ByWorship addresses the key areas where teams need better organization and collaboration
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {problems.map((problem, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 h-full hover:shadow-lg transition-shadow border border-muted">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <problem.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                      <p className="text-sm text-primary font-medium">
                        ✓ {problem.solution}
                      </p>
                    </div>
                  </div>
                </div>
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
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ByWorship provides comprehensive solutions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-primary">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Streamlined workflows</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Enhanced collaboration</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MessageCircleX className="w-4 h-4" />
                <span>Organized management</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}