"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'AIを活用したフロントエンド開発の未来',
    description: 'AIツールがフロントエンド開発をどのように変革するか、その可能性と課題について考察します。',
    date: '2024-05-15',
    readMoreLink: '/blog/ai-frontend-development-future'
  },
  {
    title: 'RAG（検索拡張生成）技術の最新動向',
    description: 'RAG技術の基本概念から最新の応用例まで、AIによる情報検索の革新についてご紹介します。',
    date: '2024-04-22',
    readMoreLink: '/blog/rag-technology-trends'
  },
  {
    title: 'フロントエンドエンジニアのためのAI活用術',
    description: 'AIツールを効果的に活用してフロントエンド開発の生産性を向上させる方法をご紹介します。',
    date: '2024-03-10',
    readMoreLink: '/blog/ai-tools-for-frontend-engineers'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ブログ
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{post.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full" asChild>
                    <a href={post.readMoreLink}>
                      続きを読む <ArrowRight className="ml-2 h-4 w-4" />
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

export default Blog;