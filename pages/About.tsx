
import React from 'react';
import { BarChart3, Zap, ShieldCheck } from 'lucide-react';
import { HAKKIMIZDA_TEXT } from '../constants';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-7xl font-logo mb-16 text-gradient reveal uppercase tracking-[0.2em] leading-tight text-center md:text-left">HAKKIMIZDA</h1>
      
      <div className="grid md:grid-cols-2 gap-20 mb-32">
        <div className="space-y-10 reveal">
          <p className="text-lg md:text-2xl text-gray-200 leading-relaxed font-bold italic border-l-4 border-[#FBBC05] pl-8">
            "2021 yılından bu yana, dijital dünyada kaybolan markalara pusula oluyoruz."
          </p>
          <div className="text-gray-400 space-y-8 leading-relaxed text-base md:text-lg font-medium">
            <p>
              {HAKKIMIZDA_TEXT}
            </p>
            <p>
              Teknolojinin sunduğu imkanları karmaşa yaratmak için değil, somut ticari başarılar elde etmek için kullanıyoruz. 
              Opus Dijital bünyesinde barınan her proje, veriye dayalı stratejilerle ve tutkuyla şekillenir.
            </p>
          </div>
        </div>
        <div className="relative reveal">
          <div className="rotating-border-container rounded-[3rem] p-1">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
              className="rounded-[2.9rem] grayscale hover:grayscale-0 transition-all duration-1000" 
              alt="Opus Dijital Vizyon ve Strateji Toplantısı" 
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 reveal">
        {[
          { label: 'Proje Tamamlandı', value: '150+' },
          { label: 'Sektör Tecrübesi', value: '5 Yıl' },
          { label: 'Teknik Destek', value: '7/24' },
          { label: 'Müşteri Memnuniyeti', value: '%100' },
        ].map((stat, i) => (
          <div key={i} className="rotating-border-container rounded-3xl p-1">
            <div className="bg-[#08081a] p-10 rounded-[1.4rem] text-center w-full">
              <div className="text-3xl md:text-4xl font-logo text-gradient mb-2">{stat.value}</div>
              <div className="text-[9px] md:text-xs text-gray-500 uppercase font-extrabold tracking-widest">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
