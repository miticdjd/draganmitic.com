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
          These are the projects I’ve built and continue to work on. They represent my ideas, experiments, and long-term efforts to create meaningful products I truly care about.
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
