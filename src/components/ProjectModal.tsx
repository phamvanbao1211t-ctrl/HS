import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../data/projects';
import { X, MapPin, CheckCircle2, Image as ImageIcon, Box, FileText } from 'lucide-react';
import { getImageSrcSet, getOptimizedImageUrl, toSketchfabEmbedUrl } from '../lib/media';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

type Tab = 'overview' | 'gallery' | '3d';

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const mainImageSrcSet = getImageSrcSet(project.imageUrl, [900, 1400, 1800]);
  const sketchfabEmbedUrl = toSketchfabEmbedUrl(project.modelUrl ?? '');
  const hasSketchfabPlaceholder = (project.modelUrl ?? '').includes('embed-placeholder');

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
                          src={getOptimizedImageUrl(project.imageUrl, 1800)}
                          srcSet={mainImageSrcSet}
                          sizes="(min-width: 768px) 50vw, 100vw"
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
                          src={getOptimizedImageUrl(img, 1400)}
                          srcSet={getImageSrcSet(img, [700, 1100, 1400])}
                          sizes="(min-width: 768px) 50vw, 100vw"
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
                  <div className="w-full h-full min-h-[480px] bg-stone-900 rounded-xl overflow-hidden border border-stone-700">
                    {hasSketchfabPlaceholder ? (
                      <div className="h-full min-h-[480px] flex items-center justify-center text-center p-8">
                        <div>
                          <Box className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                          <h3 className="text-white font-semibold text-lg mb-2">Thêm URL Sketchfab để hiển thị mô hình 3D</h3>
                          <p className="text-stone-300 text-sm">
                            Cập nhật `modelUrl` trong dữ liệu dự án bằng URL model thật từ Sketchfab.
                          </p>
                        </div>
                      </div>
                    ) : sketchfabEmbedUrl ? (
                      <iframe
                        title={`${project.title} - Sketchfab Model`}
                        src={sketchfabEmbedUrl}
                        className="w-full h-full min-h-[480px]"
                        loading="lazy"
                        allow="autoplay; fullscreen; xr-spatial-tracking"
                        allowFullScreen
                      />
                    ) : (
                      <div className="h-full min-h-[480px] flex items-center justify-center text-center p-8">
                        <div>
                          <Box className="w-12 h-12 text-stone-400 mx-auto mb-4" />
                          <h3 className="text-white font-semibold text-lg mb-2">Không thể tải mô hình 3D</h3>
                          <p className="text-stone-300 text-sm">
                            URL mô hình chưa đúng định dạng Sketchfab. Hãy dùng URL dạng `.../models/&lt;id&gt;/embed` hoặc `.../3d-models/...`.
                          </p>
                        </div>
                      </div>
                    )}
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
