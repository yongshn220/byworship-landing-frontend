"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">ByWorship</div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">View Demo</Button>
            <Button>Get Started</Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b border-muted">
              <a href="#features" className="block px-3 py-2 text-foreground hover:text-primary">
                Features
              </a>
              <a href="#about" className="block px-3 py-2 text-foreground hover:text-primary">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-foreground hover:text-primary">
                Contact
              </a>
              <div className="flex flex-col space-y-2 px-3 pt-2">
                <Button variant="ghost" className="justify-start">View Demo</Button>
                <Button className="justify-start">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}