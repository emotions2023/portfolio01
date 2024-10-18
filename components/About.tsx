"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap, Heart } from 'lucide-react';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          {...fadeIn}
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="mr-2" />
                  経歴
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>2017: 高校卒業、IT系専門学校入学</li>
                  <li>2019: プロダンサーとして活動</li>
                  <li>2021: 社内SEとして勤務</li>
                  <li>2023: フロントエンドエンジニアとして就職</li>
                  <li>2024: AI開発/研究部署へ移動</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="mr-2" />
                  仕事哲学
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>革新と変化への適応</li>
                  <li>能動的な学習姿勢</li>
                  <li>時代認識と俯瞰的視点</li>
                  <li>謙虚さと協調性</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.6 }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="mr-2" />
                  興味・関心分野
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>先端AI技術（AGI、RAGなど）</li>
                  <li>技術トレンド分析</li>
                  <li>社会科学と技術の交差点</li>
                  <li>産業と技術の融合</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;