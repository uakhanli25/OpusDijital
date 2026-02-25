
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050510] border-t border-white/10 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16 items-center mb-16">
          {/* Sol Kısım: Bize Ulaşın */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h4 className="font-extrabold uppercase tracking-[0.4em] text-[10px] text-gradient">İLETİŞİM HATTI</h4>
            <div className="text-gray-400 font-data font-medium space-y-3 text-center md:text-left">
              <p className="hover:text-[#00D4FF] transition-colors tracking-tight text-xl">+90 0530 353 36 76</p>
              <p className="hover:text-[#00D4FF] transition-colors tracking-tight text-xl">+90 0501 569 95 64</p>
            </div>
          </div>
          
          {/* Orta Kısım: Logo ve Açıklama */}
          <div className="flex flex-col items-center text-center order-first md:order-none space-y-6">
            <Link to="/" className="flex flex-col items-center group">
              <span className="text-2xl md:text-4xl font-logo tracking-tighter text-gradient leading-none uppercase">OPUS DİJİTAL</span>
              <div className="rotating-line-wrapper mt-2 h-[1px] w-24 opacity-40"></div>
            </Link>
            <p className="text-gray-400 max-w-xs leading-relaxed font-medium text-sm">
              2021'den beri markanızın dijital dünyadaki pusulası. Teknolojiyi çalışanınız yapın.
            </p>
          </div>

          {/* Sağ Kısım: Takip Edin */}
          <div className="flex flex-col items-center space-y-6">
            <h4 className="font-extrabold uppercase tracking-[0.4em] text-[10px] text-gradient">SOSYAL MEDYA</h4>
            <div className="flex items-center space-x-6">
              <a href="#" className="p-4 glass rounded-2xl hover:scale-110 transition-transform text-white hover:text-[#4F46E5] border border-white/5">
                <Facebook size={20} />
              </a>
              <div className="flex flex-col items-center group cursor-pointer relative">
                <a href="#" className="p-4 glass rounded-2xl hover:scale-110 transition-transform text-white hover:text-[#00D4FF] border border-white/5">
                  <Instagram size={20} />
                </a>
                <span className="absolute -bottom-8 text-[9px] font-data font-semibold text-gradient opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-[0.3em] whitespace-nowrap bg-[#050510] px-2 py-1 rounded">@opus.dijital</span>
              </div>
              <a href="#" className="p-4 glass rounded-2xl hover:scale-110 transition-transform text-white hover:text-[#00D4FF] border border-white/5">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-10 border-t border-white/5">
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">Opus Dijital - © 2026. Tüm hakları saklıdır.</p>
          <p className="text-gray-800 text-[8px] mt-4 uppercase tracking-[0.6em] font-black opacity-50">ENGINEERING THE FUTURE TODAY.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
