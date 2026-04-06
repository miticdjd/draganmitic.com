'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/lib/constants';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsClient() {
  return (
    <div className="space-y-16 sm:space-y-20">
      <header className="max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl"
        >
          Things I&apos;ve made trying to put my mark on the universe.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
        >
          I&apos;ve worked on tons of little projects over the years but these
          are the ones that I&apos;m most proud of. Many of them are
          open-source, so if you see something that piques your interest, check
          out the code and contribute if you have ideas for how it can be
          improved.
        </motion.p>
      </header>

      <div className="relative">
        <ul className="flex flex-col gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}
