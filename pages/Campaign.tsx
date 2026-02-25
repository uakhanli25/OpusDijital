
import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Campaign: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-7xl font-logo mb-20 text-gradient text-center reveal uppercase tracking-[0.2em] leading-tight">ÖZEL KAMPANYA</h1>
      
      <div className="max-w-4xl mx-auto reveal">
        <div className="rotating-border-container rounded-[4rem] p-1">
          <div className="bg-[#08081a] p-10 md:p-16 rounded-[3.9rem] w-full relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#4285F4]/10 rounded-full blur-[100px]" />
            
            <div className="text-center mb-16 relative z-10">
              <h2 className="text-xl md:text-2xl font-extrabold text-white mb-6 uppercase tracking-[0.2em]">DİJİTAL BAŞLANGIÇ PAKETİ</h2>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:space-x-6">
                <span className="text-gray-600 line-through text-xl md:text-3xl font-bold italic">₺20.000</span>
                <span className="text-5xl md:text-8xl font-logo text-gradient tracking-tight">₺10.000</span>
              </div>
              <p className="text-gray-500 mt-6 font-extrabold uppercase tracking-[0.4em] text-[10px] md:text-xs">+ KDV</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                "Profesyonel Tasarım",
                "Mobil Uyumlu Arayüz",
                "SEO Altyapısı",
                "Hızlı Teslimat (72 Saat)",
                "Ücretsiz Domain (1 Yıl)",
                "Ücretsiz Hosting (1 Yıl)",
                "SSL Güvenlik Sertifikası",
                "E-posta Hesapları"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="p-1.5 bg-[#34A853]/20 rounded-full text-[#34A853]">
                    <Check size={14} />
                  </div>
                  <span className="text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center relative z-10">
              <Link 
                to="/iletisim" 
                className="inline-block w-full md:w-auto px-16 py-6 bg-gradient-primary rounded-full font-black uppercase tracking-[0.4em] text-xs hover:scale-105 transition-transform glow-indigo animate-breathe"
              >
                KAMPANYADAN YARARLAN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
