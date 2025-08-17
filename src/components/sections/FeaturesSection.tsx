"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, List, Users, Megaphone, ArrowRight, Check } from "lucide-react";

const features = [
  {
    icon: Music,
    title: "찬양곡 관리",
    subtitle: "Songs Management",
    description: "모든 찬양곡을 한 곳에서 체계적으로 관리하세요",
    features: [
      "통합 찬양곡 데이터베이스",
      "여러 키 버전 악보 관리",
      "스마트 태그 시스템",
      "사용 통계 분석"
    ],
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
    accent: "bg-blue-500"
  },
  {
    icon: List,
    title: "세트리스트 관리",
    subtitle: "Set Lists",
    description: "직관적인 드래그앤드롭으로 세트리스트를 쉽게 만드세요",
    features: [
      "직관적인 드래그앤드롭",
      "자동 커버 페이지 생성",
      "팀별 맞춤 관리",
      "예배별 히스토리"
    ],
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600",
    accent: "bg-green-500"
  },
  {
    icon: Users,
    title: "팀 관리",
    subtitle: "Teams Management",
    description: "여러 예배팀을 효율적으로 관리하고 협업하세요",
    features: [
      "다중 팀 지원",
      "역할별 권한 관리",
      "팀원 프로필 관리",
      "연습 일정 추적"
    ],
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-600",
    accent: "bg-purple-500"
  },
  {
    icon: Megaphone,
    title: "공지사항",
    subtitle: "Notices",
    description: "팀 내 소통을 강화하고 중요한 정보를 놓치지 마세요",
    features: [
      "실시간 알림",
      "카테고리별 분류",
      "중요 공지 고정",
      "팀 소통 강화"
    ],
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-600",
    accent: "bg-orange-500"
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
            예배팀을 위한
            <br />
            <span className="text-primary">4가지 핵심 기능</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            체계적인 관리로 예배 준비를 혁신하고, 팀워크를 강화하세요
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className={`h-full hover:shadow-xl transition-all duration-300 border ${feature.color} group cursor-pointer`}>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${feature.color} group-hover:scale-110 transition-transform`}>
                      <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium mb-3">
                        {feature.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {feature.features.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-3">
                        <div className={`w-5 h-5 rounded-full ${feature.accent} flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-foreground font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group">
                    자세히 보기
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
              모든 기능이 하나로 연결됩니다
            </h3>
            <p className="text-muted-foreground mb-6">
              각 모듈이 유기적으로 연동되어 더욱 효율적인 예배 준비가 가능합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                무료로 체험하기
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                데모 영상 보기
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}