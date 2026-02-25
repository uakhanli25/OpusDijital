
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Zap, Info, Tag } from 'lucide-react';

const Packages: React.FC = () => {
  const packages = [
    {
      name: "SILVER PAKET",
      subtitle: "Dijital Başlangıç",
      setupPrice: "22.900 TL",
      monthlyPrice: "11.900 TL",
      features: [
        "Web sitesi kurulumu dahil",
        "SEO + site içi optimizasyon",
        "1 yıllık domain",
        "Haftada 2 sosyal medya postu",
        "Ayda 2 reel video",
        "Hikaye paylaşımları",
        "Aylık performans raporu"
      ],
      color: "glow-indigo",
      popular: false
    },
    {
      name: "GOLD PAKET",
      subtitle: "Dijital Büyüme",
      setupPrice: "25.900 TL",
      monthlyPrice: "16.900 TL",
      features: [
        "Web sitesi kurulumu dahil",
        "SEO + site içi optimizasyon",
        "1 yıllık domain",
        "Haftada 3 sosyal medya postu",
        "Ayda 4 reel video",
        "Hikaye planı",
        "Meta veya Google reklam yönetimi (1 platform)",
        "Reklam stratejisi ve analiz",
        "Aylık detaylı rapor"
      ],
      color: "glow-cyan",
      popular: true
    },
    {
      name: "PLATINUM PAKET",
      subtitle: "Tam Dijital Yönetim",
      setupPrice: "34.900 TL",
      monthlyPrice: "24.900 TL",
      features: [
        "Web sitesi kurulumu dahil",
        "SEO + site içi optimizasyon",
        "1 yıllık domain",
        "Haftada 3 post + 2 video içerik",
        "Hikaye planı",
        "Meta + Google reklam yönetimi",
        "Remarketing kurulumu",
        "Landing page önerileri",
        "Aylık strateji görüşmesi"
      ],
      color: "glow-indigo",
      popular: false
    }
  ];

  return (
    <div className="animate-fade-in pb-24">
      {/* 1. SAYFA ÜSTÜ BAŞLIK */}
      <section className="max-w-7xl mx-auto px-6 pt-12 mb-20 text-center reveal">
        <h1 className="text-4xl md:text-7xl font-logo text-gradient uppercase tracking-tighter mb-8 leading-tight">
          İşletmeniz İçin Hazır <br /> Dijital Büyüme Paketleri
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-3xl mx-auto">
          Web sitesi, SEO, sosyal medya ve reklam yönetimini tek noktadan profesyonel şekilde yönetin.
        </p>
      </section>

      {/* 2. KAMPANYA BLOĞU (PAKET DIŞI) */}
      <section className="px-6 mb-32 reveal">
        <div className="max-w-5xl mx-auto rotating-border-container rounded-[3rem] p-1 glow-cyan">
          <div className="bg-[#050510] p-10 md:p-16 rounded-[2.9rem] relative z-10 w-full overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Tag size={150} />
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
              <div className="flex-grow">
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 glass rounded-full mb-6 border border-white/10">
                  <Zap size={14} className="text-[#FBBC05]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FBBC05]">ÖZEL KURULUM FIRSATI</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-logo text-white uppercase tracking-widest mb-6">Web Sitesi Kurulum Kampanyası</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl font-medium">
                  Kurumsal web sitesi, 1 yıllık domain, başlangıç SEO çalışması ve site içi optimizasyon dahil özel kurulum paketi.
                </p>
                <p className="text-[10px] text-gray-600 font-black uppercase tracking-[0.2em]">
                  “Sınırlı süreli kurulum kampanyasıdır. Yönetim hizmetleri dahil değildir.”
                </p>
              </div>
              
              <div className="text-center md:text-right min-w-[280px]">
                <div className="mb-8">
                  <span className="block text-gray-600 line-through text-2xl font-bold mb-2">15.000 TL</span>
                  <span className="block text-6xl md:text-7xl font-logo text-gradient tracking-tighter">10.000 TL</span>
                  <span className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mt-2">+ KDV</span>
                </div>
                <Link 
                  to="/iletisim" 
                  className="inline-block w-full md:w-auto px-12 py-5 bg-gradient-primary rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:scale-105 transition-transform glow-cyan"
                >
                  TEKLİF AL
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BİLGİ KUTUSU */}
      <section className="max-w-4xl mx-auto px-6 mb-20 reveal">
        <div className="p-8 glass rounded-3xl border border-white/10 flex items-start space-x-6">
          <div className="p-3 bg-[#4285F4]/20 rounded-2xl text-[#4285F4] shrink-0">
            <Info size={24} />
          </div>
          <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed italic">
            “İlk ay ücreti; web sitesi kurulumu, teknik altyapı, SEO başlangıcı ve dijital strateji hazırlığını kapsar. 
            Sonraki aylarda yalnızca yönetim ve optimizasyon hizmet bedeli uygulanır.”
          </p>
        </div>
      </section>

      {/* 4. PAKETLER BAŞLIĞI */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center reveal">
        <h2 className="text-3xl md:text-5xl font-logo text-gradient uppercase tracking-[0.3em]">PAKETLERİMİZ</h2>
      </div>

      {/* 5. PAKET KARTLARI */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid lg:grid-cols-3 gap-10">
          {packages.map((pkg, idx) => (
            <div key={idx} className={`reveal group relative ${pkg.popular ? 'lg:-mt-4 lg:mb-4 scale-105' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                  <span className="px-6 py-2 bg-[#FBBC05] text-[#050510] font-black text-[10px] uppercase tracking-[0.4em] rounded-full shadow-[0_0_20px_rgba(251,188,5,0.4)]">
                    EN POPÜLER
                  </span>
                </div>
              )}
              
              <div className={`rotating-border-container rounded-[3rem] p-0.5 h-full ${pkg.color}`}>
                <div className="bg-[#050510] p-10 md:p-12 rounded-[2.9rem] h-full flex flex-col relative z-10">
                  <div className="mb-10 text-center">
                    <h3 className="text-2xl font-logo text-white uppercase tracking-widest mb-2">{pkg.name}</h3>
                    <p className="text-[10px] font-black text-[#4285F4] uppercase tracking-[0.4em] mb-8">{pkg.subtitle}</p>
                    
                    <div className="space-y-1 mb-8">
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">İlk Ay (Kurulum Dahil)</span>
                        <span className="text-4xl font-logo text-white tracking-tighter">{pkg.setupPrice}</span>
                      </div>
                      <div className="w-12 h-px bg-white/10 mx-auto my-4"></div>
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] font-black text-[#34A853] uppercase tracking-widest mb-1">Sonraki Aylık</span>
                        <span className="text-4xl font-logo text-gradient tracking-tighter">{pkg.monthlyPrice}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5 mb-12 flex-grow">
                    {pkg.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-4">
                        <Check size={16} className="text-[#34A853] mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-400 font-medium leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to="/iletisim" 
                    className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.4em] text-[10px] text-center transition-all ${
                      pkg.popular 
                      ? 'bg-gradient-primary text-white glow-cyan' 
                      : 'glass border border-white/10 text-white hover:bg-white/5'
                    }`}
                  >
                    PAKETİ SEÇİN
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PAKETLER ALTINA NOT */}
      <section className="max-w-4xl mx-auto px-6 reveal">
        <div className="p-8 glass rounded-3xl border border-white/5 text-center">
          <p className="text-gray-500 text-[11px] md:text-xs font-medium leading-relaxed italic">
            “Belirtilen paket ücretleri standart kapsam içindir. İşletmenin ölçeği, içerik yoğunluğu ve reklam bütçesine göre teklif netleştirilebilir. Reklam bütçeleri paket ücretine dahil değildir.”
          </p>
        </div>
      </section>
    </div>
  );
};

export default Packages;
