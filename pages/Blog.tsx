
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-7xl mx-auto px-6 py-24">
      {/* Hero Section */}
      <div className="text-center md:text-left mb-24">
        <div className="inline-flex items-center space-x-3 mb-8 p-1 px-4 glass rounded-full border border-white/5 reveal">
           <Tag size={14} className="text-[#34A853]" />
           <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Bilgi Hazinesi & Stratejiler</span>
        </div>
        <h1 className="text-4xl md:text-8xl font-logo text-gradient reveal uppercase tracking-tighter leading-[0.9] mb-10">
          BLOG & <br /> REHBERLER
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl leading-relaxed font-medium reveal">
          Dijital dünyanın en güncel trendlerini, SEO sırlarını ve yapay zeka stratejilerini uzman ekibimizden öğrenin. 
          <span className="text-gradient font-black"> 2026'nın dijital kurallarını biz yazıyoruz.</span>
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {BLOG_POSTS.map((post, index) => (
          <article key={post.id} className="reveal group">
            <Link to={`/blog/${post.id}`} className="block h-full">
              <div className="rotating-border-container rounded-[2.5rem] p-0.5 h-full glow-indigo group-hover:glow-cyan transition-all duration-500">
                <div className="bg-[#050510] rounded-[2.4rem] overflow-hidden flex flex-col h-full relative z-10">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={`Opus Dijital Blog: ${post.title}`} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1.5 bg-[#4285F4]/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-white border border-white/10">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center space-x-3 mb-6 text-gray-500">
                      <Calendar size={14} className="text-[#EA4335]" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">2026 BASKISI</span>
                    </div>
                    
                    <h3 className="text-xl font-logo text-white group-hover:text-gradient transition-colors duration-300 uppercase tracking-tight leading-tight mb-6 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed font-medium mb-8 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center space-x-3 text-[10px] font-black text-[#FBBC05] uppercase tracking-[0.4em] group-hover:translate-x-3 transition-transform">
                      <span>OKUMAYA BAŞLA</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* Bottom Newsletter or CTA Snippet */}
      <div className="mt-40 reveal text-center">
        <div className="glass p-12 md:p-20 rounded-[4rem] border border-white/5 relative overflow-hidden">
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#34A853]/10 rounded-full blur-[80px]" />
          <h2 className="text-2xl md:text-4xl font-logo text-gradient uppercase mb-8 tracking-widest leading-tight">İÇERİKLERİMİZDEN <br /> HABERDAR OLUN</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-12 font-medium">En yeni stratejiler and dijital fırsatlar yayınlandığı an e-postanıza gelsin.</p>
          <div className="flex flex-col md:flex-row max-w-lg mx-auto gap-4">
            <input 
              type="email" 
              placeholder="E-posta adresiniz" 
              className="flex-grow bg-white/5 border border-white/10 rounded-full px-8 py-5 text-white focus:outline-none focus:border-[#4285F4] transition-colors"
            />
            <button className="px-10 py-5 bg-gradient-primary rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-transform glow-indigo">
              ABONE OL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
