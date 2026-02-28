import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../data/projects';
import { X, MapPin, CheckCircle2, Image as ImageIcon, Box, FileText } from 'lucide-react';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

type Tab = 'overview' | 'gallery' | '3d';

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none"
          >
            <div className="bg-white w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl pointer-events-auto flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-stone-100">
                <div>
                  <h2 className="text-2xl font-bold text-stone-900 leading-tight">
                    {project.title}
                  </h2>
                  <div className="flex items-center text-stone-500 text-sm font-medium mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-stone-800" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-stone-100 px-6">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === 'overview'
                      ? 'border-blue-600 text-blue-700'
                      : 'border-transparent text-stone-500 hover:text-stone-700'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  Tổng quan
                </button>
                <button
                  onClick={() => setActiveTab('gallery')}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === 'gallery'
                      ? 'border-blue-600 text-blue-700'
                      : 'border-transparent text-stone-500 hover:text-stone-700'
                  }`}
                >
                  <ImageIcon className="w-4 h-4" />
                  Thư viện ảnh ({project.gallery.length})
                </button>
                {project.modelUrl && (
                  <button
                    onClick={() => setActiveTab('3d')}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === '3d'
                        ? 'border-blue-600 text-blue-700'
                        : 'border-transparent text-stone-500 hover:text-stone-700'
                    }`}
                  >
                    <Box className="w-4 h-4" />
                    Mô hình 3D
                  </button>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 bg-stone-50">
                {activeTab === 'overview' && (
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/2">
                      <div className="rounded-xl shadow-md overflow-hidden bg-stone-100">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-auto max-h-[500px] object-contain"
                          decoding="async"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col">
                      <div className="prose prose-stone mb-8">
                        <p className="text-stone-600 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-auto">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-4">
                          Hạng mục thực hiện
                        </h3>
                        <ul className="space-y-3 mb-6">
                          {project.details.map((detail, index) => (
                            <li key={index} className="flex items-start text-stone-700">
                              <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 shrink-0" />
                              <span className="text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {project.software.map((sw, i) => (
                            <span key={i} className="px-2 py-1 bg-white border border-stone-200 text-stone-600 text-xs font-mono rounded shadow-sm">
                              {sw}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'gallery' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.gallery.map((img, idx) => (
                      <div 
                        key={idx} 
                        className="group relative aspect-video overflow-hidden rounded-xl bg-stone-100 shadow-sm border border-stone-200 cursor-zoom-in"
                        onClick={() => window.open(img, '_blank')}
                        title="Click để xem ảnh gốc chất lượng cao"
                      >
                        <img
                          src={img}
                          alt={`Gallery ${idx + 1}`}
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <span className="bg-white/90 text-stone-800 text-xs px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
                            Xem ảnh gốc
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === '3d' && (
                  <div className="w-full h-full min-h-[400px] bg-stone-900 rounded-xl flex items-center justify-center relative overflow-hidden">
                    {/* Simulation of a 3D Viewer */}
                    <div className="absolute inset-0 opacity-20" 
                         style={{ 
                           backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', 
                           backgroundSize: '40px 40px',
                           transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)'
                         }} 
                    />
                    
                    <div className="text-center z-10">
                      <Box className="w-16 h-16 text-blue-500 mx-auto mb-4 animate-pulse" />
                      <h3 className="text-white font-bold text-xl mb-2">3D Model Viewer</h3>
                      <p className="text-stone-400 text-sm mb-6">Interactive WebGL Preview</p>
                      <button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-colors">
                        Load Model (LOD 300)
                      </button>
                    </div>

                    {/* Fake UI Controls */}
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      <div className="w-8 h-8 bg-stone-800 rounded flex items-center justify-center text-white text-xs">3D</div>
                      <div className="w-8 h-8 bg-stone-800 rounded flex items-center justify-center text-white text-xs">Top</div>
                      <div className="w-8 h-8 bg-stone-800 rounded flex items-center justify-center text-white text-xs">Iso</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
