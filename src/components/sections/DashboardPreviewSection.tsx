"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Music, List, Users, Megaphone, BarChart3, Calendar } from "lucide-react";

const dashboardFeatures = [
  {
    title: "Songs 관리 화면",
    description: "모든 찬양곡을 한눈에 보고 키별로 관리",
    icon: Music,
    preview: "찬양곡 검색, 키 변경, 태그 관리가 직관적으로 구성된 화면"
  },
  {
    title: "Set List 생성 화면",
    description: "드래그앤드롭으로 쉽게 세트리스트 구성",
    icon: List,
    preview: "예배 순서에 맞춰 곡을 배치하고 실시간으로 미리보기"
  },
  {
    title: "Teams 관리 화면",
    description: "팀원 현황과 역할을 체계적으로 관리",
    icon: Users,
    preview: "팀원별 참석 현황, 역할 배정, 연락처 관리 통합 화면"
  },
  {
    title: "통계 및 분석",
    description: "곡 사용 빈도와 팀 활동을 시각적으로 분석",
    icon: BarChart3,
    preview: "가장 많이 사용된 곡, 팀별 활동 지표를 차트로 확인"
  }
];

export default function DashboardPreviewSection() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            실제 대시보드를
            <br />
            <span className="text-primary">미리 경험해보세요</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            직관적인 인터페이스로 모든 기능을 쉽게 사용할 수 있습니다
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mb-16"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20 blur-3xl"></div>
            <Card className="relative bg-white shadow-2xl border">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">ByWorship Dashboard</h3>
                      <p className="text-sm text-muted-foreground">새교회 예배팀</p>
                    </div>
                  </div>
                  <Button className="gap-2">
                    <Play className="w-4 h-4" />
                    Interactive Demo
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-blue-600 font-medium">총 곡 수</p>
                        <p className="text-2xl font-bold text-blue-800">847</p>
                      </div>
                      <Music className="w-8 h-8 text-blue-500" />
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-green-600 font-medium">이번 달 세트리스트</p>
                        <p className="text-2xl font-bold text-green-800">12</p>
                      </div>
                      <List className="w-8 h-8 text-green-500" />
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-purple-600 font-medium">팀원 수</p>
                        <p className="text-2xl font-bold text-purple-800">24</p>
                      </div>
                      <Users className="w-8 h-8 text-purple-500" />
                    </div>
                  </div>
                </div>

                <div className="aspect-video bg-gradient-to-br from-muted/30 to-muted/60 rounded-xl flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Play className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-foreground">
                        실제 대시보드 스크린샷
                      </p>
                      <p className="text-sm text-muted-foreground">
                        여기에 실제 제품 화면이 표시됩니다
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {dashboardFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <h3 className="text-lg font-semibold text-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                        <div className="bg-muted/50 rounded-lg p-3">
                          <p className="text-sm text-muted-foreground">
                            📱 {feature.preview}
                          </p>
                        </div>
                      </div>
                    </div>
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
            <div className="bg-gradient-to-r from-primary/5 to-blue-500/5 border border-primary/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                모든 기능을 직접 체험해보세요
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                30일 무료 체험으로 ByWorship의 모든 기능을 제한 없이 사용할 수 있습니다.
                설정부터 사용법까지 전담 지원팀이 도와드립니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8 gap-2">
                  <Play className="w-4 h-4" />
                  무료 체험 시작하기
                </Button>
                <Button variant="outline" size="lg" className="px-8 gap-2">
                  <Calendar className="w-4 h-4" />
                  데모 일정 잡기
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}