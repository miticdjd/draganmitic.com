'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
      className="group relative"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <motion.div
          whileHover={{ scale: 1.01, y: -2 }}
          className="relative flex flex-col sm:flex-row items-start gap-6 rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition-all hover:border-brand/20 hover:shadow-md dark:border-zinc-700/40 dark:bg-zinc-800/50 dark:hover:border-brand/40 overflow-hidden"
        >
          {/* Upper Right Corner Arrow - Visible on Hover */}
          <div className="absolute top-4 right-4 text-brand opacity-0 transition-all duration-300 transform translate-y-2 -translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>

          {/* Logo container - Square with small rounded corners */}
          <div className="relative flex h-14 w-14 flex-none items-center justify-center rounded-xl bg-zinc-50 shadow-inner ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-white/10 overflow-hidden mt-1">
            <img
              src={project.logo}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Text Content */}
          <div className="flex-auto text-left pr-6">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-brand transition-colors">
              {project.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
            <div className="mt-4 flex items-center justify-start gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 group-hover:text-brand transition-colors">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4 flex-none fill-zinc-400 group-hover:fill-brand transition-colors"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              {project.linkText}
            </div>
          </div>
        </motion.div>
      </a>
    </motion.li>
  );
}
