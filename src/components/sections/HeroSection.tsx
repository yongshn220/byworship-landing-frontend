"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
              교회 예배팀을 위한
              <br />
              <span className="text-primary">올인원 관리 솔루션</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              찬양곡부터 세트리스트까지, 예배 준비를 더 쉽고 체계적으로
              <br />
              <span className="font-medium text-foreground">ByWorship과 함께 예배팀 관리를 혁신하세요</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="text-lg px-8 py-4 h-auto group">
              무료로 시작하기
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto group">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              데모 보기
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8"
          >
            <p className="text-sm text-muted-foreground mb-4">
              신용카드 불필요 • 30일 무료 체험 • 설정 지원 제공
            </p>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>1,000+ 교회</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>50,000+ 곡 관리</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>99.9% 가동률</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 lg:mt-20"
        >
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 blur-3xl transform rotate-6 scale-110"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-2 border border-muted">
              <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Play className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-medium">
                    ByWorship 대시보드 미리보기
                  </p>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    실제 제품 스크린샷이 여기에 표시됩니다
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-muted-foreground"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}