import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';
import { getImageSrcSet, getOptimizedImageUrl } from '../lib/media';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, index }) => {
  const imageSrcSet = getImageSrcSet(project.imageUrl, [600, 900, 1200]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onClick={() => onClick(project)}
    >
      <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4 bg-stone-200">
        <img
          src={getOptimizedImageUrl(project.imageUrl, 1200)}
          srcSet={imageSrcSet}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full p-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
          <ArrowUpRight className="w-5 h-5 text-stone-900" />
        </div>
      </div>
      
      <div>
        <div className="flex justify-between items-baseline mb-1">
          <span className="text-xs font-mono text-stone-500 uppercase tracking-wider">
            {project.category}
          </span>
          <span className="text-xs text-stone-400">
            {project.location}
          </span>
        </div>
        <h3 className="text-lg font-serif font-semibold text-stone-900 group-hover:text-emerald-700 transition-colors">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
};
