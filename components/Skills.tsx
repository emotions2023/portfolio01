"use client"

import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

const skillsData = [
  { category: 'フロントエンド開発', skills: [
    { name: 'HTML5/CSS3', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Vue.js', level: 75 },
  ]},
  { category: 'バックエンド開発', skills: [
    { name: 'PHP', level: 70 },
    { name: 'Laravel', level: 65 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 80 },
  ]},
  { category: 'データベース', skills: [
    { name: 'SQL', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'Firebase', level: 70 },
    { name: 'Supabase', level: 65 },
  ]},
  { category: 'AI と機械学習', skills: [
    { name: 'ChatGPT API', level: 85 },
    { name: 'Claude API', level: 80 },
    { name: 'Notion AI', level: 75 },
    { name: 'V0 / Bolt / Create', level: 70 },
  ]},
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          スキルセット
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <motion.div 
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
              {category.skills.map((skill) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="w-full" />
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;