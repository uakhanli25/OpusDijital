
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Plus, Minus, ArrowRight, Zap } from 'lucide-react';
import { FAQ_ITEMS, HAKKIMIZDA_TEXT } from '../constants';

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#4F46E5]/10 rounded-full blur-[150px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00D4FF]/10 rounded-full blur-[150px] -z-10" />
        
        <div className="max-w-6xl mx-auto text-center reveal">
          <div className="inline-flex items-center space-x-3 mb-8 p-1 px-4 glass rounded-full border border-white/5">
             <Zap size={14} className="text-[#FBBC05]" />
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Geleceğin Teknolojisi</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-logo uppercase tracking-tighter mb-10 text-gradient leading-[0.9]">
            DİJİTAL DÜNYADAKİ <br /> PUSULANIZ.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
            Karmaşık teknolojileri değil, somut sonuçları hedefliyoruz. 
            İşletmenizi 7/24 çalışan bir satış makinesine dönüştürüyoruz.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link to="/hizmetler" className="px-12 py-5 bg-gradient-primary rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:scale-105 transition-transform glow-indigo animate-breathe">
              NELER YAPIYORUZ?
            </Link>
            <Link to="/sekreterai" className="px-12 py-5 glass border border-white/10 rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white/5 transition-colors">
              SEKRETERAI İLE TANIŞIN
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-gray-500" />
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-24 px-6 reveal">
        <div className="max-w-4xl mx-auto rotating-border-container rounded-[2.5rem] p-1 glow-cyan shadow-[0_0_50px_rgba(0,212,255,0.2)]">
          <div className="bg-[#050510] rounded-[2.4rem] p-12 text-center w-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary opacity-50"></div>
            <h2 className="text-sm font-black mb-6 text-[#00D4FF] uppercase tracking-[0.5em]">SINIRLI SÜRE KAMPANYASI!</h2>
            <div className="text-7xl md:text-9xl font-logo text-white mb-6 tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">10.000 TL</div>
            <p className="text-base md:text-lg text-gray-400 mb-10 font-bold uppercase tracking-[0.2em]">Profesyonel Web Sitesi + Ücretsiz Domain & Hosting</p>
            <Link 
              to="/kampanya" 
              className="inline-flex items-center space-x-3 text-[#00D4FF] font-black uppercase tracking-[0.4em] text-[10px] hover:underline group"
            >
              <span>HEMEN DETAYLARI GÖR</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Hakkımızda Snippet */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative reveal">
             <div className="rotating-border-container rounded-3xl p-1">
               <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                alt="Opus Dijital Ajans Ekibi ve Çalışma Alanı" 
                className="rounded-[1.4rem] grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-8 rounded-2xl border border-white/10 glow-indigo">
              <span className="text-5xl font-logo text-gradient tracking-tighter">150+</span>
              <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.5em] mt-2">MUTLU MARKA</p>
            </div>
          </div>
          <div className="reveal">
            <h2 className="text-4xl md:text-6xl font-logo uppercase tracking-tighter mb-10 text-gradient leading-[0.9]">GÖRÜNMEZ OLMA <br /> SORUNUNU ÇÖZÜYORUZ.</h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-12 font-medium">
              {HAKKIMIZDA_TEXT}
            </p>
            <Link to="/hakkimizda" className="inline-flex items-center space-x-3 text-[#4F46E5] font-black uppercase tracking-[0.4em] text-[10px] hover:underline group">
              <span>HİKAYEMİZİ OKUYUN</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-32 px-6 bg-[#08081a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-logo text-center text-gradient reveal uppercase tracking-[0.2em] mb-20">SIKÇA SORULAN SORULAR</h2>
          <div className="space-y-6">
            {FAQ_ITEMS.map((faq, index) => (
              <div key={index} className="glass rounded-2xl overflow-hidden border border-white/5 reveal">
                <button 
                  className="w-full p-8 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="text-[11px] font-black uppercase tracking-[0.15em] leading-relaxed text-gray-200">{faq.question}</span>
                  {openFaq === index ? <Minus size={18} className="text-[#FBBC05]" /> : <Plus size={18} className="text-[#4285F4]" />}
                </button>
                <div className={`transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-[800px] opacity-100 p-8 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <p className="text-gray-400 leading-relaxed font-medium text-base border-t border-white/5 pt-6">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
