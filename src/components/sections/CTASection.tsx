"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Play, CheckCircle, Phone, Mail, Calendar } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-blue-500/5 to-purple-500/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your worship preparation and strengthen your team collaboration
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-white shadow-2xl border-2 border-primary/10">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Experience the complete solution for your worship team
                </h3>
                
                <p className="text-muted-foreground text-lg mb-8">
                  Get started today and see how ByWorship can transform your team management
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button size="lg" className="text-lg px-8 py-4 h-auto group">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto group">
                    <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    View Demo
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center justify-center space-x-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Easy setup</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Full support</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Secure platform</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-muted pt-8">
                <h4 className="text-xl font-bold text-foreground text-center mb-6">
                  Complete support for your team
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <h5 className="font-semibold text-foreground mb-2">Easy Onboarding</h5>
                    <p className="text-sm text-muted-foreground">
                      Simple setup process tailored to your worship team's needs
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <h5 className="font-semibold text-foreground mb-2">Dedicated Support</h5>
                    <p className="text-sm text-muted-foreground">
                      Get help when you need it through multiple support channels
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <h5 className="font-semibold text-foreground mb-2">Learning Resources</h5>
                    <p className="text-sm text-muted-foreground">
                      Access guides, tutorials, and best practices for your team
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Have questions? We're here to help
            </h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@byworship.com</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Available Monday - Friday, 9:00 AM - 6:00 PM EST
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-blue-500 text-white rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold mb-4">
              Join worship teams around the world
            </h3>
            <p className="mb-6 opacity-90">
              Transform your worship preparation with ByWorship's comprehensive platform
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}