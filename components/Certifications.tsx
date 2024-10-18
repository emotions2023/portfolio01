"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Book } from 'lucide-react';

const certifications = [
  {
    name: '基本情報技術者試験',
    organization: '独立行政法人情報処理推進機構（IPA）',
    year: '2022'
  },
  {
    name: '情報検定 情報システム試験 プログラマ認定',
    organization: '文部科学省後援',
    year: '2021'
  },
  {
    name: '情報検定 情報活用試験 1級',
    organization: '文部科学省後援',
    year: '2020'
  }
];

const trainings = [
  {
    name: 'Deep Learning Osaka【大阪】',
    organization: 'KANSAI AI PUB（関西×人工知能×場）',
    year: '2024',
    description: 'ディープラーニングの最新トレンドと実践的な応用について学ぶ'
  },
  {
    name: '大阪駆動開発AI',
    year: '2024',
    description: 'AI技術の実務応用とソフトウェア開発プロセスの統合について学ぶ'
  },
  {
    name: '大阪ものづくりワールド',
    year: '2024',
    description: '最新の製造技術とIoT、AIの融合についての展示会とセミナーに参加'
  },
  {
    name: 'EdgeTech+',
    year: '2024',
    description: 'エッジコンピューティングと最新のAI技術の統合に関するワークショップ'
  }
];

const Certifications = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // または適切なローディングプレースホルダー
  }

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          資格・トレーニング
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="mr-2" /> 取得資格
            </h3>
            {certifications.map((cert) => (
              <Card key={cert.name} className="mb-4">
                <CardHeader>
                  <CardTitle>{cert.name}</CardTitle>
                  <CardDescription>{cert.organization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>取得年: {cert.year}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Book className="mr-2" /> 参加したトレーニング
            </h3>
            {trainings.map((training) => (
              <Card key={training.name} className="mb-4">
                <CardHeader>
                  <CardTitle>{training.name}</CardTitle>
                  <CardDescription>{training.year}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{training.description}</p>
                  {training.organization && <p>主催: {training.organization}</p>}
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;