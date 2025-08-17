"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "김목사",
    role: "새교회 예배팀 리더",
    church: "새교회",
    content: "ByWorship 덕분에 예배 준비 시간이 절반으로 줄었어요. 특히 키별 악보 관리 기능이 정말 유용합니다. 이제 찾고 싶은 곡을 몇 초 만에 원하는 키로 찾을 수 있어서 연습에 더 집중할 수 있게 되었습니다.",
    rating: 5,
    image: "/api/placeholder/64/64"
  },
  {
    name: "이집사",
    role: "청년부 예배팀",
    church: "소망교회",
    content: "세트리스트 공유가 이렇게 간단할 줄 몰랐어요. 팀원들 모두 실시간으로 확인할 수 있어 너무 편해요. 예전에는 카톡으로 일일이 보내야 했는데, 이제 한 번만 작성하면 모든 팀원이 자동으로 확인할 수 있어서 정말 혁신적입니다.",
    rating: 5,
    image: "/api/placeholder/64/64"
  },
  {
    name: "박전도사",
    role: "예배 인도자",
    church: "은혜교회",
    content: "팀 관리 기능이 특히 마음에 들어요. 각 팀원의 참석 현황과 역할을 한눈에 볼 수 있어서 예배 계획을 세우기가 훨씬 수월해졌습니다. 연습 일정 관리도 자동화되어서 행정 업무 부담이 크게 줄었어요.",
    rating: 5,
    image: "/api/placeholder/64/64"
  },
  {
    name: "최성도",
    role: "기타리스트",
    church: "믿음교회",
    content: "곡별 태그 시스템이 정말 똑똑해요. 분위기나 템포별로 곡을 찾을 수 있어서 세트리스트 구성할 때 아이디어가 많이 생겨요. 통계 기능으로 어떤 곡을 자주 하는지도 알 수 있어서 레퍼토리 관리에 도움이 됩니다.",
    rating: 5,
    image: "/api/placeholder/64/64"
  },
  {
    name: "정권사",
    role: "드러머",
    church: "사랑교회",
    content: "공지사항 기능으로 팀 소통이 많이 개선되었어요. 중요한 알림은 따로 고정되고, 카테고리별로 정리되어서 필요한 정보를 빠르게 찾을 수 있습니다. 예배팀 단톡방이 훨씬 정리되고 효율적으로 변했어요.",
    rating: 5,
    image: "/api/placeholder/64/64"
  },
  {
    name: "장집사",
    role: "키보디스트",
    church: "평강교회",
    content: "처음에는 새로운 시스템 사용이 걱정되었는데, 인터페이스가 너무 직관적이어서 금방 익숙해졌어요. 지원팀에서 설정까지 도와주셔서 도입이 수월했습니다. 이제 ByWorship 없이는 예배 준비를 상상할 수 없어요.",
    rating: 5,
    image: "/api/placeholder/64/64"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            전국 교회 예배팀의
            <br />
            <span className="text-primary">진솔한 후기</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            ByWorship을 사용하며 실제로 경험한 변화들을 들어보세요
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 border border-muted group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-8 h-8 text-primary/20" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-foreground leading-relaxed mb-6 text-sm">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.church}
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
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/5 to-blue-500/5 border border-primary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              98% 고객 만족도를 달성한 이유
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">고객 지원</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">무료</div>
                <div className="text-sm text-muted-foreground">설정 지원</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">30일</div>
                <div className="text-sm text-muted-foreground">무료 체험</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              교회별 맞춤 설정부터 사용법 교육까지, 성공적인 도입을 위해 전담팀이 지원합니다
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="bg-primary text-primary-foreground max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">
                여러분의 후기도 들려주세요
              </h3>
              <p className="mb-6 opacity-90">
                ByWorship 사용 후 어떤 변화를 경험하셨나요?
                여러분의 이야기를 기다립니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <div className="text-sm opacity-80">
                  📧 feedback@byworship.com
                </div>
                <div className="text-sm opacity-80">
                  📞 1588-0000
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}