import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const RecentBlogs: React.FC = () => {
  // Get the latest 2 blog posts
  const recentPosts = BLOG_POSTS.slice(0, 2);

  return (
    <section className="py-24 px-6 bg-[#050510]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
          <div>
            <h2 className="text-3xl md:text-5xl font-logo text-gradient uppercase tracking-[0.2em] mb-4">
              DİJİTAL BİLGİ BANKASI
            </h2>
            <p className="text-gray-400 font-medium max-w-2xl">
              Sektörel trendler, yapay zeka entegrasyonları, SEO stratejileri ve dijital büyüme rehberleri.
            </p>
          </div>
          <Link 
            to="/blog" 
            className="hidden md:inline-flex items-center space-x-3 text-[#00D4FF] font-black uppercase tracking-[0.4em] text-[10px] hover:underline group"
          >
            <span>TÜM YAZILARI GÖR</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {recentPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.id}`}
              className="group reveal"
            >
              <div className="rotating-border-container rounded-3xl p-0.5 h-full glow-indigo">
                <div className="bg-[#0a0a22] rounded-[1.4rem] overflow-hidden h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 glass px-4 py-1.5 rounded-full border border-white/10">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#00D4FF]">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#4F46E5] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center space-x-2 text-[10px] font-black text-[#4285F4] uppercase tracking-[0.3em] group-hover:translate-x-2 transition-transform">
                      <span>DEVAMINI OKU</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden reveal">
          <Link 
            to="/blog" 
            className="inline-flex items-center space-x-3 text-[#00D4FF] font-black uppercase tracking-[0.4em] text-[10px] hover:underline group"
          >
            <span>TÜM YAZILARI GÖR</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;
