
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-logo text-gradient mb-8 uppercase tracking-widest">YAZI BULUNAMADI</h2>
        <Link to="/blog" className="px-8 py-4 glass rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-colors">
          BLOGA GERİ DÖN
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in pb-24">
      {/* Hero Header */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <img 
          src={post.image} 
          alt={`Opus Dijital Blog Detay: ${post.title}`} 
          className="w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-20">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center space-x-2 text-[#00D4FF] font-black text-xs uppercase tracking-[0.3em] mb-8 hover:translate-x-[-8px] transition-transform">
              <ArrowLeft size={16} />
              <span>TÜM YAZILAR</span>
            </Link>
            <div className="flex items-center space-x-4 mb-6">
              <span className="px-4 py-1.5 bg-[#4F46E5] rounded-full text-[10px] font-black uppercase tracking-widest">{post.category}</span>
              <div className="flex items-center space-x-2 text-gray-400 text-xs font-bold uppercase tracking-widest">
                <Calendar size={14} />
                <span>2026 BASKISI</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-6xl font-logo text-white uppercase tracking-tight leading-tight mb-6">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 mt-16">
        <div className="glass rounded-[3rem] p-8 md:p-16 border border-white/5">
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-bold italic border-l-4 border-[#00D4FF] pl-8 mb-12">
            {post.excerpt}
          </p>
          <div className="prose prose-invert prose-lg max-w-none text-gray-300 font-medium leading-[2.2] space-y-10 whitespace-pre-line">
            {post.content}
            
            <div className="mt-16 p-10 glass rounded-[2.5rem] border border-[#4F46E5]/20 relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#4F46E5]/10 rounded-full blur-[80px] group-hover:bg-[#4F46E5]/20 transition-colors" />
              <h3 className="text-2xl font-logo text-gradient uppercase mb-6 relative z-10">OPUS DİJİTAL ANALİZİ</h3>
              <p className="text-gray-400 italic relative z-10 text-lg">
                Dijital dünyada başarılı olmanın anahtarı, sadece trendleri takip etmek değil, onları markanızın DNA'sına entegre etmektir. 
                Bu makalede bahsettiğimiz stratejiler, 2021'den beri uyguladığımız ve %100 başarı sağladığımız metodolojilerdir. 
                Sektörünüzde liderliğe oynamak için profesyonel bir yol arkadaşına ihtiyacınız var.
              </p>
            </div>
          </div>
          
          <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center space-x-4">
              <Tag size={18} className="text-[#4F46E5]" />
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">#DİJİTALSTRATEJİ</span>
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">#2026TRENDS</span>
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">#OPUSDİJİTAL</span>
              </div>
            </div>
            <Link to="/iletisim" className="text-xs font-black text-[#00D4FF] uppercase tracking-[0.4em] hover:scale-110 transition-transform bg-white/5 px-6 py-3 rounded-full border border-white/10">
              HEMEN TEKLİF AL →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
