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
              기능
            </a>
            <a href="#benefits" className="text-foreground hover:text-primary transition-colors">
              혜택
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
              요금제
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
              후기
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">데모 보기</Button>
            <Button>무료로 시작하기</Button>
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
                기능
              </a>
              <a href="#benefits" className="block px-3 py-2 text-foreground hover:text-primary">
                혜택
              </a>
              <a href="#pricing" className="block px-3 py-2 text-foreground hover:text-primary">
                요금제
              </a>
              <a href="#testimonials" className="block px-3 py-2 text-foreground hover:text-primary">
                후기
              </a>
              <div className="flex flex-col space-y-2 px-3 pt-2">
                <Button variant="ghost" className="justify-start">데모 보기</Button>
                <Button className="justify-start">무료로 시작하기</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}