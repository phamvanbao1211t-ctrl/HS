import React, { useState } from 'react';
import { projects, Project } from './data/projects';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Github, Linkedin, Globe, Layers, Database, Code, Box, PenTool, Monitor } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...new Set(projects.map((project) => project.category))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-stone-50 selection:bg-blue-100 selection:text-blue-900">
      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-900 text-white flex items-center justify-center rounded-lg font-mono font-bold text-xl shadow-lg">
              PB
            </div>
            <div>
              <h1 className="font-sans font-bold text-lg leading-none text-stone-900 tracking-tight">PHẠM VĂN BẢO</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-medium">BIM Specialist • Revit Modeling • Technical Documentation</p>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-8 text-sm font-medium text-stone-600">
            <a href="#about" className="hover:text-blue-900 transition-colors">Giới thiệu</a>
            <a href="#skills" className="hover:text-blue-900 transition-colors">Kỹ năng</a>
            <a href="#projects" className="hover:text-blue-900 transition-colors">Dự án</a>
            <a href="#contact" className="hover:text-blue-900 transition-colors">Liên hệ</a>
          </nav>

          <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-stone-900 text-white rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm">
            <Download className="w-4 h-4" />
            <span>Tải CV (PDF)</span>
          </button>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="about" className="min-h-[85vh] flex items-center relative overflow-hidden bg-stone-50">
          <div className="absolute inset-0 z-0">
             <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent" />
             <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
             {/* Abstract Grid Background */}
             <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <span className="h-px w-8 bg-blue-600"></span>
                  <span className="text-blue-700 text-sm font-bold tracking-widest uppercase">BIM SPECIALIST | REVIT MODELING EXPERT</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-sans font-bold text-stone-900 mb-6 leading-[1.1] tracking-tight">
                  Phạm Văn Bảo
                </h1>
                <p className="text-lg text-stone-600 mb-8 max-w-lg leading-relaxed">
                  BIM Engineer chuyên triển khai và quản lý mô hình Revit từ giai đoạn concept đến bản vẽ thi công. <br className="hidden md:block" />
                  Kinh nghiệm làm việc với dự án quốc tế, đảm bảo tiêu chuẩn kỹ thuật, độ chính xác mô hình và phối hợp hiệu quả giữa các bộ môn.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a href="#projects" className="px-8 py-3 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800 transition-all hover:shadow-lg hover:-translate-y-0.5">
                    Xem dự án
                  </a>
                  <a href="#contact" className="px-8 py-3 bg-white border border-stone-200 text-stone-900 rounded-lg font-medium hover:bg-stone-50 transition-all hover:border-stone-300">
                    Liên hệ ngay
                  </a>
                </div>
              </motion.div>
            </div>
            
            <div className="relative hidden md:block">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-800 bg-stone-950">
                   {/* BIM Typography Graphic */}
                   <div className="w-full aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                      {/* Grid Background */}
                      <div className="absolute inset-0 opacity-20" 
                           style={{ 
                             backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', 
                             backgroundSize: '40px 40px',
                             transform: 'perspective(1000px) rotateX(10deg) scale(1.2)'
                           }} 
                      />
                      
                      {/* Large BIM Text */}
                      <div className="relative z-10 flex flex-col items-center">
                        <h1 className="text-[8rem] sm:text-[10rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-blue-400 to-emerald-400 tracking-tighter select-none filter drop-shadow-2xl">
                          BIM
                        </h1>
                        <div className="w-full flex justify-between text-blue-500/60 font-mono text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.5em] mt-2 px-2">
                          <span>BUILDING</span>
                          <span>INFORMATION</span>
                          <span>MODELING</span>
                        </div>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15),transparent_70%)]" />
                   </div>
                   
                   {/* Floating UI Elements simulating BIM Interface */}


                   <div className="absolute bottom-8 right-[-20px] bg-white p-4 rounded-xl shadow-xl border border-stone-100 max-w-xs animate-bounce-slow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                          <Database className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-stone-900">Technical Drawing</div>
                          <div className="text-xs text-stone-500">High Precision</div>
                        </div>
                      </div>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white border-y border-stone-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-stone-900 mb-4">Kỹ Năng Chuyên Môn</h2>
              <p className="text-stone-500 max-w-2xl mx-auto">
                Kết hợp tư duy kiến trúc với năng lực BIM chuyên sâu, đáp ứng tiêu chuẩn kỹ thuật và yêu cầu dự án trong và ngoài nước.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  icon: <Layers className="w-6 h-6" />, 
                  title: "BIM / Revit Modeling", 
                  desc: "Triển khai và quản lý mô hình BIM (LOD 200–400), đảm bảo độ chính xác, tính đồng bộ và khả năng khai thác dữ liệu phục vụ thi công.",
                  level: "Nâng cao"
                },
                { 
                  icon: <PenTool className="w-6 h-6" />, 
                  title: "Triển khai hồ sơ kỹ thuật", 
                  desc: "Phát triển bản vẽ kỹ thuật chi tiết từ mô hình Revit, tuân thủ tiêu chuẩn xây dựng và yêu cầu của chủ đầu tư.",
                  level: "Nâng cao"
                },
                { 
                  icon: <Box className="w-6 h-6" />, 
                  title: "Phối hợp đa bộ môn (Coordination)", 
                  desc: "Phối hợp Architecture – Structure – MEP, kiểm soát clash và tối ưu mô hình nhằm giảm xung đột trong quá trình thi công",
                  level: "Tốt"
                },
                { 
                  icon: <Monitor className="w-6 h-6" />, 
                  title: "Phần mềm", 
                  desc: "Ứng dụng hiệu quả các công cụ trong modeling, documentation và kiểm soát chất lượng mô hình.",
                  tools: ["Revit", "AutoCAD", "Naviswork", "Enscape"]
                }
              ].map((skill, i) => (
                <div key={i} className="p-6 bg-stone-50 rounded-xl border border-stone-100 hover:border-blue-200 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 bg-white rounded-lg border border-stone-200 flex items-center justify-center text-stone-700 mb-4 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2">{skill.title}</h3>
                  <p className="text-sm text-stone-600 mb-4 leading-relaxed">{skill.desc}</p>
                  {skill.level && (
                    <span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded">
                      {skill.level}
                    </span>
                  )}
                  {skill.tools && (
                    <div className="flex flex-wrap gap-2">
                      {skill.tools.map(t => (
                        <span key={t} className="text-[10px] font-mono uppercase bg-stone-200 text-stone-600 px-2 py-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-4xl font-bold text-stone-900 mb-4 tracking-tight">Dự án tiêu biểu</h2>
                <p className="text-stone-500 max-w-md">
                  Các dự án đã tham gia thực hiện trong và ngoài nước.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      filter === cat 
                        ? 'bg-blue-900 text-white shadow-md' 
                        : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onClick={(p) => setSelectedProject(p)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-stone-900 text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/10 skew-x-12 transform origin-top"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-bold mb-6 tracking-tight">Liên hệ</h2>
                <p className="text-stone-400 mb-8 leading-relaxed max-w-md">
                  Tôi luôn sẵn sàng trao đổi về các cơ hội hợp tác và dự án mới.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-stone-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-900/50 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-stone-500 mb-1">Email</div>
                      <a href="mailto:Phambao152500276@gmail.com" className="text-lg hover:text-blue-400 transition-colors">Phambao152500276@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-stone-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-900/50 transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-stone-500 mb-1">Địa chỉ</div>
                      <span className="text-lg">Hà Nội, Việt Nam</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-400 mb-2">Họ tên</label>
                      <input type="text" className="w-full bg-stone-950/50 border border-stone-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-white transition-colors" placeholder="Tên của bạn" />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-400 mb-2">Email</label>
                      <input type="email" className="w-full bg-stone-950/50 border border-stone-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-white transition-colors" placeholder="email@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-400 mb-2">Chủ đề</label>
                    <input type="text" className="w-full bg-stone-950/50 border border-stone-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-white transition-colors" placeholder="Hợp tác dự án..." />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-400 mb-2">Nội dung</label>
                    <textarea rows={4} className="w-full bg-stone-950/50 border border-stone-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 text-white transition-colors" placeholder="Lời nhắn..."></textarea>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg transition-colors shadow-lg hover:shadow-blue-900/20">
                    Gửi tin nhắn
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-stone-950 text-stone-500 py-8 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© 2024 Phạm Văn Bảo. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
