
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Zap, ArrowRight, PhoneIncoming, MessageSquare, CalendarCheck, ShieldCheck, PlayCircle } from 'lucide-react';
import { SECTOR_CARDS } from '../constants';
import Modal from '../components/Modal';

const SekreterAI: React.FC = () => {
  const [activeCard, setActiveCard] = useState<any | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video otomatik oynatılamadı, kullanıcı etkileşimi bekleniyor.", error);
      });
    }
  }, []);

  const steps = [
    {
      icon: <PhoneIncoming className="w-8 h-8" />,
      title: "Akıllı Yönlendirme",
      desc: "Telefon trafiğiniz, sizin belirlediğiniz senaryoya göre SekreterAI sistemine bağlanır.",
      detail: "Teknik Çözüm: Mevcut telefon altyapınızı bozmadan, bulut santral teknolojimiz üzerinden basit bir 'koşullu yönlendirme' tanımlıyoruz. Sistemimiz 0.1ms gecikmeyle devreye girer. Gelen aramalar önce AI tarafından kimliklendirilir ve önceliğe göre sınıflandırılır. İş saatleri dışında veya operatörler meşgulken devreye girecek şekilde özelleştirilebilir."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Doğal Dil İşleme",
      desc: "AI, müşterinizi gerçek bir insan gibi dinler, anlar ve karmaşık soruları yanıtlar.",
      detail: "Teknik Çözüm: En gelişmiş LLM (Büyük Dil Modelleri) altyapısını kullanarak, markanızın ses tonuna ve bilgi havuzuna uygun bir karakter oluşturuyoruz. Müşteriniz 'Yarın saat 3'te boş yeriniz var mı?' dediğinde, AI bu cümleyi parse eder, niyet analizi yapar ve veritabanınızdan gerçek zamanlı kontrol sağlar."
    },
    {
      icon: <CalendarCheck className="w-8 h-8" />,
      title: "Otonom Aksiyon",
      desc: "Randevu oluşturur, sipariş alır veya teknik arıza kaydı açarak sistemi günceller.",
      detail: "Teknik Çözüm: SekreterAI sadece konuşmaz, aksiyon alır. Google Takvim, CRM veya özel veritabanlarınızla API üzerinden doğrudan entegre olur. Bir randevu alındığında hem müşteriye hem de size anlık onay mesajı gönderir. Hata payı yoktur; insan kaynaklı unutma veya yanlış not alma riskini sıfıra indirir."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Raporlama & Analiz",
      desc: "Tüm görüşmeler metinleştirilir ve analiz edilerek panelinize düşer.",
      detail: "Teknik Çözüm: Her günün sonunda, gelen aramaların duygu durumu analizi (sentiment analysis), en çok sorulan sorular ve kaçırılan fırsatlar hakkında detaylı bir rapor alırsınız. Ses kayıtları KVKK uyumlu bir şekilde şifrelenir ve dilediğiniz zaman panel üzerinden erişilebilir hale getirilir."
    }
  ];

  return (
    <div className="animate-fade-in max-w-7xl mx-auto px-6 py-24">
      {/* Hero Header */}
      <div className="flex items-center space-x-6 mb-10 reveal">
        <Bot className="w-10 h-10 text-[#4285F4] drop-shadow-[0_0_10px_rgba(66,133,244,0.5)]" />
        <span className="text-[10px] font-black tracking-[0.6em] text-[#34A853] uppercase">YAPAY ZEKA DEVRİMİ</span>
      </div>
      <h1 className="text-5xl md:text-8xl font-logo mb-10 text-gradient leading-[0.9] reveal uppercase tracking-tighter">SEKRETERAI</h1>

      {/* Hero Description - Reverted to Clean Text (No Frame) */}
      <div className="max-w-4xl mb-32 reveal">
          <h2 className="text-3xl md:text-5xl font-logo text-white uppercase tracking-widest mb-10 leading-tight">UYUMAYAN <br className="hidden md:block" /> EKİBİNİZ.</h2>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-medium mb-12">
            İşletmenizin telefonlarına <span className="text-white font-bold">7/24 bakan</span>, asla yorulmayan ve hata yapmayan dijital asistanınızla tanışın. 
            Maliyetlerinizi %80 düşürürken, operasyonel yükü sıfıra indiriyoruz.
          </p>
          <div className="flex flex-wrap gap-x-12 lg:gap-x-16 gap-y-10">
            <div className="flex items-center space-x-5 min-w-[200px]">
              <div className="w-1.5 h-12 bg-gradient-primary rounded-full shadow-[0_0_15px_rgba(79,70,229,0.5)]" />
              <div>
                <p className="text-base text-gray-200 font-black uppercase tracking-widest">Maliyet Avantajı</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-[0.2em]">%80'e varan tasarruf</p>
              </div>
            </div>
            <div className="flex items-center space-x-5 min-w-[200px]">
              {/* Vertical bar turned RED (#EA4335) */}
              <div className="w-1.5 h-12 bg-[#EA4335] rounded-full shadow-[0_0_15px_rgba(234,67,53,0.5)]" />
              <div>
                <p className="text-base text-gray-200 font-black uppercase tracking-widest">7/24 Teknik Destek</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-[0.2em]">Kesintisiz altyapı güvencesi</p>
              </div>
            </div>
            <div className="flex items-center space-x-5 min-w-[200px]">
              <div className="w-1.5 h-12 bg-[#FBBC05] rounded-full shadow-[0_0_15px_rgba(251,188,5,0.4)]" />
              <div>
                <p className="text-base text-gray-200 font-black uppercase tracking-widest">Satış Verimliliği</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-[0.2em]">Dönüşüm oranlarında %150 artış</p>
              </div>
            </div>
          </div>
      </div>
      
      {/* Video & Small Side Hero Section */}
      <div className="grid lg:grid-cols-5 gap-12 items-center mb-40 reveal">
        {/* Left: Video Player (3/5 width) */}
        <div className="lg:col-span-3">
          <div className="rotating-border-container rounded-[2.5rem] p-0.5 glow-indigo shadow-[0_0_60px_rgba(79,70,229,0.2)]">
            <div className="bg-[#050510] rounded-[2.4rem] overflow-hidden relative aspect-video w-full">
              <video 
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-500"
                autoPlay
                muted
                loop
                playsInline
                controls
                poster="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
                aria-label="SekreterAI Yapay Zeka Asistanı Tanıtım Videosu"
              >
                <source src="https://res.cloudinary.com/dma9fwann/video/upload/v1769780363/sekreter_tan%C4%B1t%C4%B1m_lrckwd.mp4" type="video/mp4" />
                Tarayıcınız video etiketini desteklemiyor.
              </video>
              
              <div className="absolute top-6 left-6 pointer-events-none z-10 opacity-50">
                <div className="flex items-center space-x-3 bg-black/70 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 shadow-2xl">
                   <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_#ef4444]" />
                   <span className="text-[9px] font-black text-white uppercase tracking-[0.2em]">OPUS AI MEDIA PLAYER</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Small Hero Title & Description */}
        <div className="lg:col-span-2 space-y-8">
          <div className="p-10 glass rounded-[3rem] border border-white/10 relative overflow-hidden h-full flex flex-col justify-center shadow-2xl">
             <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#4F46E5]/10 rounded-full blur-[80px]" />
             
             <h2 className="text-2xl md:text-3xl font-logo text-gradient uppercase tracking-widest mb-6 leading-tight">
               SEKRETERAI NEDİR?
             </h2>
             <p className="text-lg text-gray-400 leading-relaxed font-medium mb-10">
               Dijital asistanınızın yeteneklerini ve işletmenize katacağı değeri canlı örneklerle izleyin. Telefon trafiğinizi kazanca dönüştürmenin en teknolojik yolunu keşfedin.
             </p>

             <div className="space-y-4">
                <div className="flex items-center space-x-3 text-[#FBBC05] animate-pulse">
                  <PlayCircle size={20} />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em]">VİDEO REHBERİ İZLE</span>
                </div>
             </div>

             <div className="mt-12 pt-10 border-t border-white/5">
                <button className="w-full flex items-center justify-between group p-1">
                   <span className="text-[#00D4FF] font-black uppercase tracking-[0.4em] text-[10px]">DAHA FAZLA BİLGİ AL</span>
                   <div className="p-3 bg-white/5 rounded-full group-hover:bg-[#00D4FF] group-hover:text-black transition-all">
                      <ArrowRight size={18} />
                   </div>
                </button>
             </div>
          </div>
        </div>
      </div>

      {/* Nasıl Çalışır Section */}
      <div className="mb-40">
        <h2 className="text-3xl font-logo text-white uppercase tracking-widest mb-20 text-center reveal">NASIL ÇALIŞIR?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="reveal cursor-pointer group"
              onClick={() => setActiveCard(step)}
            >
              <div className="rotating-border-container rounded-3xl p-0.5 h-full glow-indigo">
                <div className="bg-[#050510] p-10 rounded-[1.4rem] h-full flex flex-col items-center text-center group-hover:bg-[#0a0a22] transition-colors relative z-10">
                  <div className="mb-6 text-[#4285F4] group-hover:scale-110 transition-transform">{step.icon}</div>
                  <h3 className="text-sm font-black text-white uppercase tracking-widest mb-4 group-hover:text-gradient transition-colors">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                  <div className="mt-8 text-[9px] font-black text-[#FBBC05] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity">
                    DETAYLI TEKNİK İNCELE →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sektörel Yayılım Section */}
      <div className="mb-32">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <h2 className="text-3xl font-logo text-gradient uppercase tracking-widest mb-8">SEKTÖREL ÇÖZÜMLER</h2>
          <p className="text-gray-400 font-medium">SekreterAI, her sektöre özel eğitilmiş modelleriyle işletmenize tam uyum sağlar.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SECTOR_CARDS.map((card, index) => (
            <div key={index} className="reveal group">
              <div className="rotating-border-container rounded-[2.5rem] p-0.5 h-full glow-cyan">
                <div className="bg-[#050510] p-10 rounded-[2.4rem] h-full flex flex-col transition-all duration-500 group-hover:bg-[#0a0a22] relative z-10">
                  <h3 className="text-xl font-logo text-white mb-6 uppercase tracking-widest group-hover:text-gradient transition-colors">{card.title}</h3>
                  <div className="space-y-6 flex-grow">
                    <div>
                      <h4 className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-2">SORUN:</h4>
                      <p className="text-sm text-gray-400 leading-relaxed italic">"{card.painPoint}"</p>
                    </div>
                    <div className="pt-6 border-t border-white/5">
                      <h4 className="text-[9px] font-black text-[#34A853] uppercase tracking-widest mb-2">AI ÇÖZÜMÜ:</h4>
                      <p className="text-sm text-gray-300 leading-relaxed font-medium">{card.solution}</p>
                    </div>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                     <span className="text-[8px] font-black text-[#4285F4] uppercase tracking-[0.3em]">Smart Integration</span>
                     <Zap size={14} className="text-[#FBBC05] animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Details */}
      <Modal 
        isOpen={!!activeCard} 
        onClose={() => setActiveCard(null)}
        title={activeCard?.title?.toUpperCase() || ''}
      >
        <div className="space-y-6">
          <p className="text-xl text-gray-200 font-bold italic leading-relaxed">
            {activeCard?.desc}
          </p>
          <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
            <h4 className="text-[10px] font-black text-[#4285F4] uppercase tracking-[0.4em] mb-4">TEKNİK METODOLOJİ</h4>
            <p className="text-gray-400 leading-relaxed text-base">
              {activeCard?.detail}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SekreterAI;
