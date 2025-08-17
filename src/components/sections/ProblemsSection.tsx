"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Clock, FileX, Users, MessageCircleX } from "lucide-react";

const problems = [
  {
    icon: FileX,
    title: "찬양곡 관리의 어려움",
    description: "여러 키 버전의 악보가 흩어져 있고, 필요할 때 찾기 어려워요",
    pain: "악보를 찾느라 연습 시간이 줄어들어요"
  },
  {
    icon: Clock,
    title: "세트리스트 작성의 번거로움",
    description: "매주 세트리스트를 수작업으로 만들고 팀원들에게 공유하기 힘들어요",
    pain: "반복적인 작업으로 시간이 낭비되고 있어요"
  },
  {
    icon: Users,
    title: "팀원 간 소통 부족",
    description: "연습 일정, 곡 변경사항 등을 개별적으로 연락해야 해요",
    pain: "정보 전달이 늦어져 혼란이 생겨요"
  },
  {
    icon: MessageCircleX,
    title: "체계적이지 못한 관리",
    description: "예배 준비 과정이 매번 달라서 일관성이 없어요",
    pain: "예배 준비가 스트레스가 되고 있어요"
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
            지금 예배팀이 겪고 있는
            <br />
            <span className="text-red-600">현실적인 문제들</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            매주 반복되는 예배 준비, 정말 이렇게 어려워야 할까요?
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
              <Card className="p-6 h-full hover:shadow-lg transition-shadow border border-red-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                      <problem.icon className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <p className="text-sm text-red-800 font-medium">
                        💔 {problem.pain}
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
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-red-800 mb-4">
              결국 이런 상황이 반복됩니다
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-red-700">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>예배 준비 시간 증가</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-4 h-4" />
                <span>팀워크 저하</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MessageCircleX className="w-4 h-4" />
                <span>스트레스 누적</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}