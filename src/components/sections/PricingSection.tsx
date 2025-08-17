"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight, Heart, Crown, Building } from "lucide-react";

const plans = [
  {
    name: "무료 플랜",
    subtitle: "시작하는 팀을 위해",
    price: "0",
    period: "영구 무료",
    description: "기본 기능으로 예배팀 관리를 시작해보세요",
    icon: Heart,
    color: "border-muted",
    buttonColor: "outline",
    features: [
      "팀원 5명까지",
      "찬양곡 50곡까지",
      "세트리스트 10개까지",
      "기본 공지사항",
      "모바일 앱 이용",
      "이메일 지원"
    ],
    limitations: [
      "고급 통계 제한",
      "커스텀 태그 제한"
    ]
  },
  {
    name: "프로 플랜",
    subtitle: "성장하는 팀을 위해",
    price: "29,000",
    originalPrice: "39,000",
    period: "월",
    description: "모든 기능을 제한 없이 사용하세요",
    icon: Star,
    color: "border-primary",
    buttonColor: "default",
    popular: true,
    features: [
      "무제한 팀원",
      "무제한 찬양곡",
      "무제한 세트리스트",
      "고급 공지사항 관리",
      "상세 통계 및 분석",
      "커스텀 태그 시스템",
      "우선 기술 지원",
      "자동 백업",
      "팀별 권한 관리"
    ]
  },
  {
    name: "교회 플랜",
    subtitle: "대형 교회를 위해",
    price: "99,000",
    period: "월",
    description: "여러 팀을 관리하는 대형 교회용 솔루션",
    icon: Building,
    color: "border-purple-500",
    buttonColor: "secondary",
    enterprise: true,
    features: [
      "프로 플랜 모든 기능",
      "다중 팀 통합 관리",
      "교회 전체 통계",
      "관리자 대시보드",
      "API 접근 권한",
      "맞춤 교육 세션",
      "전담 고객 성공 매니저",
      "24/7 전화 지원",
      "온사이트 설정 지원"
    ]
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

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            교회 규모에 맞는
            <br />
            <span className="text-primary">합리적인 요금제</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            작은 예배팀부터 대형 교회까지, 모든 규모에 적합한 플랜을 준비했습니다
          </p>
          <div className="inline-flex bg-muted rounded-lg p-1">
            <div className="px-4 py-2 bg-background rounded-md text-sm font-medium">월간 결제</div>
            <div className="px-4 py-2 text-sm text-muted-foreground">연간 결제 (20% 할인)</div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className={`h-full hover:shadow-xl transition-all duration-300 border-2 ${plan.color} relative ${plan.popular ? 'scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      가장 인기
                    </div>
                  </div>
                )}
                
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                      <plan.icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {plan.subtitle}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex items-baseline justify-center space-x-2">
                        {plan.originalPrice && (
                          <span className="text-lg text-muted-foreground line-through">
                            ₩{plan.originalPrice}
                          </span>
                        )}
                        <span className="text-4xl font-bold text-foreground">
                          ₩{plan.price}
                        </span>
                        <span className="text-muted-foreground">
                          /{plan.period}
                        </span>
                      </div>
                      {plan.originalPrice && (
                        <div className="text-sm text-green-600 font-medium mt-1">
                          25% 할인 중
                        </div>
                      )}
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.limitations && plan.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="w-3 h-3 bg-muted-foreground rounded-full"></span>
                        </div>
                        <span className="text-muted-foreground text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant={plan.buttonColor as any} 
                    className="w-full" 
                    size="lg"
                  >
                    {plan.price === "0" ? "무료로 시작하기" : "무료 체험 시작"}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  
                  {plan.enterprise && (
                    <p className="text-xs text-center text-muted-foreground mt-3">
                      맞춤 견적 문의 가능
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-muted/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              모든 플랜에 포함된 혜택
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">30일 무료 체험</h4>
                <p className="text-sm text-muted-foreground">신용카드 등록 불필요</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Crown className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">무료 설정 지원</h4>
                <p className="text-sm text-muted-foreground">전담팀이 도입 지원</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Building className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">데이터 보안</h4>
                <p className="text-sm text-muted-foreground">SSL 암호화 및 백업</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">언제든 해지</h4>
                <p className="text-sm text-muted-foreground">약정 없이 자유로운 해지</p>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm">
              궁금한 점이 있으시면 언제든 문의해주세요. 
              <a href="#" className="text-primary hover:underline ml-1">1588-0000</a> 또는 
              <a href="#" className="text-primary hover:underline ml-1">contact@byworship.com</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}