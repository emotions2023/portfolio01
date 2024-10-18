"use client"

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">小森貴文</h1>
          <p className="text-xl md:text-2xl mb-8">AIと人間の共創で、無限の可能性を切り開く</p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
          >
            <Brain size={100} className="mx-auto mb-8" />
          </motion.div>
          <Button size="lg" asChild>
            <a href="#contact">お問い合わせ</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;