"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Task Manager',
    description: 'タスク管理にAIを活用し、優先順位付けと時間見積もりを自動化するアプリケーション',
    technologies: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
    demoLink: 'https://ai-task-manager-demo.com',
    githubLink: 'https://github.com/yourusername/ai-task-manager'
  },
  {
    title: 'Sentiment Analysis Dashboard',
    description: '自然言語処理を用いて、ソーシャルメディアの投稿から感情分析を行うダッシュボード',
    technologies: ['Vue.js', 'Python', 'Flask', 'NLTK', 'D3.js'],
    demoLink: 'https://sentiment-analysis-dashboard.com',
    githubLink: 'https://github.com/yourusername/sentiment-analysis-dashboard'
  },
  {
    title: 'AI-Enhanced E-commerce Platform',
    description: 'AIを活用した商品レコメンデーションと価格最適化機能を持つECプラットフォーム',
    technologies: ['Next.js', 'GraphQL', 'TensorFlow.js', 'PostgreSQL'],
    demoLink: 'https://ai-ecommerce-platform.com',
    githubLink: 'https://github.com/yourusername/ai-ecommerce-platform'
  }
];

const Portfolio = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading placeholder
  }

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ポートフォリオ
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;