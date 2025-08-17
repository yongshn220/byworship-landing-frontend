"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, TrendingUp, Users, Award, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "시간 절약",
    value: "80%",
    description: "수작업 시간 단축",
    detail: "기존 3시간 걸리던 예배 준비를 1시간으로 단축",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 border-blue-200"
  },
  {
    icon: TrendingUp,
    title: "효율성 증대",
    value: "3배",
    description: "예배 준비 최적화",
    detail: "체계적인 관리로 예배 품질 향상과 준비 효율성 극대화",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50 border-green-200"
  },
  {
    icon: Users,
    title: "팀 협업",
    value: "100%",
    description: "소통 개선",
    detail: "실시간 정보 공유로 모든 팀원이 같은 정보를 공유",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 border-purple-200"
  },
  {
    icon: Award,
    title: "전문성",
    value: "1등",
    description: "예배팀 전용 설계",
    detail: "교회 환경에 특화된 기능으로 전문적인 예배 관리",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50 border-orange-200"
  }
];

const stats = [
  { label: "사용 교회", value: "1,000+", unit: "개" },
  { label: "관리되는 곡", value: "50,000+", unit: "곡" },
  { label: "월 활성 사용자", value: "25,000+", unit: "명" },
  { label: "고객 만족도", value: "98%", unit: "" }
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

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            ByWorship으로 얻는
            <br />
            <span className="text-primary">확실한 혜택</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            단순한 도구가 아닌, 예배팀의 성장을 위한 파트너입니다
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className={`h-full hover:shadow-xl transition-all duration-300 border ${benefit.bgColor} group cursor-pointer`}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-white to-gray-50 border shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className={`text-4xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent mb-2`}>
                    {benefit.value}
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-sm font-medium text-muted-foreground mb-3">
                    {benefit.description}
                  </p>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.detail}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/5 via-blue-500/5 to-purple-500/5 rounded-3xl p-8 lg:p-12 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              신뢰할 수 있는 수치로 검증된 효과
            </h3>
            <p className="text-muted-foreground">
              실제 사용 교회들의 데이터를 기반으로 한 성과입니다
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                  {stat.unit && <span className="text-sm ml-1">{stat.unit}</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
              예배팀 리더들이 <br />
              <span className="text-primary">가장 많이 경험하는 변화</span>
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">스트레스 감소</p>
                  <p className="text-sm text-muted-foreground">복잡한 관리 업무에서 해방되어 예배 자체에 집중</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">팀워크 향상</p>
                  <p className="text-sm text-muted-foreground">투명한 정보 공유로 팀원 간 신뢰도 증가</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">예배 품질 개선</p>
                  <p className="text-sm text-muted-foreground">체계적인 준비로 더욱 은혜로운 예배 진행</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <Card className="bg-gradient-to-br from-primary/5 to-blue-500/5 border border-primary/10">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">
                    교회 전용 설계의 차이
                  </h4>
                  <p className="text-muted-foreground">
                    일반적인 프로젝트 관리 도구와 달리, 
                    교회 예배팀의 특수한 요구사항을 완벽히 이해하고 
                    반영한 전문 솔루션입니다.
                  </p>
                  <div className="pt-4">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">교회 환경 최적화</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}